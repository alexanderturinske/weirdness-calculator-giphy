/*
 * Favorites
 *
 * The Favorites Section
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function Favorites() {
  const handleSubmit = () => {
    // TODO: Navigate to /results
  };

  return (
    <div>
      <div>
        <FormattedMessage {...messages.title} />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          <FormattedMessage {...messages.button} />
        </button>
      </div>
      <div>
        <FormattedMessage {...messages.status} values={{ value: 5 }} />
      </div>
    </div>
  );
}
