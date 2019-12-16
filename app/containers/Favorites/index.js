/*
 * Favorites
 *
 * The Favorites Section
 *
 */
import './favorites.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Gif from '../Gif';
import LinkedButtom from '../LinkedButton';
import { maxFavorites } from '../../constants';
import reduxInfo from '../../redux';
const { actions } = reduxInfo;

export default function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);

  const areThere5Favorites = maxFavorites - Object.keys(favorites).length;
  const removeFavorite = id => {
    dispatch(actions.removeFavorite(id));
  };

  return (
    <div className="favorites-container">
      <div>
        <FormattedMessage {...messages.title} />
      </div>
      <div>
        {Object.values(favorites).map(gif => {
          const { gif: giphy, weirdness } = gif;
          return (
            <div key={giphy.id}>
              <button type="submit" onClick={() => removeFavorite(giphy.id)}>
                X
              </button>
              <Gif gif={giphy} weirdness={weirdness} />
            </div>
          );
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
