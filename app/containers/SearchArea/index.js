/*
 * SearchArea
 *
 * The area of the HomePage that contiains the general informatino and search button
 *
 */

import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import SearchForm from '../SearchForm';

export default function SearchArea() {
  return (
    <Fragment>
      <div>
        <FormattedMessage {...messages.introduction1} />
      </div>
      <div>
        <FormattedMessage {...messages.introduction2} />
      </div>
      <SearchForm />
    </Fragment>
  );
}
