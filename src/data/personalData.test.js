import { describe, it, expect } from 'vitest';
import {
  personalData,
  skills,
  education,
  experience,
  allCertifications,
  projects
} from './personalData';

describe('personalData module', () => {
  describe('personalData export', () => {
    it('contains basic personal details with valid types and formats', () => {
      expect(personalData).toBeDefined();
      expect(typeof personalData).toBe('object');
      expect(personalData.name).toBeTypeOf('string');
      expect(personalData.fullName).toBeTypeOf('string');
      expect(personalData.role).toBeTypeOf('string');
      expect(personalData.location).toBeTypeOf('string');
      expect(personalData.about).toBeTypeOf('string');
      expect(personalData.phone).toBeTypeOf('string');
      expect(personalData.birthDate).toBeTypeOf('string');
      expect(personalData.nationality).toBeTypeOf('string');
      expect(personalData.cnh).toBeTypeOf('string');
      expect(personalData.travelAvailability).toBeTypeOf('string');
    });

    it('contains valid email format', () => {
      expect(personalData.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });

    it('contains valid URLs for online profiles', () => {
      expect(personalData.linkedin).toMatch(/^https?:\/\//);
      expect(personalData.github).toMatch(/^https?:\/\//);
      expect(personalData.portfolio).toMatch(/^https?:\/\//);
    });

    it('contains languages array with expected shape', () => {
      expect(Array.isArray(personalData.languages)).toBe(true);
      expect(personalData.languages.length).toBeGreaterThan(0);
      personalData.languages.forEach((lang) => {
        expect(lang).toHaveProperty('name');
        expect(lang).toHaveProperty('level');
        expect(typeof lang.name).toBe('string');
        expect(typeof lang.level).toBe('string');
      });
    });
  });

  describe('skills export', () => {
    it('contains category arrays with non-empty strings', () => {
      expect(skills).toBeDefined();
      expect(Array.isArray(skills.languages)).toBe(true);
      expect(Array.isArray(skills.frontend)).toBe(true);
      expect(Array.isArray(skills.backend)).toBe(true);
      expect(Array.isArray(skills.toolsAndTech)).toBe(true);

      [...skills.languages, ...skills.frontend, ...skills.backend, ...skills.toolsAndTech].forEach((skill) => {
        expect(typeof skill).toBe('string');
        expect(skill.trim().length).toBeGreaterThan(0);
      });
    });
  });

  describe('education export', () => {
    it('contains valid education entries', () => {
      expect(Array.isArray(education)).toBe(true);
      expect(education.length).toBeGreaterThan(0);
      education.forEach((edu) => {
        expect(edu).toHaveProperty('id');
        expect(edu).toHaveProperty('course');
        expect(edu).toHaveProperty('school');
        expect(edu).toHaveProperty('period');
        expect(edu).toHaveProperty('status');
      });
    });
  });

  describe('experience export', () => {
    it('contains valid work experience entries', () => {
      expect(Array.isArray(experience)).toBe(true);
      expect(experience.length).toBeGreaterThan(0);
      experience.forEach((exp) => {
        expect(exp).toHaveProperty('id');
        expect(exp).toHaveProperty('role');
        expect(exp).toHaveProperty('company');
        expect(exp).toHaveProperty('period');
        expect(typeof exp.isCurrent).toBe('boolean');
        expect(exp).toHaveProperty('description');
      });
    });
  });

  describe('allCertifications export', () => {
    it('contains categories with non-empty items array', () => {
      expect(Array.isArray(allCertifications)).toBe(true);
      expect(allCertifications.length).toBeGreaterThan(0);
      allCertifications.forEach((certGroup) => {
        expect(certGroup).toHaveProperty('category');
        expect(Array.isArray(certGroup.items)).toBe(true);
        expect(certGroup.items.length).toBeGreaterThan(0);
        certGroup.items.forEach((item) => {
          expect(typeof item).toBe('string');
          expect(item.trim().length).toBeGreaterThan(0);
        });
      });
    });
  });

  describe('projects export', () => {
    it('contains valid project details and URLs', () => {
      expect(Array.isArray(projects)).toBe(true);
      expect(projects.length).toBeGreaterThan(0);
      projects.forEach((proj) => {
        expect(proj).toHaveProperty('id');
        expect(proj).toHaveProperty('title');
        expect(proj).toHaveProperty('description');
        expect(Array.isArray(proj.tech)).toBe(true);
        expect(proj.tech.length).toBeGreaterThan(0);
        expect(proj.githubUrl).toMatch(/^https?:\/\//);
        expect(typeof proj.featured).toBe('boolean');
      });
    });
  });
});
