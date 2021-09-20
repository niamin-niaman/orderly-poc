import React, { useState, useEffect } from 'react';
import './style.css';

import liff from '@line/liff';

export default function App() {
  const [name, setName] = useState('');

  liff.ready.then(() => {
    // do something you want when liff.init finishes
    liff
      .getProfile()
      .then(profile => {
        const name = profile.displayName;
        // TODO call apollo here
        setName(name);
      })
      .catch(err => {
        console.log('err', err);
      });
  });

  function initializeLiff(myLiffId) {
    liff
      .init({
        liffId: myLiffId
      })
      .then(() => {
        // start to use LIFF's api
        console.log('success');
        setName('Initailed. loading...');
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    initializeLiff('1656395790-8bWyddX5');
  }, []);

  return (
    <div>
      <h1>Hello {name}! today</h1>
    </div>
  );
}
