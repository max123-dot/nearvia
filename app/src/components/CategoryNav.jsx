import React, { useRef, useState } from 'react';
import { CATEGORIES, DISCOVERY_ITEMS } from '../data/mockData';
import { Sparkles, ShoppingBag, Wrench, Building2, Utensils, Scissors, BedDouble, Ticket, ChevronLeft, ChevronRight } from 'lucide-react';

const ICON_MAP = {
  Sparkles,
  ShoppingBag,
  Wrench,
  Building2,
  Utensils,
  Scissors,
  BedDouble,
  Ticket
};

export default function CategoryNav({ activeCategory, setActiveCategory }) {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const isMovedRef = useRef(false);

  // Calculate live item counts per category
  const categoryCounts = CATEGORIES.map(cat => {
    if (cat.id === 'all') {
      return { ...cat, liveCount: DISCOVERY_ITEMS.length };
    }
    const count = DISCOVERY_ITEMS.filter(item => item.category === cat.id).length;
    return { ...cat, liveCount: count };
  });

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    isMovedRef.current = false;
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleTouchStart = (e) => {
    if (!scrollRef.current) return;
    isMovedRef.current = false;
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      isMovedRef.current = true;
    }
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleTouchMove = (e) => {
    if (!scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX);
    if (Math.abs(walk) > 5) {
      isMovedRef.current = true;
    }
  };

  const handlePillClick = (e, catId) => {
    if (isMovedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    setActiveCategory(catId);
  };

  return (
    <nav className="category-nav-bar">
      <div className="category-wrapper">
        <button 
          className="category-scroll-btn left" 
          onClick={() => handleScroll('left')} 
          aria-label="Scroll left"
          type="button"
        >
          <ChevronLeft size={18} />
        </button>

        <div 
          className={`category-scroll ${isDragging ? 'dragging' : ''}`} 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {categoryCounts.map(cat => {
            const IconComponent = ICON_MAP[cat.icon] || Sparkles;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                className={`category-pill ${isActive ? 'active' : ''}`}
                onClick={(e) => handlePillClick(e, cat.id)}
                type="button"
              >
                <IconComponent size={16} color={isActive ? '#0E0E10' : cat.color} />
                <span>{cat.name}</span>
                <span className="category-count">{cat.liveCount}</span>
              </button>
            );
          })}
        </div>

        <button 
          className="category-scroll-btn right" 
          onClick={() => handleScroll('right')} 
          aria-label="Scroll right"
          type="button"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </nav>
  );
}
