import React, { useState, useEffect } from 'react';

export default function App() {
  const [status, setStatus] = useState('Connecting to backend...');

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setStatus(data.message))
      .catch(() => setStatus('Failed to connect to backend'));
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>Full-Stack DevOps Deployment</h1>
      <p>Backend Status: <strong>{status}</strong></p>
    </div>
  );
}