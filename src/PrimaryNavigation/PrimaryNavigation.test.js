import React from 'react';
import { renderWithProviders } from '../../testUtils';
import PrimaryNavigation from './PrimaryNavigation';

describe('PrimaryNavigation', () => {
  it('matches the snapshot', () => {
    const { container } = renderWithProviders(<PrimaryNavigation {...{ onLogout() {} }} />);
    expect(container).toMatchSnapshot();
  });

  it('should render nav buttons if user is passed in', () => {
    const { getByTestId } = renderWithProviders(
      <PrimaryNavigation
        {...{
          user: { email: 'foo', name: 'foo' },
          mainNav: [{ label: 'Partners', href: 'http://partner' }],
          onLogout() {},
        }}
      />,
    );
    expect(getByTestId('partner-button')).toBeInTheDocument();
  });

  // TODO: test that clicking the user button pops open the user nav
});
