/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */
import './homepage.scss';
import React from 'react';
import SearchArea from '../SearchArea';
import SearchResults from '../SearchResults';
import Favorites from '../Favorites';

export default function HomePage() {
  return (
    <div className="homepage-container">
      <div className="left-column">
        <SearchArea />
        <SearchResults />
      </div>
      <div className="right-column">
        <Favorites />
      </div>
    </div>
  );
}
