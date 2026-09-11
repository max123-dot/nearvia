import React from 'react';
import { Star, MapPin, ChevronRight, Heart } from 'lucide-react';

export default function DiscoveryCard({ item, isSelected, onSelect, isSaved, onToggleSave }) {
  const getActionText = (cat) => {
    switch (cat) {
      case 'food': return 'Explore Menu & Table';
      case 'beauty': return 'Book Appointment';
      case 'products': return 'View Product & Buy';
      case 'services': return 'Request Quote';
      case 'stays': return 'Check Availability';
      case 'entertainment': return 'Get Tickets';
      default: return 'Explore Details';
    }
  };

  return (
    <div
      className={`discovery-card ${isSelected ? 'highlighted' : ''}`}
      onClick={() => onSelect(item)}
    >
      <div className="card-image-wrap">
        <img src={item.image} alt={item.title} className="card-image" loading="lazy" />
        
        <span className="card-category-badge">
          {item.subcategory || item.category}
        </span>

        <span className="card-distance-badge">
          <MapPin size={12} />
          {item.distanceText}
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(item.id);
          }}
          style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.75rem',
            background: 'rgba(9, 13, 20, 0.75)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          title="Save Item"
        >
          <Heart size={15} color={isSaved ? 'var(--accent-pink)' : '#FFF'} fill={isSaved ? 'var(--accent-pink)' : 'none'} />
        </button>
      </div>

      <div className="card-body">
        <div className="card-meta">
          <div className="card-rating">
            <Star size={14} fill="var(--accent-amber)" color="var(--accent-amber)" />
            <span>{item.rating}</span>
            <span style={{ color: 'var(--text-dim)', fontWeight: 400 }}>({item.reviewsCount})</span>
          </div>
          <span className="card-price">{item.price}</span>
        </div>

        <h3 className="card-title">{item.title}</h3>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {item.description}
        </p>

        <div className="card-badges">
          {item.badges.slice(0, 3).map((badge, idx) => (
            <span key={idx} className="tag-badge">
              {badge}
            </span>
          ))}
        </div>

        <div className="card-footer">
          <button className="card-action-btn">
            <span>{getActionText(item.category)}</span>
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
