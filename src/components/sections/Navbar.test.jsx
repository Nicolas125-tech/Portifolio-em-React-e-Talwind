import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Navbar } from './Navbar';

describe('Navbar Component', () => {
  beforeEach(() => {
    // Mock requestAnimationFrame asynchronously using queueMicrotask or setTimeout/promise to simulate RAF async behavior properly
    vi.stubGlobal('requestAnimationFrame', (cb) => {
      Promise.resolve().then(cb);
      return 1;
    });

    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
    document.body.innerHTML = '';
  });

  it('renders logo and navigation links', () => {
    render(<Navbar />);

    expect(screen.getByText('Nicolas')).toBeInTheDocument();
    expect(screen.getByText('.dev')).toBeInTheDocument();

    const links = ['Início', 'Sobre', 'Habilidades', 'Projetos', 'Experiência', 'Certificações', 'Contato'];
    links.forEach((linkText) => {
      expect(screen.getAllByText(linkText).length).toBeGreaterThan(0);
    });
  });

  it('toggles mobile menu on button click and closes menu when link clicked', () => {
    render(<Navbar />);

    const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
    expect(toggleButton).toBeInTheDocument();

    const mobileMenuContainer = toggleButton.closest('nav').querySelector('div.md\\:hidden.transition-all');
    expect(mobileMenuContainer).toHaveClass('max-h-0 opacity-0');

    fireEvent.click(toggleButton);
    expect(mobileMenuContainer).toHaveClass('max-h-96 opacity-100');

    const mobileSobreLink = screen.getAllByText('Sobre').find(el => el.closest('.glass-strong'));
    fireEvent.click(mobileSobreLink);
    expect(mobileMenuContainer).toHaveClass('max-h-0 opacity-0');
  });

  it('updates navbar style on scroll past 50px', async () => {
    render(<Navbar />);

    const navbar = document.getElementById('navbar');
    expect(navbar).toHaveClass('bg-transparent');

    await act(async () => {
      window.scrollY = 100;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(navbar).toHaveClass('glass-strong');

    await act(async () => {
      window.scrollY = 20;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(navbar).toHaveClass('bg-transparent');
  });

  it('updates active section based on section scroll position', async () => {
    const sections = ['hero', 'sobre', 'habilidades', 'projetos', 'experiencia', 'certificacoes', 'contato'];
    const elements = {};

    sections.forEach((id) => {
      const el = document.createElement('section');
      el.id = id;
      document.body.appendChild(el);
      elements[id] = el;
    });

    sections.forEach((id) => {
      vi.spyOn(elements[id], 'getBoundingClientRect').mockReturnValue({
        top: id === 'hero' ? 0 : 500,
        bottom: 1000,
        left: 0,
        right: 0,
        width: 100,
        height: 100,
      });
    });

    render(<Navbar />);

    const inicioLink = screen.getAllByRole('link', { name: 'Início' })[0];
    expect(inicioLink).toHaveClass('text-primary-400');

    sections.forEach((id) => {
      vi.spyOn(elements[id], 'getBoundingClientRect').mockReturnValue({
        top: id === 'projetos' ? 100 : id === 'sobre' || id === 'habilidades' ? -200 : 500,
        bottom: 1000,
        left: 0,
        right: 0,
        width: 100,
        height: 100,
      });
    });

    await act(async () => {
      window.scrollY = 600;
      window.dispatchEvent(new Event('scroll'));
    });

    const projetosLink = screen.getAllByRole('link', { name: 'Projetos' })[0];
    expect(projetosLink).toHaveClass('text-primary-400');
    expect(inicioLink).not.toHaveClass('text-primary-400');
  });

  it('removes scroll event listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

    const { unmount } = render(<Navbar />);

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
  });
});
