import React from 'react';
import { renderWithTheme } from '../../testUtils';
import ListItemDetail from './ListItemDetail';

describe('ListItemDetail', () => {
  it('component matches snapshot with a label prop', () => {
    const { container } = renderWithTheme(<ListItemDetail label="TestLabel" value="TestValue" />);
    expect(container).toMatchSnapshot();
  });

  it('should render properly with a label and value element', () => {
    const { getByTestId } = renderWithTheme(<ListItemDetail label="TestLabel" value="TestValue" />);
    expect(getByTestId('label-list-text')).toBeInTheDocument();
    expect(getByTestId('value-list-text')).toBeInTheDocument();
  });

  it('should render with proper label and value content', () => {
    const { getByTestId } = renderWithTheme(<ListItemDetail label="TestLabel" value="TestValue" />);
    expect(getByTestId('label-list-text').textContent).toBe('TestLabel');
    expect(getByTestId('value-list-text').textContent).toBe('TestValue');
  });
});
