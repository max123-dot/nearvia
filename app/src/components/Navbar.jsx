import React from 'react';
import { Compass, MapPin, Store, Heart, User, Sun, Moon, Calendar, MessageSquare, Map, Download, WifiOff } from 'lucide-react';

export default function Navbar({
  activeMode,
  setActiveMode,
  location,
  savedCount,
  theme,
  onToggleTheme,
  bookingsCount,
  onOpenBookings,
  unreadMessagesCount,
  onOpenInbox,
  mobileViewMode,
  onToggleMobileViewMode,
  canInstallPWA,
  onInstallPWA,
  isOffline
}) {
  return (
    <>
      <header className="app-header">
        <div className="nav-container">
          {/* Brand Logo */}
          <div className="brand-logo" onClick={() => setActiveMode('discover')}>
            <img 
              src={theme === 'light' ? '/light-mode-logo.png' : '/dark-mode-logo.png'} 
              alt="NearVia" 
              style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
            />
            <span style={{ fontSize: '0.625rem', background: '#F5B700', color: '#0E0E10', padding: '0.15rem 0.45rem', borderRadius: '999px', fontWeight: 800 }}>PWA</span>
          </div>

          {/* Location Selector & Offline Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div className="location-picker">
              <MapPin size={15} color="var(--primary-yellow)" />
              <span>{location}</span>
            </div>

            {isOffline && (
              <span style={{ fontSize: '0.75rem', background: 'rgba(213, 51, 58, 0.15)', color: 'var(--accent-red)', border: '1px solid var(--accent-red)', padding: '0.25rem 0.6rem', borderRadius: '999px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <WifiOff size={13} />
                <span>Offline Mode</span>
              </span>
            )}
          </div>

          {/* Desktop Navigation Action Controls (> 768px) */}
          <div className="desktop-nav-actions">
            {canInstallPWA && (
              <button
                className="filter-btn active"
                onClick={onInstallPWA}
                style={{ background: '#F5B700', color: '#0E0E10', fontWeight: 800 }}
                title="Install NearVia Web App"
              >
                <Download size={15} />
                <span>Install App</span>
              </button>
            )}

            <button 
              className={`filter-btn ${activeMode === 'discover' ? 'active' : ''}`}
              onClick={() => setActiveMode('discover')}
            >
              <Compass size={16} />
              <span>Discover</span>
            </button>

            <button 
              className={`filter-btn ${activeMode === 'partner' ? 'active' : ''}`}
              onClick={() => setActiveMode('partner')}
            >
              <Store size={16} />
              <span>List Business</span>
            </button>

            <button
              className="filter-btn"
              onClick={onOpenBookings}
              style={{ position: 'relative' }}
              title="My Bookings & Reservations"
            >
              <Calendar size={16} />
              <span>Bookings</span>
              {bookingsCount > 0 && (
                <span style={{ position: 'absolute', top: '-4px', right: '-4px', background: 'var(--accent-emerald)', color: '#FFF', fontSize: '0.65rem', padding: '0.1rem 0.4rem', borderRadius: '999px', fontWeight: 800 }}>
                  {bookingsCount}
                </span>
              )}
            </button>

            <button
              className="filter-btn"
              onClick={onOpenInbox}
              style={{ position: 'relative' }}
              title="Messages Inbox"
            >
              <MessageSquare size={16} />
              <span>Messages</span>
              {unreadMessagesCount > 0 && (
                <span style={{ position: 'absolute', top: '-4px', right: '-4px', background: '#F5B700', color: '#0E0E10', fontSize: '0.65rem', padding: '0.1rem 0.4rem', borderRadius: '999px', fontWeight: 800 }}>
                  {unreadMessagesCount}
                </span>
              )}
            </button>

            <button
              className="filter-btn"
              onClick={onToggleTheme}
              style={{ padding: '0.65rem', borderRadius: '50%' }}
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} color="#F5B700" />}
            </button>

            <button className="filter-btn" style={{ padding: '0.65rem', borderRadius: '50%' }} title="Saved Items">
              <Heart size={16} color={savedCount > 0 ? 'var(--accent-red)' : 'inherit'} fill={savedCount > 0 ? 'var(--accent-red)' : 'none'} />
            </button>
          </div>
        </div>
      </header>

      {/* Fixed Mobile Bottom Navigation Bar (< 768px) */}
      <nav className="mobile-bottom-nav">
        <button
          className={`mobile-nav-item ${activeMode === 'discover' ? 'active' : ''}`}
          onClick={() => setActiveMode('discover')}
        >
          <Compass size={20} />
          <span>Discover</span>
        </button>

        <button
          className={`mobile-nav-item ${mobileViewMode === 'map' ? 'active' : ''}`}
          onClick={onToggleMobileViewMode}
        >
          <Map size={20} />
          <span>{mobileViewMode === 'grid' ? 'Map View' : 'Grid View'}</span>
        </button>

        <button
          className="mobile-nav-item"
          onClick={onOpenBookings}
        >
          <Calendar size={20} />
          <span>Bookings</span>
          {bookingsCount > 0 && <span className="mobile-nav-badge">{bookingsCount}</span>}
        </button>

        <button
          className="mobile-nav-item"
          onClick={onOpenInbox}
        >
          <MessageSquare size={20} />
          <span>Messages</span>
          {unreadMessagesCount > 0 && <span className="mobile-nav-badge">{unreadMessagesCount}</span>}
        </button>

        {canInstallPWA ? (
          <button
            className="mobile-nav-item active"
            onClick={onInstallPWA}
            style={{ color: '#F5B700' }}
          >
            <Download size={20} />
            <span>Install</span>
          </button>
        ) : (
          <button
            className={`mobile-nav-item ${activeMode === 'partner' ? 'active' : ''}`}
            onClick={() => setActiveMode('partner')}
          >
            <Store size={20} />
            <span>Partner</span>
          </button>
        )}

        <button
          className="mobile-nav-item"
          onClick={onToggleTheme}
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} color="#F5B700" />}
          <span>Theme</span>
        </button>
      </nav>
    </>
  );
}
