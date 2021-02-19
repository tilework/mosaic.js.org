import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Header from './component/Header';
import Hero from './component/Hero';
import StanaloneModules from './component/StanaloneModules';

import './index.css';
import Quote from './component/Quote';
import Steps from './component/Steps';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <main>
      <Hero />
      <StanaloneModules />
      <Quote />
      <Steps />
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
