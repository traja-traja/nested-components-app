import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Home from './index';

describe('Home component', () => {
  test('renders at least one post\'s header', () => {
    render(<Home />);
  
    const headerElements = screen.getAllByRole('heading');
    expect(headerElements.length).toBeGreaterThan(0);
  });

  test('renders <hr> between headers (posts)', () => {
    render(<Home />);
  
    const headerElements = screen.getAllByRole('heading');
    const separatorElements = screen.getAllByRole('separator');
    expect(headerElements.length - separatorElements.length).toBe(1);
  });
});
