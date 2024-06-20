import React, { useState } from 'react';

const Map = () => {
  // State to manage hovered region
  const [hoveredRegion, setHoveredRegion] = useState('');

  return (
    <div>
      <h1>Interactive Map</h1>
      <svg className="pfcla-interactive-map" width="1673" height="1067" viewBox="0 0 1673 1067" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Example of an interactive region */}
        <path
          d="M10 10 H 90 V 90 H 10 L 10 10" // Simplified shape, replace with real path data
          fill={hoveredRegion === 'region1' ? 'blue' : 'gray'}
          onMouseEnter={() => setHoveredRegion('region1')}
          onMouseLeave={() => setHoveredRegion('')}
          onClick={() => alert('Region 1 clicked')}
        />
        {/* Add more paths or shapes as needed */}
      </svg>
      {hoveredRegion && <p>Hovering over: {hoveredRegion}</p>}
    </div>
  );
};

export default Map;
