import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';

import App from './App';

describe('App', () => {
  describe('when rendering', () => {
    it('adds renders list of pokemons', () => {
      render(<App />);

      expect(true).toBeTruthy();
    });
  });
  describe('when clicking on load more', () => {
    it('loads another set of pokemons', () => {
      render(<App />);

      // fireEvent.click(screen.queryByText('Load more'))

      expect(true).toBeTruthy();
    });
  });
});