/*
 * SearchArea
 *
 * The area of the HomePage that contiains the general informatino and search button
 *
 */

// Styling
import './searchArea.scss';

// Dependencies
import React from 'react';
import { FormattedMessage } from 'react-intl';

// Components
import messages from './messages';
import SearchForm from '../SearchForm';
import { maxFavorites } from '../../constants';

export default function SearchArea() {
  return (
    <div className="searcharea-container">
      <div>
        <FormattedMessage {...messages.introduction1} />
      </div>
      <div>
        <FormattedMessage
          {...messages.introduction2}
          values={{ maxFavorites }}
        />
      </div>
      <SearchForm />
    </div>
  );
}
