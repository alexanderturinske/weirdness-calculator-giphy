/*
 * ResultsPage
 *
 * The page that shows the user their favorited gifs and the mean of their weirdness
 *
 */
import './resultsPage.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Gif from '../Gif';
import LinkedButton from '../LinkedButton';
import reduxInfo from '../../redux';
import { calculateMean } from './utils';
import { maxWeirdness } from '../../constants';

const { actions } = reduxInfo;

export default function ResultsPage() {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);
  const mean = calculateMean(favorites);
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
      <LinkedButton to="/home" onClick={clearStore}>
        <FormattedMessage {...messages.button} />
      </LinkedButton>
    </div>
  );
}
