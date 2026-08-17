import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { calculateAge } from './calculateAge';

describe('calculateAge', () => {
  beforeEach(() => {
    // Mock the current date to ensure tests are deterministic
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2025, 2, 1)); // March 1, 2025
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns empty string if birthDateStr is falsy', () => {
    expect(calculateAge('')).toBe('');
    expect(calculateAge(null)).toBe('');
    expect(calculateAge(undefined)).toBe('');
  });

  it('calculates age correctly if birthday has not occurred yet this year', () => {
    // Current date is March 1, 2025. Birthday is March 2, 2000.
    // Person should be 24 years old.
    expect(calculateAge('02/03/2000')).toBe(24);
  });

  it('calculates age correctly if birthday has occurred this year', () => {
    // Current date is March 1, 2025. Birthday is February 28, 2000.
    // Person should be 25 years old.
    expect(calculateAge('28/02/2000')).toBe(25);
  });

  it('calculates age correctly if birthday is today', () => {
    // Current date is March 1, 2025. Birthday is March 1, 2000.
    // Person should be 25 years old.
    expect(calculateAge('01/03/2000')).toBe(25);
  });

  it('calculates age correctly for leap years (born on Feb 29)', () => {
    // Current date is March 1, 2025. Birthday is Feb 29, 2000.
    // On non-leap years, they age up on March 1st.
    expect(calculateAge('29/02/2000')).toBe(25);
  });
});
