import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

/**
 * Render dom wrapped with material-ui's ThemeProvider.
 */
export function renderWithTheme(ui) {
  return {
    ...render(<ThemeProvider theme={createMuiTheme()}>{ui}</ThemeProvider>),
  };
}

/**
 * Render dom wrapped with multiple dependent context providers.
 */
export function renderWithProviders(ui) {
  return {
    ...render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={createMuiTheme()}>{ui}</ThemeProvider>
      </MemoryRouter>,
    ),
  };
}

export default { renderWithTheme };
