import React from 'react';

export default function WeatherWidget() {
  return (
    <div style={{
      display: 'flex',
      background: '#f2ece4', // matching the beige tone from screenshot
      border: '1px solid #e1d8cd',
      borderRadius: '4px',
      overflow: 'hidden',
      marginBottom: '30px'
    }}>
      {/* Left section: BATANES WEATHER */}
      <div style={{
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        background: '#e8dfd5'
      }}>
        <div style={{ fontSize: '12px', fontWeight: '700', color: '#555', width: '60px', lineHeight: 1.2 }}>
          BATANES WEATHER
        </div>
        <div>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '28px', fontWeight: '300', color: '#333' }}>29°C</div>
          <div style={{ fontSize: '10px', color: '#666', marginTop: '-4px' }}>overcast clouds</div>
        </div>
      </div>

      {/* Right section: 7 Day forecast */}
      <div style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px'
      }}>
        {[
          { day: 'Sunday', icon: 'cloud-rain', tempH: '29°C', tempL: '26°C' },
          { day: 'Monday', icon: 'cloud-rain', tempH: '29°C', tempL: '26°C' },
          { day: 'Tuesday', icon: 'cloud-rain', tempH: '29°C', tempL: '26°C' },
          { day: 'Wednesday', icon: 'cloud', tempH: '29°C', tempL: '26°C' },
          { day: 'Thursday', icon: 'sun', tempH: '29°C', tempL: '26°C' },
          { day: 'Friday', icon: 'cloud-rain', tempH: '29°C', tempL: '26°C' },
          { day: 'Saturday', icon: 'cloud-rain', tempH: '29°C', tempL: '26°C' },
        ].map((item, idx) => (
          <div key={idx} style={{ textAlign: 'center', fontSize: '11px', color: '#555' }}>
            <div style={{ marginBottom: '6px' }}>{item.day}</div>
            <div style={{ marginBottom: '6px' }}>
              {item.icon === 'cloud-rain' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/></svg>
              )}
              {item.icon === 'cloud' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
              )}
              {item.icon === 'sun' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              )}
            </div>
            <div style={{ fontSize: '10px' }}>
              {item.tempH} &nbsp; <span style={{ color: '#999' }}>{item.tempL}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
