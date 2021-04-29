import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@babel/polyfill'

import Home from './index';

describe('Home component', () => {
  test('renders at least one post\'s header', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{
        title: "My first blog post",
        id: "a1",
        paragraphs: [
          "Hello there",
          "This is an example of a componentized blog post"
        ]
      }]
    });

    render(<Home />);
  
    const headerElements = await screen.findAllByRole('heading');
    expect(headerElements).not.toHaveLength(0);
  });

  test('renders <hr> between headers (posts)', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{
          title: "My first blog post",
          id: "a1",
          paragraphs: [
            "Hello there",
            "This is an example of a componentized blog post"
          ]
        }, {
          title: "My second blog post",
          id: "a2",
          paragraphs: [
            "Hello there",
            "This is an example of a componentized blog post"
          ]
        }
      ]
    });

    render(<Home />);
  
    const headerElements = await screen.findAllByRole('heading');
    const separatorElements = await screen.findAllByRole('separator');
    expect(headerElements.length - separatorElements.length).toBe(1);
  });
});
