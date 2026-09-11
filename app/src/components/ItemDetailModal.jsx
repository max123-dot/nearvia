import React, { useState } from 'react';
import { X, Star, MapPin, Phone, Clock, User, CheckCircle2, MessageSquare, Navigation, Calendar } from 'lucide-react';

export default function ItemDetailModal({ item, onClose, onOpenBooking, onOpenChat, onOpenDirections }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!item) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Hero Banner */}
        <div className="modal-hero">
          <img src={item.image} alt={item.title} />
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
          
          <div style={{ position: 'absolute', bottom: '1rem', left: '1.5rem', right: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <span className="card-category-badge" style={{ position: 'static' }}>
                {item.subcategory}
              </span>
              <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.75rem)', marginTop: '0.4rem', textShadow: '0 2px 10px rgba(0,0,0,0.8)', color: '#FFF' }}>
                {item.title}
              </h2>
            </div>
            <span className="card-distance-badge" style={{ position: 'static', fontSize: '0.85rem', padding: '0.4rem 0.75rem' }}>
              <MapPin size={14} />
              {item.distanceText}
            </span>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-subtle)', padding: '0 1.5rem', background: 'var(--bg-card)' }}>
          {['overview', 'offerings', 'reviews'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.85rem 1rem',
                minHeight: '44px',
                background: 'transparent',
                border: 'none',
                borderBottom: activeTab === tab ? '2px solid #F5B700' : '2px solid transparent',
                color: activeTab === tab ? 'var(--text-main)' : 'var(--text-muted)',
                fontWeight: activeTab === tab ? 700 : 500,
                fontSize: '0.9rem',
                cursor: 'pointer',
                textTransform: 'capitalize'
              }}
            >
              {tab === 'offerings' ? 'Offerings & Menu' : tab}
            </button>
          ))}
        </div>

        {/* Modal Content Body */}
        <div className="modal-body">
          {activeTab === 'overview' && (
            <>
              {/* Location & Hours Readout */}
              <div style={{ display: 'flex', gap: 'clamp(0.75rem, 2vw, 1.5rem)', flexWrap: 'wrap', background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <MapPin size={18} color="var(--primary-yellow)" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Location</div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.locationName}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Clock size={18} color="var(--accent-amber)" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Operating Hours</div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.operatingHours}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Phone size={18} color="var(--accent-emerald)" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Direct Phone</div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.phone}</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>About</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.description}</p>
              </div>

              {/* Owner / Host Card */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <img src={item.owner.avatar} alt={item.owner.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{item.owner.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.owner.title}</div>
                </div>
                
                {/* Direct Message Host Button */}
                <button
                  className="filter-btn active"
                  style={{ marginLeft: 'auto' }}
                  onClick={() => onOpenChat(item)}
                >
                  <MessageSquare size={15} />
                  <span>Message Host</span>
                </button>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                <button className="btn-primary-lg" style={{ flex: 1 }} onClick={() => onOpenBooking(item)}>
                  <Calendar size={18} />
                  <span>Book Appointment / Instant Order</span>
                </button>

                <button className="filter-btn" style={{ padding: '0.85rem 1.25rem' }} onClick={() => onOpenDirections(item)}>
                  <Navigation size={18} color="var(--primary-yellow)" />
                  <span>Directions</span>
                </button>
              </div>
            </>
          )}

          {activeTab === 'offerings' && (
            <div className="offerings-list">
              <h4 style={{ marginBottom: '0.5rem' }}>Available Offerings & Prices</h4>
              {item.offerings.map((offering, idx) => (
                <div key={idx} className="offering-item">
                  <div>
                    <strong style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>{offering.name}</strong>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', margin: '0.2rem 0 0' }}>{offering.desc}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontWeight: 800, color: 'var(--accent-emerald)', fontSize: '1rem' }}>{offering.price}</span>
                    <button
                      className="filter-btn active"
                      style={{ padding: '0.5rem 0.85rem', fontSize: '0.82rem', minHeight: '38px' }}
                      onClick={() => onOpenBooking(item, offering)}
                    >
                      Book / Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <Star size={24} fill="#F5B700" color="#F5B700" />
                <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>{item.rating}</span>
                <span style={{ color: 'var(--text-muted)' }}>based on {item.reviewsCount} verified local reviews</span>
              </div>

              {item.reviews.map((rev, idx) => (
                <div key={idx} style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <strong style={{ fontSize: '0.9rem' }}>{rev.user}</strong>
                    <div style={{ display: 'flex', gap: '0.2rem' }}>
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={12} fill="#F5B700" color="#F5B700" />
                      ))}
                    </div>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>"{rev.comment}"</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
