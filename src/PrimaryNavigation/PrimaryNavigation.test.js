import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PrimaryNavigation from './PrimaryNavigation';

describe('PrimaryNavigation', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <PrimaryNavigation {...{ onLogout() {} }} />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render nav buttons if user is passed in', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/']}>
        <PrimaryNavigation
          {...{
            user: { email: 'foo' },
            mainNav: [{ label: 'Partners', href: 'http://partner' }],
            onLogout() {},
          }}
        />
      </MemoryRouter>,
    );
    expect(getByTestId('partner-button')).toBeInTheDocument();
  });

  // TODO: test that clicking the user button pops open the user nav
});
