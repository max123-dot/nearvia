import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

const createCustomIcon = (category, isSelected) => {
  const color = '#F5B700'; // Danfo Yellow Accent
  const strokeColor = '#0E0E10';
  const size = isSelected ? 36 : 28;

  const svgMarker = `
    <svg width="${size}" height="${size}" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="16" fill="${color}" fill-opacity="${isSelected ? '1' : '0.9'}" stroke="${strokeColor}" stroke-width="${isSelected ? '3' : '2'}"/>
      <circle cx="18" cy="18" r="6" fill="${strokeColor}"/>
      ${isSelected ? `<circle cx="18" cy="18" r="17" stroke="#F5B700" stroke-width="2" opacity="0.8"/>` : ''}
    </svg>
  `;

  return L.divIcon({
    className: `custom-leaflet-marker ${isSelected ? 'selected' : ''}`,
    html: svgMarker,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2]
  });
};

function ChangeMapView({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, zoom, { animate: true });
    }
  }, [center, zoom, map]);
  return null;
}

export default function InteractiveMap({ items, selectedItem, onSelectItem }) {
  const defaultCenter = [37.768, -122.42];
  const mapCenter = selectedItem ? [selectedItem.lat, selectedItem.lng] : defaultCenter;
  const zoomLevel = selectedItem ? 15 : 13;

  return (
    <div className="map-sticky-wrap">
      <MapContainer
        center={defaultCenter}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Light Mode CartoDB Map Tiles */}
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        <ChangeMapView center={mapCenter} zoom={zoomLevel} />

        {items.map((item) => {
          const isSelected = selectedItem?.id === item.id;
          return (
            <Marker
              key={item.id}
              position={[item.lat, item.lng]}
              icon={createCustomIcon(item.category, isSelected)}
              eventHandlers={{
                click: () => onSelectItem(item)
              }}
            >
              <Popup>
                <div style={{ color: '#0E0E10', padding: '0.2rem' }}>
                  <strong style={{ fontSize: '0.95rem' }}>{item.title}</strong>
                  <p style={{ margin: '0.2rem 0', fontSize: '0.8rem', color: '#6B6B70' }}>
                    {item.subcategory} &bull; {item.distanceText}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.4rem' }}>
                    <span style={{ color: '#0E0E10', fontWeight: 700, fontSize: '0.85rem' }}>
                      ★ {item.rating} ({item.reviewsCount})
                    </span>
                    <span style={{ fontWeight: 700, color: '#1E9463', fontSize: '0.85rem' }}>
                      {item.price}
                    </span>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
