export const TEMPLATES = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean and contemporary design',
    preview: '/templates/modern-preview.png',
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional and professional',
    preview: '/templates/classic-preview.png',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Simple and elegant',
    preview: '/templates/minimal-preview.png',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'ATS-friendly corporate resume',
    preview: '/templates/professional-preview.png',
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'Dark sidebar with bold presence',
    preview: '/templates/executive-preview.png',
  },
];

export const SKILL_CATEGORIES = [
  { value: 'technical', label: 'Technical' },
  { value: 'soft', label: 'Soft Skills' },
  { value: 'language', label: 'Languages' },
  { value: 'tool', label: 'Tools' },
  { value: 'other', label: 'Other' },
];

export const SKILL_LEVELS = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
  { value: 'expert', label: 'Expert' },
];

export const LANGUAGE_PROFICIENCY = [
  { value: 'basic', label: 'Basic' },
  { value: 'conversational', label: 'Conversational' },
  { value: 'fluent', label: 'Fluent' },
  { value: 'native', label: 'Native' },
];

export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const YEARS = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);

