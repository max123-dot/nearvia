import React, { useState } from 'react';
import { X, Calendar, Clock, User, CheckCircle2, ShieldCheck, Sparkles, ChevronRight, Phone } from 'lucide-react';

export default function BookingModal({ item, initialOffering, onClose, onConfirmBooking }) {
  const [selectedOffering, setSelectedOffering] = useState(initialOffering || item.offerings[0]);
  const [bookingDate, setBookingDate] = useState('2026-09-07');
  const [bookingTime, setBookingTime] = useState('11:30 AM');
  const [guestCount, setGuestCount] = useState(1);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const timeSlots = ['09:30 AM', '11:30 AM', '02:00 PM', '04:30 PM', '06:30 PM', '08:00 PM'];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      id: `NearVia-${Math.floor(100000 + Math.random() * 900000)}`,
      itemId: item.id,
      itemTitle: item.title,
      itemImage: item.image,
      locationName: item.locationName,
      offeringName: selectedOffering.name,
      offeringPrice: selectedOffering.price,
      date: bookingDate,
      time: bookingTime,
      guests: guestCount,
      customerName: userName || 'Local Resident',
      customerPhone: userPhone || '(415) 555-0199',
      status: 'Confirmed',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setConfirmedBooking(newBooking);
    onConfirmBooking(newBooking);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        
        {/* Header */}
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-card)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Calendar size={20} color="var(--primary-yellow)" />
            <h3 style={{ fontSize: 'clamp(0.95rem, 3vw, 1.2rem)', margin: 0 }}>
              {confirmedBooking ? 'Booking Confirmed!' : `Book & Reserve — ${item.title}`}
            </h3>
          </div>
          <button className="modal-close-btn" style={{ position: 'static' }} onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {confirmedBooking ? (
          /* Confirmation Receipt View */
          <div style={{ padding: 'clamp(1.25rem, 4vw, 2rem) clamp(1rem, 3vw, 1.5rem)', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(30, 148, 99, 0.15)', border: '2px solid var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
              <CheckCircle2 size={36} color="var(--accent-emerald)" />
            </div>

            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Your Reservation is Confirmed</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Confirmation Code: <strong style={{ color: 'var(--text-main)', background: 'rgba(245, 183, 0, 0.2)', padding: '0.2rem 0.5rem', borderRadius: '6px' }}>{confirmedBooking.id}</strong>
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.6rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Service / Item</span>
                <strong style={{ color: 'var(--text-main)' }}>{confirmedBooking.offeringName}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.6rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Date & Time</span>
                <strong style={{ color: 'var(--text-main)' }}>{confirmedBooking.date} at {confirmedBooking.time}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.6rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Location</span>
                <strong style={{ color: 'var(--text-main)' }}>{confirmedBooking.locationName}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Total Amount</span>
                <strong style={{ color: 'var(--accent-emerald)', fontSize: '1.1rem' }}>{confirmedBooking.offeringPrice}</strong>
              </div>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              A confirmation notification has been dispatched to {confirmedBooking.customerName}. You can manage this anytime under <strong>My Bookings</strong>.
            </p>

            <button className="btn-primary-lg" onClick={onClose} style={{ marginTop: '0.5rem' }}>
              Done & View Discovery Map
            </button>
          </div>
        ) : (
          /* Multi-Step Booking Form */
          <form onSubmit={handleFormSubmit} style={{ padding: 'clamp(1rem, 3vw, 1.5rem)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Offering Selector */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                Select Offering / Service Package
              </label>
              <select
                value={selectedOffering.name}
                onChange={(e) => {
                  const off = item.offerings.find(o => o.name === e.target.value);
                  if (off) setSelectedOffering(off);
                }}
                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-main)', fontSize: '0.95rem', fontWeight: 600, outline: 'none' }}
              >
                {item.offerings.map((off, idx) => (
                  <option key={idx} value={off.name}>
                    {off.name} — {off.price}
                  </option>
                ))}
              </select>
            </div>

            {/* Date & Time Slot Selector */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  Select Date
                </label>
                <input
                  type="date"
                  required
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-main)', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  Party Size / Quantity
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-main)', fontSize: '0.9rem', outline: 'none' }}
                >
                  <option value={1}>1 Person / Item</option>
                  <option value={2}>2 People / Items</option>
                  <option value={3}>3 People / Items</option>
                  <option value={4}>4+ Group Party</option>
                </select>
              </div>
            </div>

            {/* Time Slot Chips */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                Select Time Slot
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '0.5rem' }}>
                {timeSlots.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setBookingTime(slot)}
                    style={{
                      padding: '0.55rem',
                      borderRadius: 'var(--radius-sm)',
                      border: bookingTime === slot ? '2px solid #F5B700' : '1px solid var(--border-subtle)',
                      background: bookingTime === slot ? '#F5B700' : 'var(--bg-card)',
                      color: bookingTime === slot ? '#0E0E10' : 'var(--text-main)',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Customer Details */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-main)', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  Phone Number (For SMS Updates)
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(415) 555-0199"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-main)', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                Special Requests or Notes (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Allergy info, window seat preference, specific hair cut style..."
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-main)', fontSize: '0.9rem', outline: 'none', fontFamily: 'inherit' }}
              />
            </div>

            {/* Total Price Banner & Submit */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', marginTop: '0.5rem' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Estimated Price</span>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>
                  {selectedOffering.price}
                </div>
              </div>

              <button type="submit" className="btn-primary-lg">
                <span>Confirm Booking & Reserve</span>
                <ChevronRight size={18} />
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
