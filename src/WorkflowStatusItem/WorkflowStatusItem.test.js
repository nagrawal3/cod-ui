import React from 'react';
import { render } from 'react-testing-library';
import WorkflowStatusItem from './WorkflowStatusItem';

describe('WorkflowStatusItem', () => {
  it('matches the snapshot', () => {
    const { container } = render(<WorkflowStatusItem title="test" active status="draft" />);
    expect(container).toMatchSnapshot();
  });
});
