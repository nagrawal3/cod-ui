import React from 'react';
import { render } from 'react-testing-library';
import PrimaryNavigation from './PrimaryNavigation';

describe('PrimaryNavigation', () => {
  it('matches the snapshot', () => {
    const { container } = render(<PrimaryNavigation />);
    expect(container).toMatchSnapshot();
  });

  it('should render nav buttons if user is passed in', () => {
    const { getByTestId } = render(<PrimaryNavigation />, {
      user: { email: 'foo' },
    });
    expect(getByTestId('partner-button')).toBeInTheDocument();
  });

  // TODO: test that clicking the user button pops open the user nav
});
