/*
 * HomePage
 *
 * Page for '/' and '/home' route. Allows users to search, see results,
 * add to favorites, and navigate to weirdness results
 *
 */

// Dependencies
import React from 'react';

// Components
import SearchArea from '../SearchArea';
import SearchResults from '../SearchResults';
import Favorites from '../Favorites';

// Styling
import './homepage.scss';

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
