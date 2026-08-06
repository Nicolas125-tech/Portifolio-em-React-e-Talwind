import { render, screen } from '@testing-library/react';
import { GlassCard } from './GlassCard';

describe('GlassCard Component', () => {
  it('renders children correctly', () => {
    render(<GlassCard><div data-testid="child-element">Hello World</div></GlassCard>);
    expect(screen.getByTestId('child-element')).toBeInTheDocument();
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('applies default classes correctly', () => {
    const { container } = render(<GlassCard>Content</GlassCard>);
    const divElement = container.firstChild;
    expect(divElement).toHaveClass('glass');
    expect(divElement).toHaveClass('rounded-2xl');
    expect(divElement).toHaveClass('p-6');
    expect(divElement).toHaveClass('hover-lift');
    expect(divElement).toHaveClass('cursor-default');
    expect(divElement).not.toHaveClass('animate-glow');
  });

  it('removes hover classes when hover is false', () => {
    const { container } = render(<GlassCard hover={false}>Content</GlassCard>);
    const divElement = container.firstChild;
    expect(divElement).not.toHaveClass('hover-lift');
    expect(divElement).not.toHaveClass('cursor-default');
  });

  it('applies glow class when glow is true', () => {
    const { container } = render(<GlassCard glow={true}>Content</GlassCard>);
    const divElement = container.firstChild;
    expect(divElement).toHaveClass('animate-glow');
  });

  it('appends custom className correctly', () => {
    const { container } = render(<GlassCard className="custom-test-class">Content</GlassCard>);
    const divElement = container.firstChild;
    expect(divElement).toHaveClass('custom-test-class');
    expect(divElement).toHaveClass('glass');
  });

  it('handles all props combined correctly', () => {
    const { container } = render(
      <GlassCard hover={false} glow={true} className="extra-class">
        Combined
      </GlassCard>
    );
    const divElement = container.firstChild;
    expect(divElement).toHaveClass('glass');
    expect(divElement).toHaveClass('extra-class');
    expect(divElement).toHaveClass('animate-glow');
    expect(divElement).not.toHaveClass('hover-lift');
    expect(divElement).not.toHaveClass('cursor-default');
  });
});
