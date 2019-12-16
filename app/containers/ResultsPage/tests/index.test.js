import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import ResultsPage from '../index';

describe('<ResultsPage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <ResultsPage />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
