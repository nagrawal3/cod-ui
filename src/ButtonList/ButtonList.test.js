import React from 'react';
import { renderWithTheme } from '../../testUtils';
import ButtonList from './ButtonList';

describe('ButtonList-top', () => {
  it('matches the snapshot - alignTop', () => {
    const { container } = renderWithTheme(
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
    const { container } = renderWithTheme(
      <ButtonList align="bottom">
        <button type="submit">Test1</button>
        <button type="submit">Test2</button>
        <button type="submit">Test3</button>
      </ButtonList>,
    );
    expect(container).toMatchSnapshot();
  });
});
