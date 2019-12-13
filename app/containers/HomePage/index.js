/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Header from '../Header';
import Search from '../Search';

export default function HomePage() {
  return (
    <h1>
      <Header />
      <Search />
    </h1>
  );
}
