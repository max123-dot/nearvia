import React, { useState } from 'react';
import { Store, MapPin, Plus, CheckCircle, Sparkles, TrendingUp, Users, ArrowRight } from 'lucide-react';

export default function BusinessPortal({ onReturnToDiscover }) {
  const [formData, setFormData] = useState({
    businessName: '',
    category: 'food',
    address: '',
    description: '',
    phone: '',
    pricing: '$$'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '2rem auto 4rem', padding: '0 1.5rem' }}>
      {/* Hero Banner */}
      <div style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(0, 242, 254, 0.15) 100%)', border: '1px solid var(--border-glow)', borderRadius: 'var(--radius-lg)', padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(1.25rem, 3vw, 2rem)', marginBottom: '2.5rem' }}>
        <span className="hero-subtitle" style={{ color: 'var(--accent-purple)' }}>NearVia Merchant & Partner Portal</span>
        <h1 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.25rem)', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
          Connect with <span className="gradient-text">thousands of nearby customers</span> in your area.
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '650px' }}>
          Whether you sell products, offer specialized services, run a restaurant, salon, boutique stay, or host local events — NearVia brings local customers directly to your door.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <MapPin size={24} color="var(--primary-cyan)" />
            <h3 style={{ fontSize: '1.05rem', margin: '0.5rem 0 0.25rem' }}>Hyper-Local Reach</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Target users within 0.5 to 5 miles looking for immediate local solutions.</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <TrendingUp size={24} color="var(--accent-emerald)" />
            <h3 style={{ fontSize: '1.05rem', margin: '0.5rem 0 0.25rem' }}>Zero Commission MVP</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Keep 100% of your earnings for early partner signups during our launch.</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <Users size={24} color="var(--accent-purple)" />
            <h3 style={{ fontSize: '1.05rem', margin: '0.5rem 0 0.25rem' }}>Direct Messaging & Booking</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Instant customer interaction via integrated message drawers and booking slots.</p>
          </div>
        </div>
      </div>

      {/* Onboarding Form */}
      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '2rem' }}>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <CheckCircle size={54} color="var(--accent-emerald)" style={{ margin: '0 auto 1rem' }} />
            <h2>Welcome to NearVia Partner Portal!</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0.75rem auto 1.5rem' }}>
              Your business "{formData.businessName || 'Local Partner'}" has been submitted. Our local onboarding specialist will verify your listing within 2 hours.
            </p>
            <button className="btn-primary-lg" style={{ margin: '0 auto' }} onClick={onReturnToDiscover}>
              <span>Return to Discovery View</span>
              <ArrowRight size={18} />
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
              <Store size={22} color="var(--primary-cyan)" />
              <h3 style={{ fontSize: '1.25rem' }}>List Your Business or Service on NearVia</h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Business or Service Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Barber & Spa, Bay Area Bike Repairs"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', color: 'var(--text-main)', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Primary Pillar / Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', background: 'var(--bg-dark)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', color: 'var(--text-main)', outline: 'none' }}
                >
                  <option value="products">Products & Local Sellers</option>
                  <option value="services">Services & Freelancers</option>
                  <option value="businesses">Local Businesses & Shops</option>
                  <option value="food">Food & Dining / Cafes</option>
                  <option value="beauty">Beauty & Grooming / Salons</option>
                  <option value="stays">Hotels & Boutique Stays</option>
                  <option value="entertainment">Entertainment & Events</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Physical Address or Service Area</label>
              <input
                type="text"
                required
                placeholder="e.g. 542 Valencia St, San Francisco, CA"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', color: 'var(--text-main)', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Short Description & Value Proposition</label>
              <textarea
                rows={3}
                required
                placeholder="Describe what makes your local business unique, your offerings, hours, or specialties..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', color: 'var(--text-main)', outline: 'none', fontFamily: 'inherit' }}
              />
            </div>

            <button type="submit" className="btn-primary-lg" style={{ marginTop: '1rem' }}>
              <Plus size={18} />
              <span>Publish Listing to NearVia Ecosystem</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
