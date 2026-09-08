import React, { useState } from 'react';
import { UserCheck, Store, MapPin, Search, Calendar, MessageSquare, Zap, ShieldCheck, TrendingUp } from 'lucide-react';

export default function DualPerspective() {
  const [activeTab, setActiveTab] = useState('user');

  return (
    <section id="perspective" className="landing-section">
      <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
        <h2 className="syne-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Designed for <span className="gradient-text-cyan">Everyone in the Community</span>
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
          INMARA creates a mutually beneficial feedback loop connecting local consumers with nearby creators and service providers.
        </p>

        {/* Tab Selector */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', padding: '0.4rem', borderRadius: '9999px', border: '1px solid var(--border-subtle)', marginTop: '2rem', background: 'var(--bg-card)' }}>
          <button
            onClick={() => setActiveTab('user')}
            style={{
              padding: '0.65rem 1.5rem',
              borderRadius: '9999px',
              border: 'none',
              background: activeTab === 'user' ? '#F5B700' : 'transparent',
              color: activeTab === 'user' ? '#0E0E10' : 'var(--text-muted)',
              fontWeight: 700,
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              transition: 'all 0.25s'
            }}
          >
            <UserCheck size={18} />
            <span>For Local Users & Buyers</span>
          </button>

          <button
            onClick={() => setActiveTab('business')}
            style={{
              padding: '0.65rem 1.5rem',
              borderRadius: '9999px',
              border: 'none',
              background: activeTab === 'business' ? 'var(--text-main)' : 'transparent',
              color: activeTab === 'business' ? '#F5B700' : 'var(--text-muted)',
              fontWeight: 700,
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              transition: 'all 0.25s'
            }}
          >
            <Store size={18} />
            <span>For Businesses & Providers</span>
          </button>
        </div>
      </div>

      {/* Tab Panels */}
      {activeTab === 'user' ? (
        <div className="glass-panel" style={{ padding: 'clamp(1.5rem, 4vw, 3rem)', border: '1px solid rgba(245, 183, 0, 0.25)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--cyan)', fontWeight: 700, marginBottom: '0.5rem' }}>
                <Search size={20} />
                <span>Hyper-Local Search</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Instant Neighborhood Radius</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>Search by exact distance radius (0.1 to 5.0 miles). Find items you can pick up in 10 minutes or services arriving at your door today.</p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--emerald)', fontWeight: 700, marginBottom: '0.5rem' }}>
                <ShieldCheck size={20} />
                <span>Transparent Context</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Real Prices & Reviews</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>Compare upfront pricing, operating hours, and authentic verified reviews from neighbors before making a decision.</p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--purple)', fontWeight: 700, marginBottom: '0.5rem' }}>
                <Calendar size={20} />
                <span>One-Click Action</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Book, Buy, or Contact</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>Book barber appointments, reserve tables, purchase products, or chat directly with local owners without leaving the platform.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="glass-panel" style={{ padding: 'clamp(1.5rem, 4vw, 3rem)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--purple)', fontWeight: 700, marginBottom: '0.5rem' }}>
                <MapPin size={20} />
                <span>Targeted Foot Traffic</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Hyper-Local Exposure</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>Be discovered by people walking or living within 1 mile of your storefront or service zone who are ready to buy.</p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--pink)', fontWeight: 700, marginBottom: '0.5rem' }}>
                <TrendingUp size={20} />
                <span>No Technical Friction</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Publish in 3 Minutes</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>No complex website setup needed. Publish your offerings, menu items, or service rates directly from your smartphone.</p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--cyan)', fontWeight: 700, marginBottom: '0.5rem' }}>
                <MessageSquare size={20} />
                <span>Direct Customer Relation</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Zero-Middleman Chat</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>Communicate directly with your local patrons, answer custom requests, and build lasting neighborhood loyalty.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
