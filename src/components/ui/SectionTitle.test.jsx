import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SectionTitle } from './SectionTitle';

describe('SectionTitle Component', () => {
  it('renders the title text correctly', () => {
    render(<SectionTitle title="Test Title" />);
    const titleElement = screen.getByText('Test Title');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the subtitle when provided', () => {
    render(<SectionTitle title="Test Title" subtitle="Test Subtitle" />);
    const subtitleElement = screen.getByText('Test Subtitle');
    expect(subtitleElement).toBeInTheDocument();
  });

  it('does not render subtitle element if subtitle is not provided', () => {
    const { container } = render(<SectionTitle title="Test Title" />);
    const subtitleElements = container.querySelectorAll('p');
    expect(subtitleElements.length).toBe(0);
  });

  it('applies center alignment classes by default', () => {
    const { container } = render(<SectionTitle title="Test Title" />);
    // container.firstChild corresponds to the outer div
    expect(container.firstChild).toHaveClass('text-center');

    // Check the decorative lines container alignment
    const decorativeContainer = container.querySelector('.mt-6');
    expect(decorativeContainer).toHaveClass('justify-center');
  });

  it('applies left alignment classes when align="left" is passed', () => {
    const { container } = render(<SectionTitle title="Test Title" align="left" />);
    expect(container.firstChild).toHaveClass('text-left');

    // Check the decorative lines container alignment
    const decorativeContainer = container.querySelector('.mt-6');
    expect(decorativeContainer).toHaveClass('justify-start');
  });
});
