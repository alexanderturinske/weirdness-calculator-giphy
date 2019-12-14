/*
 * SearchResults Messages
 *
 * This contains all the text for the SearchResults container.
 */
import { defineMessages } from 'react-intl';
import { numberLiteralTypeAnnotation } from '@babel/types';

export const scope = 'app.containers.SearchResults';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'YOUR RESULT',
  },
  sliderTitle: {
    id: `${scope}.sliderTitle`,
    // values: {{ amount: 0 }},
    defaultMessage: 'Weirdness: {value}',
  },
});
