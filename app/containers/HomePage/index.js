/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import SearchArea from '../SearchArea';
import SearchResults from '../SearchResults';
import Favorites from '../Favorites';

export default function HomePage() {
  return (
    <div>
      <SearchArea />
      <SearchResults />
      <Favorites />
    </div>
  );
}
