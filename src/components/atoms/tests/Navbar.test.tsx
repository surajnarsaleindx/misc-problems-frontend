import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar';

describe('<Navbar />', () => {
  it('renders the component and displays the logo and navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    expect(screen.getByText('LOGO:')).toBeInTheDocument();

    expect(screen.getByText('Redux-Toolkit')).toBeInTheDocument();
    expect(screen.getByText('React-Query')).toBeInTheDocument();
    expect(screen.getByText('Immer')).toBeInTheDocument();

    const dateText = screen.getByText(/days ago$/i);
    expect(dateText).toBeInTheDocument();
  });
});
