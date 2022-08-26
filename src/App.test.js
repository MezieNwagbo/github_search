import { Button } from '@mui/material';
import { render, screen } from '@testing-library/react';
import App from './App';
import SearchPage from './pages/searchPage/SearchPage';

const URL = require('url').URL;

describe('Test the homepage', () => {
  it('Renders SearchPage correctly', () => {
    render(<App />);
    expect(screen.getByText(/Github User Search/i)).toBeInTheDocument();
  });
});
