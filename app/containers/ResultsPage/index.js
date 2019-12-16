/*
 * ResultsPage
 *
 * The page that shows the user their favorited gifs and the mean of their weirdness
 *
 */

// Styling
import './resultsPage.scss';

// Dependencies
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

// Components
import messages from './messages';
import Gif from '../Gif';
import LinkedButton from '../LinkedButton';
import { calculateMean } from './utils';
import { maxWeirdness } from '../../constants';
import reduxInfo from '../../redux';
const { actions } = reduxInfo;

export default function ResultsPage() {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);
  const mean = calculateMean(favorites);

  /**
   * Clears the redux store
   * @returns {undefined} undefined
   */
  const clearStore = () => {
    dispatch(actions.clearStore());
  };

  return (
    <div className="resultspage-container">
      <h1>
        <FormattedMessage
          {...messages.header}
          values={{ mean, max: maxWeirdness }}
        />
      </h1>
      <div className="gifs-container">
        <div>
          <FormattedMessage {...messages.gifsTitle} />
        </div>
        <div className="gifs-list">
          {Object.values(favorites).map(gif => {
            const { gif: giphy, weirdness } = gif;
            return (
              <Gif
                gif={giphy}
                weirdness={weirdness}
                key={giphy.id}
                options={{ showCaption: true }}
              />
            );
          })}
        </div>
      </div>
      <LinkedButton to="/home" onClick={clearStore}>
        <FormattedMessage {...messages.button} />
      </LinkedButton>
    </div>
  );
}
