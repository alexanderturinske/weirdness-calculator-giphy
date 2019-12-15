/*
 * Favorites Messages
 *
 * This contains all the text for the Favorites component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Favorites';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'YOUR LIKED GIFS',
  },
  button: {
    id: `${scope}.button`,
    defaultMessage: 'CALCULATE MY WEIRDNESS SCALE',
  },
  status: {
    id: `${scope}.status`,
    defaultMessage: 'You must Like {value} more GIF to calculate your score',
  },
});
