import React, { useState } from 'react';
import { Compass, ExternalLink, Sun, Moon, Menu, X } from 'lucide-react';

export default function LandingNavbar({ theme, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: 'var(--bg-glass)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '0.85rem 1.5rem'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand Logo */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
            <img 
              src={theme === 'light' ? '/light-mode-logo.png' : '/dark-mode-logo.png'} 
              alt="INMARA" 
              style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
            />
            <span style={{ fontSize: '0.65rem', background: '#F5B700', color: '#0E0E10', padding: '0.15rem 0.5rem', borderRadius: '999px', fontWeight: 700 }}>
              ECOSYSTEM
            </span>
          </a>

          {/* Desktop Navigation Links (> 768px) */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav-actions">
            <a href="#concept" style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>The Concept</a>
            <a href="#pillars" style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>8 Pillars</a>
            <a href="#perspective" style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>For Community</a>
            <a href="#how-it-works" style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>How It Works</a>
            <a href="#demo" style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>Sandbox</a>
          </nav>

          {/* Desktop Action Buttons & Theme Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={onToggleTheme}
              style={{
                padding: '0.65rem',
                borderRadius: '50%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-main)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} color="#F5B700" />}
            </button>

            <a
              href="http://localhost:3002"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow-primary desktop-nav-actions"
              style={{ padding: '0.65rem 1.35rem', fontSize: '0.9rem' }}
            >
              <Compass size={16} />
              <span>Launch App</span>
              <ExternalLink size={14} />
            </a>

            {/* Mobile Hamburger Toggle Button (< 768px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.6rem',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-main)',
                cursor: 'pointer'
              }}
              className="mobile-hamburger-btn"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Hamburger Overlay Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <a
            href="#concept"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--text-main)', fontSize: '1.25rem', fontWeight: 700, textDecoration: 'none' }}
          >
            The Concept
          </a>
          <a
            href="#pillars"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--text-main)', fontSize: '1.25rem', fontWeight: 700, textDecoration: 'none' }}
          >
            8 Pillars
          </a>
          <a
            href="#perspective"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--text-main)', fontSize: '1.25rem', fontWeight: 700, textDecoration: 'none' }}
          >
            For Community
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--text-main)', fontSize: '1.25rem', fontWeight: 700, textDecoration: 'none' }}
          >
            How It Works
          </a>
          <a
            href="#demo"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--text-main)', fontSize: '1.25rem', fontWeight: 700, textDecoration: 'none' }}
          >
            Sandbox Preview
          </a>

          <a
            href="http://localhost:3002"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow-primary"
            style={{ textAlign: 'center', justifyContent: 'center', marginTop: 'auto' }}
          >
            <Compass size={18} />
            <span>Launch Live App</span>
            <ExternalLink size={16} />
          </a>
        </div>
      )}
    </>
  );
}
