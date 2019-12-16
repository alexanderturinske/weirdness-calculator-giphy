import { giphyActions } from './Giphy';
import { favoritesActions } from './Favorities';
import * as globalStoreActions from './actions';

export default {
  actions: {
    ...globalStoreActions,
    ...favoritesActions,
    ...giphyActions,
  },
};
