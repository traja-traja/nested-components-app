import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Post from './post';

describe('Post component', () => {
  test('renders proper text value', () => {
    render(<Post title='Description 123' />);
  
    const txtElement = screen.getByText('Description 123');
    expect(txtElement).toBeInTheDocument();
  });
});
