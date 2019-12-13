/*
 * SearchFrom Messages
 *
 * This contains all the text for the SearchForm container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.SearchForm';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Search term:',
  },
  button: {
    id: `${scope}.button`,
    defaultMessage: 'Search',
},
});
