import React, { useEffect, useRef, useState } from 'react';
import { Network } from 'vis-network/standalone';
import 'vis-network/styles/vis-network.css';

// ✅ FIX: craftData moved outside the component
const craftData = {
  Pottery: {
    nodes: [
      { id: 1, label: 'Pottery' },
      { id: 2, label: 'Terracotta' },
      { id: 3, label: 'Ceramic Art' },
      { id: 4, label: 'Clay Modeling' },
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 1, to: 4 },
    ]
  },
  Weaving: {
    nodes: [
      { id: 1, label: 'Weaving' },
      { id: 2, label: 'Handloom' },
      { id: 3, label: 'Embroidery' },
      { id: 4, label: 'Macrame' },
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 1, to: 4 },
    ]
  }
};

const RecommendationGraph = () => {
  const containerRef = useRef(null);
  const [selectedCraft, setSelectedCraft] = useState('Pottery');

  useEffect(() => {
    if (!containerRef.current) return;

    const data = craftData[selectedCraft];

    const options = {
      nodes: {
        shape: 'dot',
        size: 20,
        font: { size: 16 },
      },
      edges: {
        smooth: { type: 'continuous' },
      },
      physics: { stabilization: false },
    };

    new Network(containerRef.current, data, options);
  }, [selectedCraft]); // craftData is now static → no ESLint error

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <label>Select Craft: </label>
        <select value={selectedCraft} onChange={(e) => setSelectedCraft(e.target.value)}>
          <option value="Pottery">Pottery</option>
          <option value="Weaving">Weaving</option>
        </select>
      </div>

      <div ref={containerRef} style={{ height: '500px', width: '100%' }}></div>
    </div>
  );
};

export default RecommendationGraph;
