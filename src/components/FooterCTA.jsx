import React from 'react';
import { Compass, ExternalLink, ArrowRight, Heart } from 'lucide-react';

export default function FooterCTA({ theme }) {
  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-card)', padding: '5rem 1.5rem 2.5rem', position: 'relative' }}>
      <div style={{ maxWdith: '1100px', margin: '0 auto' }}>
        
        {/* Glowing Banner Box */}
        <div className="glass-panel animate-glow" style={{ padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1rem, 4vw, 2rem)', textAlign: 'center', borderRadius: '32px', border: '1px solid rgba(245, 183, 0, 0.4)', marginBottom: '4rem' }}>
          <h2 className="syne-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            Bring your local world <span className="gradient-text-cyan">closer today.</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Start discovering products, services, dining, stays, and entertainment right around you.
          </p>

          <a href="http://localhost:3002" target="_blank" rel="noopener noreferrer" className="btn-glow-primary">
            <Compass size={20} />
            <span>Launch INMARA Platform Now</span>
            <ExternalLink size={18} />
          </a>
        </div>

        {/* Footer Brand Credit */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '2rem' }}>
          <div>
            <img src={theme === 'light' ? '/light-mode-logo.png' : '/dark-mode-logo.png'} alt="INMARA" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Making the world around every person easier to discover, understand, and access.
            </p>
          </div>

          <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.3rem', textAlign: 'center' }}>
            Crafted with <Heart size={14} color="var(--pink)" fill="var(--pink)" /> for local communities &bull; &copy; {new Date().getFullYear()} INMARA Ecosystem
          </div>
        </div>

      </div>
    </footer>
  );
}
