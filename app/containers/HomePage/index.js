/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Header from '../Header';
import SearchArea from '../SearchArea';
import SearchResults from '../SearchResults';
import Favorites from '../Favorites';

export default function HomePage() {
  return (
    <div>
      <Header />
      <SearchArea />
      <SearchResults />
      <Favorites />
    </div>
  );
}
