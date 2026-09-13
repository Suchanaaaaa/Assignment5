import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        {/* Left Content */}
        <div className="hero-copy">
          <h1>
            Build Your Ideal <span>Development Stack</span>
          </h1>
          <p>
            Explore frontend, backend, database, and tooling options, compare them
            side by side, and put together the stack that fits your next project.
          </p>
          <div className="hero-actions">
            <a className="gradient-button" href="#technologies">
              Explore Technologies
            </a>
            <a className="outline-button" href="#about">
              Learn More
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-visual">
          <img
            src="/assets/hero-stack.png"
            alt="Development Stack Illustration"
          />
        </div>
      </div>
    </section>
  );
}