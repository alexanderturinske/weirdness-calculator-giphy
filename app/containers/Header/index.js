/*
 * Header
 *
 * Shows application title
 *
 */

// Dependencies
import React from 'react';
import { FormattedMessage } from 'react-intl';

// Components
import messages from './messages';

// Styling
import './header.scss';

export default function Header() {
  return (
    <h1 className="header">
      <FormattedMessage {...messages.header} />
    </h1>
  );
}
