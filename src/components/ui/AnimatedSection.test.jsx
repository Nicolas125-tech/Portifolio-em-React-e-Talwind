import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { AnimatedSection } from './AnimatedSection';

describe('AnimatedSection Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetModules();

    const mockIntersectionObserver = vi.fn(function() {
      this.observe = vi.fn();
      this.unobserve = vi.fn();
      this.disconnect = vi.fn();
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    delete window.IntersectionObserver;
  });

  it('renders children correctly and applies initial hidden styles', async () => {
    const { AnimatedSection: FreshAnimatedSection } = await import('./AnimatedSection');
    render(
      <FreshAnimatedSection>
        <div data-testid="child-element-1">Child Content 1</div>
      </FreshAnimatedSection>
    );

    const childElement = screen.getByTestId('child-element-1');
    expect(childElement).toBeInTheDocument();

    const wrapperElement = childElement.parentElement;
    expect(wrapperElement).toHaveStyle({ opacity: '0', transform: 'translateY(40px)' });
  });

  it('applies custom className and transitionDelay', async () => {
    const { AnimatedSection: FreshAnimatedSection } = await import('./AnimatedSection');
    render(
      <FreshAnimatedSection className="custom-class" delay={200}>
        <div data-testid="child-element-2">Child Content 2</div>
      </FreshAnimatedSection>
    );

    const wrapperElement = screen.getByTestId('child-element-2').parentElement;
    expect(wrapperElement).toHaveClass('custom-class');
    expect(wrapperElement).toHaveStyle({ transitionDelay: '200ms' });
  });

  it('becomes visible when intersection observer triggers isIntersecting', async () => {
    let observerCallback;
    const mockObserve = vi.fn();
    const mockUnobserve = vi.fn();

    window.IntersectionObserver = vi.fn(function(callback) {
      observerCallback = callback;
      this.observe = mockObserve;
      this.unobserve = mockUnobserve;
      this.disconnect = vi.fn();
    });

    const { AnimatedSection: FreshAnimatedSection } = await import('./AnimatedSection');

    render(
      <FreshAnimatedSection>
        <div data-testid="child-element-3">Child Content 3</div>
      </FreshAnimatedSection>
    );

    const wrapperElement = screen.getByTestId('child-element-3').parentElement;
    expect(wrapperElement).toHaveStyle({ opacity: '0' });

    act(() => {
      observerCallback([{ isIntersecting: true, target: wrapperElement }]);
    });

    expect(wrapperElement).toHaveStyle({ opacity: '1', transform: 'translateY(0)' });
    expect(mockUnobserve).toHaveBeenCalledWith(wrapperElement);
  });

  it('disconnects shared observer when all observed elements unmount', async () => {
    const mockDisconnect = vi.fn();

    window.IntersectionObserver = vi.fn(function() {
      this.observe = vi.fn();
      this.unobserve = vi.fn();
      this.disconnect = mockDisconnect;
    });

    const { AnimatedSection: FreshAnimatedSection } = await import('./AnimatedSection');

    const { unmount } = render(
      <FreshAnimatedSection>
        <div data-testid="child-element-4">Child Content 4</div>
      </FreshAnimatedSection>
    );

    unmount();

    expect(mockDisconnect).toHaveBeenCalled();
  });

  it('shares a single IntersectionObserver instance across multiple AnimatedSection components', async () => {
    const observerConstructSpy = vi.fn(function() {
      this.observe = vi.fn();
      this.unobserve = vi.fn();
      this.disconnect = vi.fn();
    });

    window.IntersectionObserver = observerConstructSpy;

    const { AnimatedSection: FreshAnimatedSection } = await import('./AnimatedSection');

    render(
      <>
        <FreshAnimatedSection>
          <div>Section 1</div>
        </FreshAnimatedSection>
        <FreshAnimatedSection>
          <div>Section 2</div>
        </FreshAnimatedSection>
        <FreshAnimatedSection>
          <div>Section 3</div>
        </FreshAnimatedSection>
      </>
    );

    expect(observerConstructSpy).toHaveBeenCalledTimes(1);
  });
});
