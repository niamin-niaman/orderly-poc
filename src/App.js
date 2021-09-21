import React, { useState, useEffect } from 'react';
import './style.css';

import liff from '@line/liff';

export default function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setName('Ameen');
    }, 1000);
  }, []);
  
  return (
    <div>
      <h1>Hello! {name}today</h1>
      <Test/>
    </div>
  );
}

const Test = () => {
  // liff.init({ liffId: '1656395790-8bWyddX5' });
  return (
    <>
      <h1>Test</h1>
    </>
  );
};
