import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Header from './component/Header';
import Hero from './component/Hero';
import StanaloneModules from './component/StanaloneModules';
import Quote from './component/Quote';
import Steps from './component/Steps';
import Features from './component/Features';
import Playground from './component/Playground';
import UsedBy from './component/UsedBy';
import TechnologyStack from './component/TechnologyStack';
import GetSupport from './component/GetSupport';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <main>
      <Hero />
      <UsedBy />
      <StanaloneModules />
      <TechnologyStack />
      <Quote />
      <Steps />
      <Features />
      <Playground />
      <GetSupport />
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
