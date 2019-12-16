/*
 * Favorites
 *
 * The Favorites Section
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Gif from '../Gif';
import LinkedButtom from '../LinkedButton';
import { maxFavorites } from '../../constants';

export default function Favorites() {
  const favorites = useSelector(state => state.favorites.favorites);

  const areThere5Favorites = maxFavorites - Object.keys(favorites).length;

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
      <LinkedButtom to="/results">
        <FormattedMessage {...messages.button} />
      </LinkedButtom>
      <div>
        <FormattedMessage
          {...messages.status}
          values={{ value: areThere5Favorites }}
        />
      </div>
    </div>
  );
}

Favorites.propTypes = {
  // The history object from react-router
  // Used so that a button can be used as a link
  // Taken from https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button
  history: PropTypes.object,
};
