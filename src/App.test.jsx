import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

// Mock the child components to simplify testing the App component structure
vi.mock('./components/sections/Navbar', () => ({
  Navbar: () => <nav data-testid="mock-navbar">Navbar</nav>
}));

vi.mock('./components/sections/Hero', () => ({
  Hero: () => <section data-testid="mock-hero">Hero</section>
}));

vi.mock('./components/sections/About', () => ({
  About: () => <section data-testid="mock-about">About</section>
}));

vi.mock('./components/sections/Skills', () => ({
  Skills: () => <section data-testid="mock-skills">Skills</section>
}));

vi.mock('./components/sections/Projects', () => ({
  Projects: () => <section data-testid="mock-projects">Projects</section>
}));

vi.mock('./components/sections/Experience', () => ({
  Experience: () => <section data-testid="mock-experience">Experience</section>
}));

vi.mock('./components/sections/Certifications', () => ({
  Certifications: () => <section data-testid="mock-certifications">Certifications</section>
}));

vi.mock('./components/sections/Contact', () => ({
  Contact: () => <section data-testid="mock-contact">Contact</section>
}));

vi.mock('./components/sections/Footer', () => ({
  Footer: () => <footer data-testid="mock-footer">Footer</footer>
}));

describe('App Component', () => {
  it('renders all sections and applies main layout styling', () => {
    const { container } = render(<App />);

    // Check main wrapper styling
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('bg-dark-950');
    expect(wrapper).toHaveClass('min-h-screen');
    expect(wrapper).toHaveClass('text-dark-100');
    expect(wrapper).toHaveClass('font-sans');

    // Check that all components are rendered
    expect(screen.getByTestId('mock-navbar')).toBeInTheDocument();
    expect(screen.getByTestId('mock-hero')).toBeInTheDocument();
    expect(screen.getByTestId('mock-about')).toBeInTheDocument();
    expect(screen.getByTestId('mock-skills')).toBeInTheDocument();
    expect(screen.getByTestId('mock-projects')).toBeInTheDocument();
    expect(screen.getByTestId('mock-experience')).toBeInTheDocument();
    expect(screen.getByTestId('mock-certifications')).toBeInTheDocument();
    expect(screen.getByTestId('mock-contact')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
  });
});
