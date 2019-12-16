/*
 * ResultsPage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ResultsPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'You scored an {mean} out of {max} on the weirdness scale!',
  },
  gifsTitle: {
    id: `${scope}.gifsTitle`,
    defaultMessage: 'The GIFs you liked',
  },
  button: {
    id: `${scope}.button`,
    defaultMessage: 'START OVER',
  },
});
