import React from 'react';
import { render } from '@testing-library/react';
import SubTitle from './SubTitle';

describe('SubTitle', () => {
  it('component matches snapshot with a label prop', () => {
    const { container } = render(<SubTitle label="Partner">Partner1</SubTitle>);
    expect(container).toMatchSnapshot();
  });

  it('component matches snapshot without a label prop', () => {
    const { container } = render(<SubTitle>Partner1</SubTitle>);
    expect(container).toMatchSnapshot();
  });

  it('should render properly with a label element', () => {
    const { getByTestId } = render(<SubTitle label="Partner">Partner1</SubTitle>);
    expect(getByTestId('subtitle-label')).toBeInTheDocument();
  });

  it('should render properly with no label element', () => {
    const { queryByTestId } = render(<SubTitle>Partner1</SubTitle>);
    expect(queryByTestId('subtitle-label')).toBeNull();
  });

  it('should render with proper label content', () => {
    const { getByTestId } = render(<SubTitle label="TestLabel">Partner1</SubTitle>);
    expect(getByTestId('subtitle-label')).toHaveTextContent('TestLabel');
  });

  it('should allow for text input as children', () => {
    const { container } = render(<SubTitle>TextInputWithoutDivs</SubTitle>);
    expect(container).toHaveTextContent('TextInputWithoutDivs');
  });

  it('should allow for array input as children', () => {
    const { container } = render(<SubTitle>{['ArrayElement1', 'ArrayElement2']}</SubTitle>);

    expect(container).toHaveTextContent('ArrayElement1');
    expect(container).toHaveTextContent('ArrayElement2');
  });

  it('should allow for node input as children', () => {
    const { getByTestId } = render(
      <SubTitle>
        <div>NodeInputWithDivs</div>
      </SubTitle>,
    );

    expect(getByTestId('subtitle-content')).toContainHTML('NodeInputWithDivs');
  });
});
