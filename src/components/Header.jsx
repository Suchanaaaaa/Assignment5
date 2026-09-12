import React from 'react'
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <button
          className="mobile-menu-button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span /><span />
        </button>

        <a className="brand" href="#home" onClick={close} aria-label="Dev Stack home">
          <img src="/assets/logo-text.png" alt="Dev Stack" />
        </a>

        <nav className={`main-nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          <a className="active" href="#home" onClick={close}>Home</a>
          <a href="#technologies" onClick={close}>Technologies</a>
          <a href="#projects" onClick={close}>Projects</a>
          <a href="#about" onClick={close}>About</a>
          <a href="#contact" onClick={close}>Contact</a>
        </nav>

        <div className="auth-actions">
          <button className="sign-in" onClick={() => window.alert('Sign In is ready for your authentication flow.')}>Sign In</button>
          <button className="sign-up" onClick={() => window.alert('Sign Up is ready for your registration flow.')}>Sign Up</button>
        </div>
      </div>
    </header>
  );
}
