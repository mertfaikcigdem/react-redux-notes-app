import React from 'react';
import '../App.css';
import Header from './Header';
import Content from './Content';

function Container() {
  return <div className="container">
      <Header />
      <Content />
  </div>;
}

export default Container;
