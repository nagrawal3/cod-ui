import React from 'react';
import { render } from 'react-testing-library';
import SectionTitle from './SectionTitle';

describe('SectionTitle', () => {
  it('renders expected styles if noWrap prop is set to true', () => {
    const { getByTestId } = render(<SectionTitle noWrap>TestText</SectionTitle>);
    const typography = getByTestId('section-title-typography');
    expect(typography).toHaveStyle('white-space: nowrap');
    expect(typography).toHaveStyle('overflow: hidden');
    expect(typography).toHaveStyle('text-overflow: ellipsis');
  });

  it('does not render expected styles on grid and typography if noWrap and grow props are set to false ', () => {
    const { getByTestId } = render(<SectionTitle>TestText</SectionTitle>);
    const grid = getByTestId('section-title-grid');
    const typography = getByTestId('section-title-typography');
    expect(grid).not.toHaveStyle('min-width: 0');
    expect(grid).toHaveStyle('flexGrow: 0');
    expect(typography).not.toHaveStyle('white-space: nowrap');
    expect(typography).not.toHaveStyle('overflow: hidden');
    expect(typography).not.toHaveStyle('text-overflow: ellipsis');
  });

  it('renders the title using element specified in the component prop', () => {
    const { getByTestId } = render(<SectionTitle component="h1">TestText</SectionTitle>);
    const typography = getByTestId('section-title-typography');
    expect(typography.tagName).toBe('H1');
  });

  it('renders default element if no component prop is set', () => {
    const { getByTestId } = render(<SectionTitle>TestText</SectionTitle>);
    const typography = getByTestId('section-title-typography');
    expect(typography.tagName).toBe('H6');
  });

  it('renders expected styles if grow prop is set to true', () => {
    const { getByTestId } = render(<SectionTitle grow>TestText</SectionTitle>);
    const grid = getByTestId('section-title-grid');
    expect(grid).toHaveStyle('flexGrow: 1');
  });

  it('should allow for text input as children', () => {
    const { container } = render(<SectionTitle>TestText</SectionTitle>);
    expect(container).toHaveTextContent('TestText');
  });

  it('should allow for no children', () => {
    const { container } = render(<SectionTitle />);
    expect(container).not.toHaveTextContent();
  });

  it('should allow for array input as children', () => {
    const { getByTestId } = render(
      <SectionTitle>
        <span data-testid="test-element-1">TestElement1</span>
        <span data-testid="test-element-2">TestElement2</span>
      </SectionTitle>,
    );
    expect(getByTestId('test-element-1')).toBeInTheDocument();
    expect(getByTestId('test-element-2')).toBeInTheDocument();
  });
});
