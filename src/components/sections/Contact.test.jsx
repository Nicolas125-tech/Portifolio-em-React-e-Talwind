import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { Contact } from './Contact';
import { personalData } from '../../data/personalData';

// Mock IntersectionObserver as it's used in AnimatedSection
class IntersectionObserverMock {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() { return []; }
  unobserve() {}
}

describe('Contact Component', () => {
  beforeAll(() => {
    vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
  });

  afterAll(() => {
    vi.unstubAllGlobals();
  });

  it('renders section title and subtitle correctly', () => {
    render(<Contact />);

    expect(screen.getByText('Entre em Contato')).toBeInTheDocument();
    expect(screen.getByText('Estou disponível para novas oportunidades e projetos')).toBeInTheDocument();
    expect(screen.getByText('Vamos construir algo incrível juntos?')).toBeInTheDocument();
  });

  it('renders contact information with correct values and links', () => {
    render(<Contact />);

    // Check texts
    const emails = screen.getAllByText('Email');
    expect(emails.length).toBeGreaterThan(0);

    const emailValues = screen.getAllByText(personalData.email);
    expect(emailValues.length).toBeGreaterThan(0);

    const phones = screen.getAllByText('Telefone');
    expect(phones.length).toBeGreaterThan(0);

    const phoneValues = screen.getAllByText(personalData.phone);
    expect(phoneValues.length).toBeGreaterThan(0);

    const locations = screen.getAllByText('Localização');
    expect(locations.length).toBeGreaterThan(0);

    const locationValues = screen.getAllByText(personalData.location);
    expect(locationValues.length).toBeGreaterThan(0);

    const links = screen.getAllByRole('link');
    expect(links.some(link => link.getAttribute('href') === `mailto:${personalData.email}`)).toBe(true);
    expect(links.some(link => link.getAttribute('href') === `https://wa.me/5543984445767`)).toBe(true);
  });

  it('renders social links correctly', () => {
    render(<Contact />);

    const links = screen.getAllByRole('link');

    const githubLink = links.find(link => link.getAttribute('href') === personalData.github);
    expect(githubLink).toBeDefined();

    const linkedinLink = links.find(link => link.getAttribute('href') === personalData.linkedin);
    expect(linkedinLink).toBeDefined();
  });

  it('renders CTA email button correctly', () => {
    render(<Contact />);

    const emailLinks = screen.getAllByRole('link');
    const ctaLink = emailLinks.find(link => link.textContent.includes('Enviar Email'));

    expect(ctaLink).toBeDefined();
    expect(ctaLink).toHaveAttribute('href', `mailto:${personalData.email}`);
  });
});
