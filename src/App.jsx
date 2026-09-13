import React from 'react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Header from './components/Header';
import Hero from './components/Hero';
import TechnologyCard from './components/TechnologyCard';
import StackPanel from './components/StackPanel';
import Footer from './components/Footer';

const DATA_URL = '/data/technologies.json';

export default function App() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState([]);
  const [busy, setBusy] = useState(true);

  useEffect(() => {
    let active = true;

    async function getTechnologies() {
      try {
        const res = await fetch(DATA_URL);
        if (!res.ok) throw new Error('Technology data could not be loaded.');
        const json = await res.json();
        if (active) setItems(Array.isArray(json) ? json : []);
      } catch (err) {
        console.error(err);
        toast.error('Unable to load technologies.');
      } finally {
        if (active) setBusy(false);
      }
    }

    getTechnologies();
    return () => { active = false; };
  }, []);

  const addTechnology = (item) => {
    setSelected((previous) => {
      if (previous.some((entry) => entry.id === item.id)) {
        toast.info(`${item.name} is already in your stack.`);
        return previous;
      }
      toast.success(`${item.name} added to your stack.`);
      return [...previous, item];
    });
  };

  const removeTechnology = (technologyId) => {
    const removed = selected.find((item) => item.id === technologyId);
    setSelected((previous) => previous.filter((item) => item.id !== technologyId));
    if (removed) toast.info(`${removed.name} removed.`);
  };

  const clearStack = () => {
    if (!selected.length) return;
    setSelected([]);
    toast.info('Your stack has been cleared.');
  };

  return (
    <div className="app">
      <Header />
      <main>
        {/* 1. Main Hero Banner (Build Your Ideal Development Stack) */}
        <Hero />

        {/* 2. Technologies Section */}
        <section className="section technologies-section" id="technologies">
          <header className="section-heading">
            <h2>Explore the <span>Technologies</span></h2>
            <p>Pick the tools you like and assemble a stack for your next project.</p>
          </header>

          <div className="technology-layout">
            <div className="technology-grid">
              {busy ? (
                <div className="loading-state">
                  <span className="spinner" aria-hidden="true" />
                  <p>Loading technologies...</p>
                </div>
              ) : items.length ? (
                items.map((item) => (
                  <TechnologyCard
                    key={item.id}
                    technology={item}
                    isAdded={selected.some((entry) => entry.id === item.id)}
                    onAdd={addTechnology}
                  />
                ))
              ) : (
                <div className="loading-state"><p>No technologies found.</p></div>
              )}
            </div>

            <StackPanel
              stack={selected}
              onRemove={removeTechnology}
              onRemoveAll={clearStack}
            />
          </div>
        </section>

        {/* 3. Projects Info Section */}
        <section className="section info-section" id="projects">
          <div className="info-card">
            <div>
              <span className="eyebrow">PROJECTS</span>
              <h2>Build a stack that fits the project.</h2>
              <p>
                Explore frontend, backend, database, language, styling and DevOps
                choices before you begin your next build.
              </p>
            </div>
            <a className="outline-button" href="#technologies">Choose Technologies</a>
          </div>
        </section>

        {/* 4. About Dev Stack Section (Now Below Technologies) */}
        <section className="section about-section" id="about">
          <div className="about-copy">
            <span className="eyebrow">ABOUT DEV STACK</span>
            <h2>Empowering developer choices for modern tech stacks.</h2>
            <p>
              Dev Stack streamlines how software engineers discover, evaluate, and assemble their ideal technology ecosystems. Effortlessly curate frameworks, databases, and developer tools to build high-performance applications.
            </p>
          </div>

          <div className="contact-card" id="contact">
            <span className="eyebrow">CONTACT</span>
            <h3>Ready to build?</h3>
            <p>Connect with us to customize your stack or get expert guidance for your next major project.</p>
            <a className="gradient-button" href="mailto:hello@devstack.example">Get in touch</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}