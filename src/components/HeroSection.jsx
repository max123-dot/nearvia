import React, { useState, useEffect } from 'react';
import { Compass, MapPin, Sparkles, Search, ArrowRight } from 'lucide-react';

const SEARCH_PROMPTS = [
  "What barbers are open within 0.5 miles?",
  "Where can I buy artisanal sourdough bread nearby?",
  "Find e-bike repair services coming to my office...",
  "Discover rooftop cocktail bars with sunset views...",
  "Book a botanical organic spa facial for today...",
  "Explore boutique lofts and short-term stays around me..."
];

export default function HeroSection() {
  const [promptIdx, setPromptIdx] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setPromptIdx((prev) => (prev + 1) % SEARCH_PROMPTS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 900) return; // Disable tilt on mobile for performance
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / -25;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="hero" className="landing-section" style={{ paddingTop: '8rem', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', width: '100%' }}>
        
        {/* Left Column */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.4rem 1rem',
            borderRadius: '9999px',
            background: '#F5B700',
            color: '#0E0E10',
            fontWeight: 700,
            marginBottom: '1.5rem',
            fontSize: '0.85rem'
          }}>
            <Sparkles size={16} />
            <span>The Next-Generation Local Discovery Ecosystem</span>
          </div>

          <h1 className="syne-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.25rem)', lineHeight: 1.08, marginBottom: '1.5rem' }}>
            Bringing the world <br />
            <span className="gradient-text-cyan">closer to you.</span>
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '2rem', lineHeight: 1.6 }}>
            NearVia is a location-focused discovery platform connecting people with everything around them: <strong style={{ color: 'var(--text-main)' }}>products, services, dining, beauty, stays, and entertainment</strong> — all from one central portal.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
            <a href="http://localhost:3002" target="_blank" rel="noopener noreferrer" className="btn-glow-primary">
              <Compass size={20} />
              <span>Launch Live App Demo</span>
              <ArrowRight size={18} />
            </a>

            <a href="#concept" className="btn-outline-glow">
              <span>Explore Platform Vision</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)' }}>8 Pillars</div>
              <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Products, Services & Dining</div>
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#F5B700' }}>Hyper-Local</div>
              <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>0.1 to 5.0 Mile Radius</div>
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1E9463' }}>Unified</div>
              <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>One Centralized Ecosystem</div>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Preview Card */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d',
            cursor: 'pointer'
          }}
        >
          <div
            className="glass-panel animate-glow"
            style={{
              padding: '1.75rem',
              transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transition: 'transform 0.15s ease-out',
              position: 'relative',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <MapPin size={18} color="var(--text-main)" />
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>Proximity Scanner — San Francisco</span>
              </div>
              <span style={{ fontSize: '0.75rem', background: '#1E9463', color: '#FFF', padding: '0.2rem 0.6rem', borderRadius: '999px', fontWeight: 700 }}>
                ● Live Grid
              </span>
            </div>

            {/* Dynamic Search Bar Mock */}
            <div style={{
              background: 'var(--bg-dark)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '14px',
              padding: '0.85rem',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
              <Search size={18} color="#F5B700" />
              <div style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 600 }}>
                "{SEARCH_PROMPTS[promptIdx]}"
              </div>
            </div>

            {/* Category Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.85rem' }}>
              <div style={{ background: 'var(--bg-dark)', padding: '0.85rem', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-main)', fontWeight: 700 }}>🛍️ PRODUCTS</div>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', marginTop: '0.2rem', color: 'var(--text-main)' }}>Leather Tote Bag</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>0.4 mi away</div>
              </div>

              <div style={{ background: 'var(--bg-dark)', padding: '0.85rem', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-main)', fontWeight: 700 }}>💈 BEAUTY</div>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', marginTop: '0.2rem', color: 'var(--text-main)' }}>Crown Barbers</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>0.2 mi away</div>
              </div>

              <div style={{ background: 'var(--bg-dark)', padding: '0.85rem', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-main)', fontWeight: 700 }}>🍽️ FOOD</div>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', marginTop: '0.2rem', color: 'var(--text-main)' }}>Umami Ramen</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>0.3 mi away</div>
              </div>

              <div style={{ background: 'var(--bg-dark)', padding: '0.85rem', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-main)', fontWeight: 700 }}>🏨 STAYS</div>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', marginTop: '0.2rem', color: 'var(--text-main)' }}>Urban Loft</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>0.6 mi away</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
