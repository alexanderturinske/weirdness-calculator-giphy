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
  const areThere5Favorites = 5 - Object.keys(favorites).length;
  const handleSubmit = () => {
    // TODO: Navigate to /results
  };

  return (
    <div>
      <div>
        <FormattedMessage {...messages.title} />
      </div>
      <div>
        {Object.values(favorites).map(gif => {
          const { gif: giphy, weirdness } = gif;
          return <Gif gif={giphy} weirdness={weirdness} key={giphy.id} />;
        })}
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          <FormattedMessage {...messages.button} />
        </button>
      </div>
      <div>
        <FormattedMessage
          {...messages.status}
          values={{ value: areThere5Favorites }}
        />
      </div>
    </div>
  );
}
