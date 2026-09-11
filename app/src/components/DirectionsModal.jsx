import React, { useState } from 'react';
import { X, Navigation, MapPin, Footprints, Bike, Car, Bus, ExternalLink, ArrowRight, CornerUpRight } from 'lucide-react';

export default function DirectionsModal({ item, onClose }) {
  const [travelMode, setTravelMode] = useState('walking');

  const getEta = (mode) => {
    switch (mode) {
      case 'walking': return { time: '5 mins', dist: '0.3 mi', icon: Footprints };
      case 'biking': return { time: '2 mins', dist: '0.3 mi', icon: Bike };
      case 'driving': return { time: '3 mins', dist: '0.4 mi', icon: Car };
      case 'transit': return { time: '7 mins', dist: '0.5 mi', icon: Bus };
      default: return { time: '5 mins', dist: '0.3 mi', icon: Footprints };
    }
  };

  const stepsMap = {
    walking: [
      { text: 'Head South on Mission St toward 24th St', dist: '0.1 mi' },
      { text: 'Turn right onto 24th St', dist: '0.1 mi' },
      { text: `Arrive at ${item.title} (${item.locationName}) on your right`, dist: '0.1 mi' }
    ],
    biking: [
      { text: 'Head West on Valencia Bike Lane toward 24th St', dist: '0.2 mi' },
      { text: 'Turn left onto 24th St bike corridor', dist: '0.1 mi' },
      { text: `Arrive at ${item.title} bike rack entrance`, dist: 'Destination' }
    ],
    driving: [
      { text: 'Head South on Mission St', dist: '0.2 mi' },
      { text: 'Turn right at the light onto 24th St (Street parking available)', dist: '0.2 mi' },
      { text: `Arrive at ${item.title}`, dist: 'Destination' }
    ],
    transit: [
      { text: 'Walk to 24th St BART / MUNI Bus Stop #14', dist: '2 mins' },
      { text: 'Board MUNI Bus Line 14-Mission', dist: '3 mins (2 stops)' },
      { text: `Exit at 24th St & Walk 1 min to ${item.title}`, dist: '1 min' }
    ]
  };

  const currentEta = getEta(travelMode);
  const currentSteps = stepsMap[travelMode] || stepsMap.walking;
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(item.title + ' ' + item.locationName)}`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '580px' }}>
        
        {/* Header */}
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-card)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Navigation size={20} color="#F5B700" />
            <h3 style={{ fontSize: 'clamp(0.9rem, 3vw, 1.2rem)', margin: 0, color: 'var(--text-main)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '260px' }}>Directions to {item.title}</h3>
          </div>
          <button className="modal-close-btn" style={{ position: 'static' }} onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Origin -> Destination Box */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F5B700' }} />
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Start Point</span>
                <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-main)' }}>Your Current Location (Mission District, SF)</div>
              </div>
            </div>

            <div style={{ height: '1px', background: 'var(--border-subtle)', margin: '0 0.4rem' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <MapPin size={16} color="var(--accent-red)" />
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Destination</span>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>{item.title} &bull; {item.locationName}</div>
              </div>
            </div>
          </div>

          {/* Travel Mode Selector Chips */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
            {[
              { id: 'walking', label: 'Walk', time: '5m', icon: Footprints },
              { id: 'biking', label: 'Bike', time: '2m', icon: Bike },
              { id: 'driving', label: 'Drive', time: '3m', icon: Car },
              { id: 'transit', label: 'Transit', time: '7m', icon: Bus }
            ].map(mode => {
              const IconComp = mode.icon;
              const isActive = travelMode === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => setTravelMode(mode.id)}
                  style={{
                    padding: '0.65rem',
                    minHeight: '56px',
                    borderRadius: 'var(--radius-sm)',
                    border: isActive ? '2px solid #F5B700' : '1px solid var(--border-subtle)',
                    background: isActive ? '#F5B700' : 'var(--bg-card)',
                    color: isActive ? '#0E0E10' : 'var(--text-main)',
                    fontWeight: 700,
                    fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.2rem'
                  }}
                >
                  <IconComp size={18} />
                  <span>{mode.label} ({mode.time})</span>
                </button>
              );
            })}
          </div>

          {/* ETA Readout */}
          <div style={{ background: 'rgba(245, 183, 0, 0.15)', border: '1px solid #F5B700', borderRadius: 'var(--radius-md)', padding: '0.85rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Estimated Travel Time</span>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>
                {currentEta.time} ({currentEta.dist})
              </div>
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="filter-btn active"
              style={{ textDecoration: 'none', padding: '0.5rem 0.85rem' }}
            >
              <span>Open in Maps</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Turn-by-Turn Steps */}
          <div>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '0.6rem', color: 'var(--text-main)' }}>Turn-by-Turn Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {currentSteps.map((step, idx) => (
                <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#F5B700', color: '#0E0E10', fontWeight: 800, fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyCenter: 'center' }}>
                      {idx + 1}
                    </span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-main)', wordBreak: 'break-word', flex: '1', minWidth: '0' }}>{step.text}</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>{step.dist}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
