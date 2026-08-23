import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Projects } from './Projects';
import { projects } from '../../data/personalData';

// Mock IntersectionObserver
beforeEach(() => {
  const mockIntersectionObserver = vi.fn(function() {
    this.observe = vi.fn();
    this.unobserve = vi.fn();
    this.disconnect = vi.fn();
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

afterEach(() => {
  cleanup(); // Explicitly clean up after each test so document is cleared
  vi.restoreAllMocks();
  delete window.IntersectionObserver;
});

// Mock the imported projects data
vi.mock('../../data/personalData', () => ({
  projects: [
    {
      id: 1,
      title: 'Featured Project',
      description: 'This is a featured project.',
      tech: ['React', 'Node'],
      featured: true,
      badgeText: 'Top Pick',
      githubUrl: 'https://github.com/test/featured',
      liveUrl: 'https://test.com/featured',
    },
    {
      id: 2,
      title: 'Regular Project',
      description: 'This is a regular project.',
      tech: ['Vue', 'Express'],
      featured: false,
    },
    {
      id: 3,
      title: 'No Links Project',
      description: 'This project has no links.',
      tech: ['Angular'],
      featured: true,
      // no githubUrl or liveUrl, default badgeText
    }
  ],
}));

describe('Projects Component', () => {
  it('renders section title correctly', () => {
    render(<Projects />);
    expect(screen.getByText('Projetos')).toBeInTheDocument();
    expect(screen.getByText('Aplicações que desenvolvi para demonstrar minhas habilidades')).toBeInTheDocument();
  });

  it('renders all projects from the data source', () => {
    render(<Projects />);
    expect(screen.getAllByText('Featured Project').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Regular Project').length).toBeGreaterThan(0);
    expect(screen.getAllByText('No Links Project').length).toBeGreaterThan(0);
  });

  it('displays featured badge only on featured projects', () => {
    const { container } = render(<Projects />);
    // "Featured Project" has badgeText: 'Top Pick'
    expect(screen.getAllByText('Top Pick').length).toBeGreaterThan(0);

    // "No Links Project" has featured: true, but no badgeText so it gets 'Destaque'
    expect(screen.getAllByText('Destaque').length).toBeGreaterThan(0);

    // Verify exactly two Sparkles icons are rendered since 2 projects are featured
    const sparkles = container.querySelectorAll('svg.lucide-sparkles');
    expect(sparkles.length).toBe(2);
  });

  it('renders tech stack for projects', () => {
    render(<Projects />);
    expect(screen.getAllByText('React').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Node').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Vue').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Express').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Angular').length).toBeGreaterThan(0);
  });

  it('conditionally renders github and live urls', () => {
    render(<Projects />);

    // Featured Project has both links
    const featuredGithub = screen.getAllByLabelText('GitHub - Featured Project');
    expect(featuredGithub.length).toBeGreaterThan(0);
    expect(featuredGithub[0]).toHaveAttribute('href', 'https://github.com/test/featured');

    const featuredLive = screen.getAllByLabelText('Demo - Featured Project');
    expect(featuredLive.length).toBeGreaterThan(0);
    expect(featuredLive[0]).toHaveAttribute('href', 'https://test.com/featured');

    // Regular Project has neither links
    expect(screen.queryByLabelText('GitHub - Regular Project')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Demo - Regular Project')).not.toBeInTheDocument();

    // No Links Project has neither links
    expect(screen.queryByLabelText('GitHub - No Links Project')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Demo - No Links Project')).not.toBeInTheDocument();
  });
});
