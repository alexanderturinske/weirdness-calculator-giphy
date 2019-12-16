/*
 * Favorites
 *
 * Displays the favorited items and allows for calculation
 * once five GIFs are favorited
 *
 */

// Styling
import './favorites.scss';

// Dependencies
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

// Components
import messages from './messages';
import Gif from '../Gif';
import LinkedButtom from '../LinkedButton';
import { maxFavorites } from '../../constants';

// Redux
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
              <Gif
                gif={giphy}
                weirdness={weirdness}
                options={{ allowRemoval: removeFavorite }}
              />
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
