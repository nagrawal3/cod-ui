import React from 'react';
import { render } from '@testing-library/react';
import FlexHeader from './FlexHeader';

describe('FlexHeader', () => {
  it('matches the snapshot with no props', () => {
    const { container } = render(
      <FlexHeader>
        <div>Test</div>
      </FlexHeader>,
    );
    expect(container).toMatchSnapshot();
  });

  it('matches the snapshot with marginTop prop', () => {
    const { container } = render(
      <FlexHeader marginTop>
        <div>Test</div>
      </FlexHeader>,
    );
    expect(container).toMatchSnapshot();
  });

  it('matches the snapshot with borderBottom prop', () => {
    const { container } = render(
      <FlexHeader borderBottom>
        <div>Test</div>
      </FlexHeader>,
    );
    expect(container).toMatchSnapshot();
  });

  it('matches the snapshot with both marginTop and borderBottom prop', () => {
    const { container } = render(
      <FlexHeader borderBottom marginTop>
        <div data-testid="flex-header-content">Test</div>
      </FlexHeader>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should allow for text input as children', () => {
    const { container } = render(<FlexHeader>TestContent</FlexHeader>);
    expect(container).toHaveTextContent('TestContent');
  });

  it('should allow for array input as children', () => {
    const { container } = render(<FlexHeader>{['ArrayElement1', 'ArrayElement2']}</FlexHeader>);
    expect(container).toHaveTextContent('ArrayElement1');
    expect(container).toHaveTextContent('ArrayElement2');
  });

  it('should have expected styles when alignRight prop is set to true', () => {
    const { getByTestId } = render(
      <FlexHeader alignRight>
        <div>TestContents</div>
      </FlexHeader>,
    );
    const grid = getByTestId('flex-header');
    expect(grid).toHaveStyle('justify-content: flex-end');
  });
});
