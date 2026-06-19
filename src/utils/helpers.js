/**
 * Format date for display
 */
export const formatDate = (dateString) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short' };
  return date.toLocaleDateString('en-US', options);
};

/**
 * Generate unique ID
 */
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

/**
 * Validate email
 */
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

/**
 * Validate URL
 */
export const validateURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Debounce function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Truncate text
 */
export const truncate = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

/**
 * Capitalize first letter
 */
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Generate resume summary (mock AI implementation)
 */
export const generateResumeSummary = (resumeData) => {
  const { personalInfo, experience, education, skills } = resumeData;
  
  let summary = '';
  
  if (experience && experience.length > 0) {
    const latestExp = experience[0];
    summary += `Experienced ${latestExp.position || 'professional'} with `;
  }
  
  if (education && education.length > 0) {
    const latestEdu = education[0];
    summary += `${latestEdu.degree || 'educational background'} in ${latestEdu.field || 'relevant field'}. `;
  }
  
  if (skills && skills.length > 0) {
    const skillNames = skills.slice(0, 5).map(s => s.name).filter(Boolean).join(', ');
    if (skillNames) {
      summary += `Proficient in ${skillNames}. `;
    }
  }
  
  summary += `Seeking opportunities to leverage expertise and drive impactful results.`;
  
  return summary || 'Professional seeking new opportunities to contribute and grow.';
};

