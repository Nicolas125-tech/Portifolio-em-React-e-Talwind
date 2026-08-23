import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkillBadge } from './SkillBadge';

describe('SkillBadge Component', () => {
  it('renders the skill name correctly', () => {
    render(<SkillBadge name="React" />);
    const badgeElement = screen.getByText('React');
    expect(badgeElement).toBeInTheDocument();
  });

  it('renders as a span element with expected styling classes', () => {
    render(<SkillBadge name="Tailwind CSS" />);
    const badgeElement = screen.getByText('Tailwind CSS');
    expect(badgeElement.tagName).toBe('SPAN');
    expect(badgeElement).toHaveClass(
      'inline-flex',
      'items-center',
      'px-4',
      'py-2',
      'rounded-full',
      'text-sm',
      'font-medium',
      'bg-primary-500/10',
      'text-primary-300',
      'border',
      'border-primary-500/20'
    );
  });

  it('handles empty string or undefined name gracefully', () => {
    const { container } = render(<SkillBadge />);
    const spanElement = container.querySelector('span');
    expect(spanElement).toBeInTheDocument();
    expect(spanElement.textContent).toBe('');
  });
});
