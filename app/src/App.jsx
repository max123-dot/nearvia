import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import CategoryNav from './components/CategoryNav';
import HeroSearch from './components/HeroSearch';
import DiscoveryCard from './components/DiscoveryCard';
import InteractiveMap from './components/InteractiveMap';
import ItemDetailModal from './components/ItemDetailModal';
import BookingModal from './components/BookingModal';
import ChatDrawer from './components/ChatDrawer';
import DirectionsModal from './components/DirectionsModal';
import BusinessPortal from './components/BusinessPortal';
import { DISCOVERY_ITEMS, CATEGORIES } from './data/mockData';
import { X, Calendar, MessageSquare, MapPin, CheckCircle2, Clock, Map, LayoutGrid } from 'lucide-react';

export default function App() {
  // Theme state ('light' | 'dark')
  const [theme, setTheme] = useState('light');

  // Mode state ('discover' | 'partner')
  const [activeMode, setActiveMode] = useState('discover');

  // Mobile View Mode ('grid' | 'map') for screens < 992px
  const [mobileViewMode, setMobileViewMode] = useState('grid');

  // Filter States
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('San Francisco, CA');
  const [radius, setRadius] = useState(2.0);
  const [openNowOnly, setOpenNowOnly] = useState(false);
  const [topRatedOnly, setTopRatedOnly] = useState(false);
  const [instantBookOnly, setInstantBookOnly] = useState(false);
  const [sortBy, setSortBy] = useState('distance');

  // PWA & Network States
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [canInstallPWA, setCanInstallPWA] = useState(false);
  const [isOffline, setIsOffline] = useState(typeof navigator !== 'undefined' ? !navigator.onLine : false);
  const [showInstallBanner, setShowInstallBanner] = useState(true);

  // Modal / Drawer Selection States
  const [selectedItem, setSelectedItem] = useState(null);
  const [bookingTarget, setBookingTarget] = useState(null); // { item, offering }
  const [chatTargetItem, setChatTargetItem] = useState(null);
  const [directionsTargetItem, setDirectionsTargetItem] = useState(null);
  
  // User Data States
  const [savedIds, setSavedIds] = useState([]);
  const [userBookings, setUserBookings] = useState([
    {
      id: 'NearVia-481920',
      itemId: 'food-1',
      itemTitle: 'Umami Ramen & Izakaya',
      itemImage: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
      locationName: 'Mission District, San Francisco',
      offeringName: 'Signature Tonkotsu Ramen',
      offeringPrice: '$18.50',
      date: '2026-09-07',
      time: '06:30 PM',
      guests: 2,
      customerName: 'Alex Morgan',
      customerPhone: '(415) 555-0199',
      status: 'Confirmed',
      timestamp: '10:45 AM'
    }
  ]);
  const [myBookingsOpen, setMyBookingsOpen] = useState(false);
  const [inboxOpen, setInboxOpen] = useState(false);

  // Chat Conversations State: { [itemId]: [ { sender: 'user'|'host', text: '', time: '' } ] }
  const [chatMessages, setChatMessages] = useState({
    'beauty-1': [
      { sender: 'host', text: "Hey! Welcome to Crown & Blade Barbershop. I'm Mateo. We have openings for fades & beard sculpting today!", time: '09:15 AM' },
      { sender: 'user', text: 'Hi Mateo! Do you have any slots around 2:00 PM?', time: '09:18 AM' },
      { sender: 'host', text: 'Yes, 2:00 PM works great. Feel free to book it directly on NearVia!', time: '09:20 AM' }
    ]
  });

  // PWA Install Event & Online/Offline Listeners
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setCanInstallPWA(true);
    };

    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleInstallPWA = async () => {
    if (!deferredPrompt) {
      alert('To install NearVia PWA:\n• On iOS/Safari: Tap Share -> Add to Home Screen.\n• On Android/Chrome: Tap 3 dots -> Install App.');
      return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setCanInstallPWA(false);
      setDeferredPrompt(null);
    }
  };

  // Toggle Dark Mode
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);

  // Toggle Saved Item
  const handleToggleSave = (id) => {
    setSavedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Add Confirmed Booking
  const handleConfirmBooking = (newBooking) => {
    setUserBookings(prev => [newBooking, ...prev]);
  };

  // Send Chat Message with Simulated Host Reply
  const handleSendMessage = (itemId, text) => {
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg = { sender: 'user', text, time: timeNow };

    setChatMessages(prev => ({
      ...prev,
      [itemId]: [...(prev[itemId] || []), userMsg]
    }));

    setTimeout(() => {
      const itemObj = DISCOVERY_ITEMS.find(i => i.id === itemId);
      const hostName = itemObj ? itemObj.owner.name : 'Host';
      const hostReply = {
        sender: 'host',
        text: `Thanks for reaching out! ${hostName} received your message. Let us know if you'd like to place an order or schedule a slot!`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatMessages(prev => ({
        ...prev,
        [itemId]: [...(prev[itemId] || []), hostReply]
      }));
    }, 1500);
  };

  // Filter & Sort Logic
  const filteredItems = useMemo(() => {
    return DISCOVERY_ITEMS.filter(item => {
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matches = 
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.subcategory.toLowerCase().includes(query) ||
          item.locationName.toLowerCase().includes(query);
        if (!matches) return false;
      }
      if (item.distanceMiles > radius) {
        return false;
      }
      if (openNowOnly && !item.badges.includes('Open Now')) {
        return false;
      }
      if (topRatedOnly && item.rating < 4.8) {
        return false;
      }
      if (instantBookOnly && (!item.badges.includes('Instant Booking') && !item.badges.includes('Instant Book'))) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'distance') return a.distanceMiles - b.distanceMiles;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'reviews') return b.reviewsCount - a.reviewsCount;
      return 0;
    });
  }, [activeCategory, searchQuery, radius, openNowOnly, topRatedOnly, instantBookOnly, sortBy]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header Navbar */}
      <Navbar
        activeMode={activeMode}
        setActiveMode={setActiveMode}
        location={location}
        setLocation={setLocation}
        savedCount={savedIds.length}
        theme={theme}
        onToggleTheme={toggleTheme}
        bookingsCount={userBookings.length}
        onOpenBookings={() => setMyBookingsOpen(true)}
        unreadMessagesCount={Object.keys(chatMessages).length}
        onOpenInbox={() => setInboxOpen(true)}
        mobileViewMode={mobileViewMode}
        onToggleMobileViewMode={() => setMobileViewMode(prev => prev === 'grid' ? 'map' : 'grid')}
        canInstallPWA={canInstallPWA}
        onInstallPWA={handleInstallPWA}
        isOffline={isOffline}
      />

      {/* PWA Banner (If installable or offline) */}
      {canInstallPWA && showInstallBanner && (
        <div style={{ background: '#F5B700', color: '#0E0E10', padding: '0.65rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', fontWeight: 700, fontSize: '0.875rem', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>📱 Install NearVia Web App for offline discovery, instant launches & native home screen access!</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <button
              onClick={handleInstallPWA}
              style={{ background: '#0E0E10', color: '#F5B700', border: 'none', padding: '0.35rem 0.85rem', borderRadius: '999px', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' }}
            >
              Install App
            </button>
            <button
              onClick={() => setShowInstallBanner(false)}
              style={{ background: 'transparent', border: 'none', color: '#0E0E10', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {activeMode === 'partner' ? (
        <BusinessPortal onReturnToDiscover={() => setActiveMode('discover')} />
      ) : (
        <>
          {/* Hero Banner & Search Controls */}
          <HeroSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            radius={radius}
            setRadius={setRadius}
            openNowOnly={openNowOnly}
            setOpenNowOnly={setOpenNowOnly}
            topRatedOnly={topRatedOnly}
            setTopRatedOnly={setTopRatedOnly}
            instantBookOnly={instantBookOnly}
            setInstantBookOnly={setInstantBookOnly}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          {/* 8 Pillar Category Navigation */}
          <CategoryNav
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          {/* Floating Mobile View Switcher Pill (< 992px) */}
          <div className="mobile-view-toggle-wrap">
            <button
              className="mobile-view-toggle-btn"
              onClick={() => setMobileViewMode(prev => prev === 'grid' ? 'map' : 'grid')}
            >
              {mobileViewMode === 'grid' ? <Map size={18} /> : <LayoutGrid size={18} />}
              <span>{mobileViewMode === 'grid' ? 'Switch to Map View' : 'Switch to Grid View'}</span>
            </button>
          </div>

          {/* Main Dual-Pane Layout: Grid & Interactive Map */}
          <main className="main-content-layout">
            {/* Grid Section */}
            <section
              className="cards-grid-section"
              style={{ display: (window.innerWidth < 992 && mobileViewMode === 'map') ? 'none' : 'flex' }}
            >
              <div className="grid-header">
                <h3>
                  {activeCategory === 'all' 
                    ? 'All Local Discoveries' 
                    : `Nearby ${CATEGORIES.find(c => c.id === activeCategory)?.name || activeCategory}`}
                </h3>
                <span className="grid-count-text">
                  Showing {filteredItems.length} results within {radius} mi
                </span>
              </div>

              {filteredItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>No local discoveries found matching your filters.</p>
                  <button
                    className="filter-btn active"
                    style={{ margin: '1rem auto 0' }}
                    onClick={() => {
                      setActiveCategory('all');
                      setSearchQuery('');
                      setRadius(5.0);
                      setOpenNowOnly(false);
                      setTopRatedOnly(false);
                      setInstantBookOnly(false);
                    }}
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="cards-container">
                  {filteredItems.map(item => (
                    <DiscoveryCard
                      key={item.id}
                      item={item}
                      isSelected={selectedItem?.id === item.id}
                      onSelect={(selected) => setSelectedItem(selected)}
                      isSaved={savedIds.includes(item.id)}
                      onToggleSave={handleToggleSave}
                    />
                  ))}
                </div>
              )}
            </section>

            {/* Interactive Map Section */}
            <aside style={{ display: (window.innerWidth < 992 && mobileViewMode === 'grid') ? 'none' : 'block' }}>
              <InteractiveMap
                items={filteredItems}
                selectedItem={selectedItem}
                onSelectItem={(item) => setSelectedItem(item)}
              />
            </aside>
          </main>

          {/* Item Detail Modal */}
          {selectedItem && (
            <ItemDetailModal
              item={selectedItem}
              onClose={() => setSelectedItem(null)}
              onOpenBooking={(item, offering) => setBookingTarget({ item, offering })}
              onOpenChat={(item) => setChatTargetItem(item)}
              onOpenDirections={(item) => setDirectionsTargetItem(item)}
            />
          )}

          {/* Interactive Booking Modal */}
          {bookingTarget && (
            <BookingModal
              item={bookingTarget.item}
              initialOffering={bookingTarget.offering}
              onClose={() => setBookingTarget(null)}
              onConfirmBooking={handleConfirmBooking}
            />
          )}

          {/* Direct Messaging Chat Drawer */}
          {chatTargetItem && (
            <ChatDrawer
              item={chatTargetItem}
              messages={chatMessages}
              onSendMessage={handleSendMessage}
              onClose={() => setChatTargetItem(null)}
            />
          )}

          {/* Turn-by-Turn Directions Modal */}
          {directionsTargetItem && (
            <DirectionsModal
              item={directionsTargetItem}
              onClose={() => setDirectionsTargetItem(null)}
            />
          )}

          {/* My Bookings Drawer */}
          {myBookingsOpen && (
            <div className="modal-backdrop" onClick={() => setMyBookingsOpen(false)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
                <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-card)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Calendar size={20} color="#F5B700" />
                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>My Active Bookings & Reservations</h3>
                  </div>
                  <button className="modal-close-btn" style={{ position: 'static' }} onClick={() => setMyBookingsOpen(false)}>
                    <X size={18} />
                  </button>
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '70vh', overflowY: 'auto' }}>
                  {userBookings.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '2rem' }}>No active bookings yet. Explore items on NearVia and reserve!</div>
                  ) : (
                    userBookings.map((b) => (
                      <div key={b.id} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <img src={b.itemImage} alt={b.itemTitle} style={{ width: '70px', height: '70px', borderRadius: '12px', objectFit: 'cover' }} />
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <strong style={{ fontSize: '1rem', color: 'var(--text-main)' }}>{b.itemTitle}</strong>
                            <span style={{ fontSize: '0.72rem', background: 'rgba(30, 148, 99, 0.15)', color: 'var(--accent-emerald)', padding: '0.15rem 0.5rem', borderRadius: '999px', fontWeight: 700 }}>
                              {b.status}
                            </span>
                          </div>
                          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{b.offeringName} ({b.offeringPrice})</div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem', display: 'flex', gap: '1rem' }}>
                            <span>📅 {b.date} at {b.time}</span>
                            <span>👥 {b.guests} guest(s)</span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Messages Inbox Drawer */}
          {inboxOpen && (
            <div className="modal-backdrop" onClick={() => setInboxOpen(false)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '580px' }}>
                <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-card)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <MessageSquare size={20} color="#F5B700" />
                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Direct Messages Inbox</h3>
                  </div>
                  <button className="modal-close-btn" style={{ position: 'static' }} onClick={() => setInboxOpen(false)}>
                    <X size={18} />
                  </button>
                </div>

                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {DISCOVERY_ITEMS.map((item) => {
                    const hasMessages = chatMessages[item.id] && chatMessages[item.id].length > 0;
                    const lastMsg = hasMessages ? chatMessages[item.id][chatMessages[item.id].length - 1] : null;

                    return (
                      <div
                        key={item.id}
                        onClick={() => {
                          setInboxOpen(false);
                          setChatTargetItem(item);
                        }}
                        style={{
                          background: 'var(--bg-card)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: 'var(--radius-md)',
                          padding: '1rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                      >
                        <img src={item.owner.avatar} alt={item.owner.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <strong style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>{item.owner.name}</strong>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.title}</span>
                          </div>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.2rem 0 0', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                            {lastMsg ? `${lastMsg.sender === 'user' ? 'You: ' : ''}${lastMsg.text}` : `Start conversation with ${item.owner.name}...`}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

        </>
      )}

      {/* Footer */}
      <footer style={{ marginTop: 'auto', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-card)', padding: '2rem 1.5rem 6rem' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div>
            <img src={theme === 'light' ? '/light-mode-logo.png' : '/dark-mode-logo.png'} alt="NearVia" style={{ height: '28px', width: 'auto', objectFit: 'contain' }} />
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Bringing the world closer to you. Discover everything around you.</p>
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} NearVia Local Discovery Ecosystem. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
