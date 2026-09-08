import React from 'react';
import { MapPin, Search, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Set Location & Radius',
    icon: MapPin,
    color: '#00F2FE',
    desc: 'Specify your current location or target neighborhood center, and select your preferred discovery radius (0.1 to 5.0 miles).'
  },
  {
    step: '02',
    title: 'Discover Across 8 Pillars',
    icon: Search,
    color: '#8B5CF6',
    desc: 'Filter seamlessly across products, skilled services, dining, salons, stays, and events on an interactive map grid.'
  },
  {
    step: '03',
    title: 'Connect, Book or Buy',
    icon: CheckCircle2,
    color: '#10B981',
    desc: 'Review transparent prices and verified feedback. Book a slot, request service, purchase a local item, or message the host.'
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="landing-section">
      <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
        <span style={{ color: 'var(--cyan)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Simplified Local Access
        </span>
        <h2 className="syne-title" style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
          How <span className="gradient-text-cyan">INMARA Works</span>
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
          From asking *"What can I find around me right now?"* to completing a local action in under 60 seconds.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', position: 'relative' }}>
        {STEPS.map((step, idx) => {
          const IconComp = step.icon;
          return (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '2.5rem 2rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: 'Syne, sans-serif', color: step.color, opacity: 0.8 }}>
                  {step.step}
                </span>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: `rgba(${parseInt(step.color.slice(1,3),16)}, ${parseInt(step.color.slice(3,5),16)}, ${parseInt(step.color.slice(5,7),16)}, 0.15)`,
                  border: `1px solid ${step.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <IconComp size={22} color={step.color} />
                </div>
              </div>

              <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
