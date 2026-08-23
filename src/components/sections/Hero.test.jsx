import { render, screen, act, cleanup } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { Hero } from './Hero';
import { personalData } from '../../data/personalData';

describe('Hero Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      vi.runOnlyPendingTimers();
    });
    vi.useRealTimers();
    cleanup();
  });

  it('renders personal information and social links correctly', () => {
    render(<Hero />);

    // Check availability badge
    expect(screen.getByText('Disponível para oportunidades')).toBeInTheDocument();

    // Check name
    expect(screen.getByText(personalData.name)).toBeInTheDocument();

    // Check location
    expect(screen.getByText(personalData.location)).toBeInTheDocument();

    // Check CTA buttons/links
    expect(screen.getByText('Ver Projetos')).toHaveAttribute('href', '#projetos');
    expect(screen.getByRole('button', { name: /baixar cv/i })).toBeInTheDocument();
    expect(screen.getByText('Fale Comigo')).toHaveAttribute('href', '#contato');

    // Check social links
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', personalData.github);
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', personalData.linkedin);
    expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute('href', `mailto:${personalData.email}`);
  });

  it('triggers window.print when Download CV button is clicked', () => {
    const printSpy = vi.spyOn(window, 'print').mockImplementation(() => {});
    render(<Hero />);

    const downloadButton = screen.getByRole('button', { name: /baixar cv/i });
    downloadButton.click();

    expect(printSpy).toHaveBeenCalledTimes(1);
  });

  it('animates the typewriter effect: typing, pausing, deleting, and moving to the next role', () => {
    const { container } = render(<Hero />);
    const roles = [
      'Desenvolvedor Full Stack',
      'React Developer',
      'Node.js Developer',
      'Java Developer',
    ];

    const getTypedText = () => {
      const element = container.querySelector('.animate-pulse')?.previousElementSibling;
      return element ? element.textContent : '';
    };

    // Initial state before any timers run
    expect(getTypedText()).toBe('');

    // Type character by character for the first role
    for (let i = 1; i <= roles[0].length; i++) {
      act(() => {
        vi.advanceTimersByTime(80);
      });
      expect(getTypedText()).toBe(roles[0].slice(0, i));
    }

    expect(getTypedText()).toBe(roles[0]);

    // 2000ms pause when fully typed
    act(() => {
      vi.advanceTimersByTime(1999);
    });
    expect(getTypedText()).toBe(roles[0]);

    act(() => {
      vi.advanceTimersByTime(1);
    });

    // Delete character by character (40ms per char)
    for (let i = roles[0].length - 1; i >= 0; i--) {
      act(() => {
        vi.advanceTimersByTime(40);
      });
      expect(getTypedText()).toBe(roles[0].slice(0, i));
    }

    expect(getTypedText()).toBe('');

    // Switch to next role (0ms timeout)
    act(() => {
      vi.advanceTimersByTime(0);
    });

    // Verify typing starts for the second role ("React Developer")
    act(() => {
      vi.advanceTimersByTime(80);
    });
    expect(getTypedText()).toBe('R');

    for (let i = 2; i <= roles[1].length; i++) {
      act(() => {
        vi.advanceTimersByTime(80);
      });
    }
    expect(getTypedText()).toBe(roles[1]);
  });

  it('loops back to the first role after reaching the last role', () => {
    const { container } = render(<Hero />);
    const roles = [
      'Desenvolvedor Full Stack',
      'React Developer',
      'Node.js Developer',
      'Java Developer',
    ];

    const getTypedText = () => {
      const element = container.querySelector('.animate-pulse')?.previousElementSibling;
      return element ? element.textContent : '';
    };

    // Cycle through all roles
    roles.forEach((role) => {
      // Type out role
      for (let i = 0; i < role.length; i++) {
        act(() => {
          vi.advanceTimersByTime(80);
        });
      }
      expect(getTypedText()).toBe(role);

      // Pause 2000ms
      act(() => {
        vi.advanceTimersByTime(2000);
      });

      // Delete role
      for (let i = 0; i < role.length; i++) {
        act(() => {
          vi.advanceTimersByTime(40);
        });
      }
      expect(getTypedText()).toBe('');

      // Role index increment (0ms)
      act(() => {
        vi.advanceTimersByTime(0);
      });
    });

    // After cycling all 4 roles, it should loop back to the first role
    act(() => {
      vi.advanceTimersByTime(80);
    });
    expect(getTypedText()).toBe('D');
  });

  it('cleans up timeout on component unmount', () => {
    const clearTimeoutSpy = vi.spyOn(window, 'clearTimeout');
    const { unmount } = render(<Hero />);

    unmount();

    expect(clearTimeoutSpy).toHaveBeenCalled();
  });
});
