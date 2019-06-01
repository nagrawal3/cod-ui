import React from 'react';
import { render } from '@testing-library/react';
import WorkflowStatusItem from './WorkflowStatusItem';

describe('WorkflowStatusItem', () => {
  it('matches the snapshot', () => {
    const { container } = render(<WorkflowStatusItem title="test" active status="draft" />);
    expect(container).toMatchSnapshot();
  });
});
