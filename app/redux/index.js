import { giphyActions } from './Giphy';
import { favoritesActions } from './Favorities';

export default {
  actions: {
    ...favoritesActions,
    ...giphyActions,
  },
};
