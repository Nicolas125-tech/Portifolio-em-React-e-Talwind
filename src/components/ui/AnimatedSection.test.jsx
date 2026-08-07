import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { AnimatedSection } from './AnimatedSection';

describe('AnimatedSection Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    // Default mock setup that acts as a constructor
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

  it('renders children correctly and applies initial hidden styles', () => {
    render(
      <AnimatedSection>
        <div data-testid="child-element-1">Child Content 1</div>
      </AnimatedSection>
    );

    const childElement = screen.getByTestId('child-element-1');
    expect(childElement).toBeInTheDocument();

    // The parent div should have the initial styles (opacity 0, translateY 40px)
    const wrapperElement = childElement.parentElement;
    expect(wrapperElement).toHaveStyle({ opacity: '0', transform: 'translateY(40px)' });
  });

  it('applies custom className and transitionDelay', () => {
    render(
      <AnimatedSection className="custom-class" delay={200}>
        <div data-testid="child-element-2">Child Content 2</div>
      </AnimatedSection>
    );

    const wrapperElement = screen.getByTestId('child-element-2').parentElement;
    expect(wrapperElement).toHaveClass('custom-class');
    expect(wrapperElement).toHaveStyle({ transitionDelay: '200ms' });
  });

  it('becomes visible when intersection observer triggers isIntersecting', () => {
    // Setup a mock observer instance where we can capture the callback
    let observerCallback;
    const mockObserve = vi.fn();
    const mockUnobserve = vi.fn();

    window.IntersectionObserver = vi.fn(function(callback) {
      observerCallback = callback;
      this.observe = mockObserve;
      this.unobserve = mockUnobserve;
      this.disconnect = vi.fn();
    });

    render(
      <AnimatedSection>
        <div data-testid="child-element-3">Child Content 3</div>
      </AnimatedSection>
    );

    const wrapperElement = screen.getByTestId('child-element-3').parentElement;
    expect(wrapperElement).toHaveStyle({ opacity: '0' });

    // Trigger the intersection observer callback
    act(() => {
      observerCallback([{ isIntersecting: true, target: wrapperElement }]);
    });

    // Check that styles are updated to visible
    expect(wrapperElement).toHaveStyle({ opacity: '1', transform: 'translateY(0)' });

    // Check that unobserve was called
    expect(mockUnobserve).toHaveBeenCalledWith(wrapperElement);
  });

  it('disconnects observer on unmount', () => {
    const mockDisconnect = vi.fn();

    window.IntersectionObserver = vi.fn(function() {
      this.observe = vi.fn();
      this.unobserve = vi.fn();
      this.disconnect = mockDisconnect;
    });

    const { unmount } = render(
      <AnimatedSection>
        <div data-testid="child-element-4">Child Content 4</div>
      </AnimatedSection>
    );

    unmount();

    expect(mockDisconnect).toHaveBeenCalled();
  });
});
