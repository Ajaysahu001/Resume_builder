const STORAGE_KEY = 'resume-builder-data';
const RESUMES_KEY = 'resume-builder-resumes';

/**
 * Save resume data to localStorage
 */
export const saveResumeToStorage = (resumeData, resumeId = 'current', resumeName = 'Untitled Resume', template = 'modern') => {
  try {
    if (typeof window === 'undefined') return false;

    const data = {
      ...resumeData,
      id: resumeId,
      name: resumeName,
      template: template || resumeData.template || 'modern',
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(`${STORAGE_KEY}-${resumeId}`, JSON.stringify(data));

    // Only add to the list if meaningful content exists, or resume already in the list
    const hasContent =
      resumeData.personalInfo?.fullName?.trim() ||
      resumeData.personalInfo?.email?.trim() ||
      (resumeData.experience && resumeData.experience.length > 0) ||
      (resumeData.education && resumeData.education.length > 0);

    const resumesList = loadResumesList();
    const existingIndex = resumesList.findIndex(r => r.id === resumeId);

    if (hasContent || existingIndex >= 0) {
      const resumeListItem = {
        id: resumeId,
        name: resumeName,
        template: template || resumeData.template || 'modern',
        updatedAt: data.updatedAt,
      };
      if (existingIndex >= 0) {
        resumesList[existingIndex] = resumeListItem;
      } else {
        resumesList.push(resumeListItem);
      }
      saveResumesList(resumesList);
    }
    return true;
  } catch (error) {
    console.error('Error saving resume to storage:', error);
    return false;
  }
};

/**
 * Load resume data from localStorage
 */
export const loadResumeFromStorage = (resumeId = 'current') => {
  try {
    const data = localStorage.getItem(`${STORAGE_KEY}-${resumeId}`);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error loading resume from storage:', error);
    return null;
  }
};

/**
 * Save list of resumes
 */
export const saveResumesList = (resumes) => {
  try {
    localStorage.setItem(RESUMES_KEY, JSON.stringify(resumes));
    return true;
  } catch (error) {
    console.error('Error saving resumes list:', error);
    return false;
  }
};

/**
 * Load list of resumes
 */
export const loadResumesList = () => {
  try {
    if (typeof window === 'undefined') return [];
    
    const data = localStorage.getItem(RESUMES_KEY);
    if (data) {
      return JSON.parse(data);
    }
    
    // If no list exists, try to create one from existing saved resumes
    const resumes = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(STORAGE_KEY + '-')) {
        try {
          const resumeData = JSON.parse(localStorage.getItem(key));
          if (resumeData && resumeData.id) {
            resumes.push({
              id: resumeData.id,
              name: resumeData.name || 'Untitled Resume',
              template: resumeData.template || 'modern',
              updatedAt: resumeData.updatedAt || new Date().toISOString(),
            });
          }
        } catch (e) {
          // Skip invalid entries
        }
      }
    }
    
    if (resumes.length > 0) {
      saveResumesList(resumes);
      return resumes;
    }
    
    return [];
  } catch (error) {
    console.error('Error loading resumes list:', error);
    return [];
  }
};

/**
 * Delete resume from storage
 */
export const deleteResumeFromStorage = (resumeId) => {
  try {
    localStorage.removeItem(`${STORAGE_KEY}-${resumeId}`);
    return true;
  } catch (error) {
    console.error('Error deleting resume from storage:', error);
    return false;
  }
};

/**
 * Clear all resume data
 */
export const clearResumeStorage = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(RESUMES_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing resume storage:', error);
    return false;
  }
};

