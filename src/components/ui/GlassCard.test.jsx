import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { GlassCard } from './GlassCard';

describe('GlassCard Component', () => {
  it('renders children correctly', () => {
    render(
      <GlassCard>
        <span data-testid="card-content">Card Content</span>
      </GlassCard>
    );

    expect(screen.getByTestId('card-content')).toBeInTheDocument();
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('applies default classes (hover=true, glow=false)', () => {
    const { container } = render(
      <GlassCard>
        <div>Content</div>
      </GlassCard>
    );

    const cardElement = container.firstChild;
    expect(cardElement).toHaveClass('glass', 'rounded-2xl', 'p-6');
    expect(cardElement).toHaveClass('hover-lift', 'cursor-default');
    expect(cardElement).not.toHaveClass('animate-glow');
  });

  it('does not apply hover classes when hover prop is false', () => {
    const { container } = render(
      <GlassCard hover={false}>
        <div>Content</div>
      </GlassCard>
    );

    const cardElement = container.firstChild;
    expect(cardElement).toHaveClass('glass', 'rounded-2xl', 'p-6');
    expect(cardElement).not.toHaveClass('hover-lift');
    expect(cardElement).not.toHaveClass('cursor-default');
  });

  it('applies animate-glow class when glow prop is true', () => {
    const { container } = render(
      <GlassCard glow={true}>
        <div>Content</div>
      </GlassCard>
    );

    const cardElement = container.firstChild;
    expect(cardElement).toHaveClass('animate-glow');
  });

  it('applies custom className along with base classes', () => {
    const { container } = render(
      <GlassCard className="my-custom-class extra-padding">
        <div>Content</div>
      </GlassCard>
    );

    const cardElement = container.firstChild;
    expect(cardElement).toHaveClass('my-custom-class');
    expect(cardElement).toHaveClass('extra-padding');
    expect(cardElement).toHaveClass('glass');
  });
});
