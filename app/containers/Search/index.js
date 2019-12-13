/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function Search() {
  return (
    <Fragment>
      <div>
        <FormattedMessage {...messages.introduction1} />
      </div>
      <div>
        <FormattedMessage {...messages.introduction2} />
      </div>
    </Fragment>
  );
}
