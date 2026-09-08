import React, { useState } from 'react';
import { Search, MapPin, Star, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

const SAMPLE_DATA = [
  { title: 'Umami Ramen & Izakaya', cat: 'Food', distance: '0.3 mi', rating: 4.9, price: '$$', tag: 'Top Rated Tonkotsu' },
  { title: 'Crown & Blade Barbers', cat: 'Beauty', distance: '0.2 mi', rating: 4.9, price: '$$', tag: 'Instant Booking' },
  { title: 'Handcrafted Leather Tote', cat: 'Products', distance: '0.4 mi', rating: 5.0, price: '$$$', tag: 'Local Craftsman' },
  { title: 'FlowState Bike Repair', cat: 'Services', distance: '0.5 mi', rating: 5.0, price: '$$', tag: 'Mobile Service' },
  { title: 'The Urban Sanctuary Loft', cat: 'Stays', distance: '0.6 mi', rating: 4.95, price: '$$$', tag: 'Boutique Stay' },
  { title: 'Blue Note Jazz Club', cat: 'Entertainment', distance: '0.9 mi', rating: 4.85, price: '$$', tag: 'Live Tonight' }
];

export default function InteractiveSandbox() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = SAMPLE_DATA.filter(item => {
    if (selectedCategory !== 'All' && item.cat !== selectedCategory) return false;
    if (query && !item.title.toLowerCase().includes(query.toLowerCase()) && !item.tag.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  return (
    <section id="demo" className="landing-section">
      <div className="glass-panel" style={{ padding: 'clamp(1.5rem, 4vw, 3.5rem) clamp(1rem, 4vw, 2.5rem)', border: '1px solid rgba(245, 183, 0, 0.3)' }}>
        
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--cyan)', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
            <Sparkles size={16} />
            <span>INTERACTIVE PLATFORM SIMULATOR</span>
          </div>
          <h2 className="syne-title" style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>
            Test <span className="gradient-text-cyan">INMARA Proximity Engine</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem' }}>
            Try searching for products, food, barbers, bike repair, or stays in our live sandbox preview.
          </p>
        </div>

        {/* Search input & category pills */}
        <div style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'var(--bg-dark)', padding: '0.75rem 1.25rem', borderRadius: '16px', border: '1px solid var(--border-subtle)', marginBottom: '1.25rem' }}>
            <Search size={20} color="var(--cyan)" />
            <input
              type="text"
              placeholder="Search local discoveries (e.g. ramen, barber, bike, leather, loft)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-main)', width: '100%', fontSize: '1rem', fontFamily: 'inherit' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '0.6rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
            {['All', 'Food', 'Beauty', 'Products', 'Services', 'Stays', 'Entertainment'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  border: selectedCategory === cat ? '1px solid var(--cyan)' : '1px solid var(--border-subtle)',
                  background: selectedCategory === cat ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255,255,255,0.03)',
                  color: selectedCategory === cat ? '#F5B700' : 'var(--text-muted)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Preview */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', maxWidth: '1000px', margin: '0 auto' }}>
          {filtered.map((item, idx) => (
            <div key={idx} style={{ background: 'var(--bg-dark)', border: '1px solid var(--border-subtle)', padding: '1.25rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem' }}>
                <span style={{ color: '#F5B700', fontWeight: 700 }}>{item.cat}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: 'var(--text-muted)' }}>
                  <MapPin size={11} color="#F5B700" /> {item.distance}
                </span>
              </div>
              <strong style={{ fontSize: '1rem', color: 'var(--text-main)' }}>{item.title}</strong>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{item.tag}</span>
                <span style={{ color: '#F5B700', fontWeight: 700 }}>★ {item.rating}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="http://localhost:3002" target="_blank" rel="noopener noreferrer" className="btn-glow-primary">
            <span>Experience Full Interactive App</span>
            <ExternalLink size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
