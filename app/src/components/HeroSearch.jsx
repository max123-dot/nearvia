import React from 'react';
import { Search, SlidersHorizontal, Navigation, Check, Clock, Star, Zap } from 'lucide-react';

export default function HeroSearch({
  searchQuery,
  setSearchQuery,
  radius,
  setRadius,
  openNowOnly,
  setOpenNowOnly,
  topRatedOnly,
  setTopRatedOnly,
  instantBookOnly,
  setInstantBookOnly,
  sortBy,
  setSortBy
}) {
  return (
    <section className="hero-banner">
      <div className="hero-card">
        <div>
          <span className="hero-subtitle">Local Discovery Ecosystem</span>
          <h1 className="hero-title">
            Discover <span className="gradient-text">everything</span> around you.
          </h1>
          <p className="hero-desc">
            Products, services, local businesses, dining, beauty, stays & entertainment — all within your neighborhood.
          </p>
        </div>

        {/* Search & Filter Inputs */}
        <div className="search-filter-wrapper">
          <div className="search-input-group">
            <Search size={18} color="var(--primary-cyan)" />
            <input
              type="text"
              placeholder="What are you looking for? (e.g. ramen, barber, leather bag, bike repair)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Distance Radius */}
          <div className="filter-btn" style={{ gap: '0.6rem' }}>
            <Navigation size={16} color="var(--primary-cyan)" />
            <span>Within:</span>
            <select
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--primary-cyan)',
                fontWeight: 600,
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value={0.5} style={{ background: '#090D14' }}>0.5 miles</option>
              <option value={1.0} style={{ background: '#090D14' }}>1.0 mile</option>
              <option value={2.0} style={{ background: '#090D14' }}>2.0 miles</option>
              <option value={5.0} style={{ background: '#090D14' }}>5.0 miles</option>
            </select>
          </div>

          {/* Quick Toggle Filters */}
          <button
            className={`filter-btn ${openNowOnly ? 'active' : ''}`}
            onClick={() => setOpenNowOnly(!openNowOnly)}
          >
            <Clock size={15} />
            <span>Open Now</span>
          </button>

          <button
            className={`filter-btn ${topRatedOnly ? 'active' : ''}`}
            onClick={() => setTopRatedOnly(!topRatedOnly)}
          >
            <Star size={15} color={topRatedOnly ? 'var(--accent-amber)' : 'inherit'} />
            <span>Top Rated (4.8+)</span>
          </button>

          <button
            className={`filter-btn ${instantBookOnly ? 'active' : ''}`}
            onClick={() => setInstantBookOnly(!instantBookOnly)}
          >
            <Zap size={15} color={instantBookOnly ? 'var(--primary-cyan)' : 'inherit'} />
            <span>Instant Book</span>
          </button>

          {/* Sort selector */}
          <div className="filter-btn" style={{ marginLeft: 'auto' }}>
            <SlidersHorizontal size={15} />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-main)',
                fontWeight: 500,
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="distance" style={{ background: '#090D14' }}>Sort: Nearest First</option>
              <option value="rating" style={{ background: '#090D14' }}>Sort: Highest Rated</option>
              <option value="reviews" style={{ background: '#090D14' }}>Sort: Most Reviewed</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
