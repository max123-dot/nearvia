import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section id="concept" className="landing-section">
      <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
        <h2 className="syne-title" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
          The User Problem & <span className="gradient-text-cyan">The INMARA Solution</span>
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
          People often know exactly what they need, but have no way of knowing what is available nearby, who provides it, how far away it is, what it costs, or whether others recommend it.
        </p>
      </div>

      {/* Side by Side Comparison Grid — stacks to 1-col on mobile */}
      <div className="problem-solution-grid" style={{ marginBottom: '4rem' }}>
        {/* Fragmented World */}
        <div className="glass-panel problem-card" style={{ padding: '2.5rem', border: '1px solid rgba(239, 68, 68, 0.35)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <AlertTriangle size={26} color="#EF4444" />
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)' }}>The Fragmented World Today</h3>
          </div>
          
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--text-muted)' }}>
            <li style={{ display: 'flex', gap: '0.75rem' }}>
              <span style={{ color: '#EF4444', fontWeight: 800, flexShrink: 0 }}>✕</span>
              <span><strong style={{ color: 'var(--text-main)' }}>App Silos:</strong> You need 6 different apps for food, barbers, bike repairs, stays, local products, and events.</span>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem' }}>
              <span style={{ color: '#EF4444', fontWeight: 800, flexShrink: 0 }}>✕</span>
              <span><strong style={{ color: 'var(--text-main)' }}>Blind Proximity:</strong> Great local businesses 2 blocks away remain invisible because they lack e-commerce sites.</span>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem' }}>
              <span style={{ color: '#EF4444', fontWeight: 800, flexShrink: 0 }}>✕</span>
              <span><strong style={{ color: 'var(--text-main)' }}>Missing Context:</strong> Endless searching without clear distance, operating hours, or transparent pricing.</span>
            </li>
          </ul>
        </div>

        {/* The INMARA Ecosystem */}
        <div className="glass-panel solution-card" style={{ padding: '2.5rem', border: '1px solid rgba(245, 183, 0, 0.4)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <CheckCircle2 size={26} color="#F5B700" />
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)' }}>The INMARA Discovery Gateway</h3>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--text-muted)' }}>
            <li style={{ display: 'flex', gap: '0.75rem' }}>
              <span style={{ color: '#F5B700', fontWeight: 800, flexShrink: 0 }}>✓</span>
              <span><strong style={{ color: 'var(--text-main)' }}>Single Central Platform:</strong> Discover products, services, food, beauty, stays, and events in one unified app.</span>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem' }}>
              <span style={{ color: '#F5B700', fontWeight: 800, flexShrink: 0 }}>✓</span>
              <span><strong style={{ color: 'var(--text-main)' }}>Hyper-Local Proximity:</strong> See exact distance, open hours, transparent prices, and verified reviews.</span>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem' }}>
              <span style={{ color: '#F5B700', fontWeight: 800, flexShrink: 0 }}>✓</span>
              <span><strong style={{ color: 'var(--text-main)' }}>Direct Connection:</strong> Instant booking, table reservations, direct messaging, and local courier pick-up.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
