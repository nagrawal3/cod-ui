import React from 'react';
import { render } from '@testing-library/react';
import ButtonList from './ButtonList';

describe('ButtonList-top', () => {
  it('matches the snapshot - alignTop', () => {
    const { container } = render(
      <ButtonList align="top">
        <button type="submit">Test1</button>
        <button type="submit">Test2</button>
        <button type="submit">Test3</button>
      </ButtonList>,
    );
    expect(container).toMatchSnapshot();
  });
});

describe('ButtonList-bottom', () => {
  it('matches the snapshot - alignBottom', () => {
    const { container } = render(
      <ButtonList align="bottom">
        <button type="submit">Test1</button>
        <button type="submit">Test2</button>
        <button type="submit">Test3</button>
      </ButtonList>,
    );
    expect(container).toMatchSnapshot();
  });
});
