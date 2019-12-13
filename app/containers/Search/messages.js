/*
 * Header Messages
 *
 * This contains all the text for the Header container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Search';

export default defineMessages({
  introduction1: {
    id: `${scope}.introduction1`,
    defaultMessage:
      "Find out how weird you are by selecting the GIFs that make you laugh. We'll show you the least weird ones to start, but you can move the slider to make them weirder.",
  },
  introduction2: {
    id: `${scope}.introduction2`,
    defaultMessage:
      "When you find a GIF you like, press the Like button. Once you like 5 GIFs, we'll show you how weird you are.",
  },
});
