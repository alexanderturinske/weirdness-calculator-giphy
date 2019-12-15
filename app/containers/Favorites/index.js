/*
 * Favorites
 *
 * The Favorites Section
 *
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Gif from '../Gif';

export default function Favorites() {
  const favorites = useSelector(state => state.favorites.favorites);
  const handleSubmit = () => {
    // TODO: Navigate to /results
  };

  return (
    <div>
      <div>
        <FormattedMessage {...messages.title} />
      </div>
      <div>
        {Object.values(favorites).map(gif => (
          <Gif gif={gif} weirdness={0} key={gif.id} />
        ))}
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          <FormattedMessage {...messages.button} />
        </button>
      </div>
      <div>
        <FormattedMessage {...messages.status} values={{ value: 5 }} />
      </div>
    </div>
  );
}
