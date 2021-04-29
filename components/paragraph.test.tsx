import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import P from './paragraph';

describe('Paragraph component', () => {
  test('renders children elements', () => {
    render(<P><span>Children el!</span></P>);
  
    const divElement = screen.getByText('Children el!');
    expect(divElement).toBeInTheDocument();
  });
});
