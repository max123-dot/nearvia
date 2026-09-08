import React from 'react';
import { ShoppingBag, Wrench, Building2, Utensils, Scissors, BedDouble, Ticket, Sparkles } from 'lucide-react';

const PILLARS_DATA = [
  {
    id: 'products',
    title: 'Products & Sellers',
    icon: ShoppingBag,
    color: '#F59E0B',
    desc: 'Find handcrafted items, specialty coffee, vintage apparel, and local retail goods nearby.',
    examples: 'Leather totes, whole beans, rare vinyl, handmade ceramics'
  },
  {
    id: 'services',
    title: 'Services & Trades',
    icon: Wrench,
    color: '#10B981',
    desc: 'Discover skilled professionals offering mobile bike repair, auto detailing, tutoring, & fitness.',
    examples: 'On-demand bike tuneups, mobile car detailing, piano tutors'
  },
  {
    id: 'businesses',
    title: 'Local Businesses',
    icon: Building2,
    color: '#6366F1',
    desc: 'Explore neighborhood storefronts, electronics repair hubs, plant nurseries, and workshops.',
    examples: 'Plant design boutiques, iPhone screen repair, leathercraft'
  },
  {
    id: 'food',
    title: 'Food & Dining',
    icon: Utensils,
    color: '#EF4444',
    desc: 'Uncover artisanal bakeries, ramen lounges, rooftop cocktail bars, and pop-up food vendors.',
    examples: '18-hr tonkotsu ramen, 100-yr sourdough, sunset cocktails'
  },
  {
    id: 'beauty',
    title: 'Beauty & Grooming',
    icon: Scissors,
    color: '#EC4899',
    desc: 'Book precision fades, hot towel straight-razor shaves, botanical spa facials, and hair salons.',
    examples: 'Barbershop fades, organic facials, nail care, hair styling'
  },
  {
    id: 'stays',
    title: 'Hotels & Stays',
    icon: BedDouble,
    color: '#8B5CF6',
    desc: 'Discover boutique urban lofts, garden cottages, bed & breakfasts, and co-working day passes.',
    examples: 'Brick-and-timber lofts, redwood garden cottages, inns'
  },
  {
    id: 'entertainment',
    title: 'Entertainment & Events',
    icon: Ticket,
    color: '#3B82F6',
    desc: 'Find live jazz supper clubs, retro arcade bars, comedy vaults, and community workshops.',
    examples: 'Subterranean jazz sets, retro pinball arcades, live shows'
  },
  {
    id: 'expandable',
    title: 'Expandable Horizons',
    icon: Sparkles,
    color: '#00F2FE',
    desc: 'Continuous expansion into neighborhood farmers markets, local rentals, and civic gatherings.',
    examples: 'Pop-up markets, neighborhood rentals, community events'
  }
];

export default function PillarsShowcase() {
  return (
    <section id="pillars" className="landing-section">
      <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
        <span style={{ color: 'var(--cyan)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          What INMARA Brings Together
        </span>
        <h2 className="syne-title" style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
          The <span className="gradient-text-cyan">8 Ecosystem Pillars</span>
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
          INMARA goes far beyond a traditional online shop. It consolidates every dimension of local discovery under one intuitive interface.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {PILLARS_DATA.map((pillar) => {
          const IconComp = pillar.icon;
          return (
            <div
              key={pillar.id}
              className="glass-panel-interactive"
              style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: `rgba(${parseInt(pillar.color.slice(1,3),16)}, ${parseInt(pillar.color.slice(3,5),16)}, ${parseInt(pillar.color.slice(5,7),16)}, 0.15)`,
                border: `1px solid ${pillar.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <IconComp size={24} color={pillar.color} />
              </div>

              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)' }}>{pillar.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', flex: 1, lineHeight: 1.5 }}>
                {pillar.desc}
              </p>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem', fontSize: '0.78rem', color: pillar.color, fontWeight: 600 }}>
                e.g. {pillar.examples}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
