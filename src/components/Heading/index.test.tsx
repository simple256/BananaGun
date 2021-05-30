/**
 * @jest-environment jsdom
 */
import { render, unmountComponentAtNode } from 'react-dom';
import React from 'react';
import { act } from 'react-dom/test-utils';
import Heading from './index';

describe('Heading', () => {
  let container: Element | null = null;

  beforeEach(() => {
    // подготавливаем DOM-элемент, куда будем рендерить
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // подчищаем после завершения
    if (container !== null) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  it('На вход size = s, на выходе должны получить элемент с h4', () => {
    act(() => {
      render(<Heading size="s" />, container);
    });
    expect(container?.querySelector('h4')).not.toBeNull();
  });
  it('На вход size = s и children = <>Hello</>, на выходе должны получить элемент с h4 c контентом Hello', () => {
    act(() => {
      render(
        <Heading size="s">
          <>Hello</>
        </Heading>,
        container,
      );
    });
    expect(container?.querySelector('h4')?.innerHTML).toEqual('Hello');
  });
  it('На вход size = m и className="test", на выходе должны получить элемент с h3 c классом "test"', () => {
    act(() => {
      render(<Heading className="test" size="m" />, container);
    });
    const classes = container?.querySelector('h3')?.className;
    expect(classes?.includes('test')).toEqual(true);
  });
  it('На вход ничего, на выходе должны получить элемент с h3', () => {
    act(() => {
      render(<Heading />, container);
    });
    expect(container?.querySelector('h3')).not.toBeNull();
  });
  it('На вход ничего, на выходе должны получить элемент с h3', () => {
    act(() => {
      render(<Heading />, container);
    });
    const classes = container?.querySelector('h3')?.className;
    expect(classes?.includes('m')).toEqual(true);
  });
});
