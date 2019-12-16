/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import './header.scss';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function Header() {
  return (
    <h1 className="header">
      <FormattedMessage {...messages.header} />
    </h1>
  );
}
