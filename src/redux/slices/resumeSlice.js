import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
    profileImage: '',
  },
  education: [],
  experience: [],
  projects: [],
  skills: [],
  certifications: [],
  languages: [],
  socialLinks: {
    linkedin: '',
    github: '',
    portfolio: '',
    twitter: '',
  },
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    updatePersonalInfo: (state, action) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload };
    },
    addEducation: (state, action) => {
      state.education.push({
        id: Date.now().toString(),
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        gpa: '',
        description: '',
        ...action.payload,
      });
    },
    updateEducation: (state, action) => {
      const { id, ...updates } = action.payload;
      const index = state.education.findIndex((edu) => edu.id === id);
      if (index !== -1) {
        state.education[index] = { ...state.education[index], ...updates };
      }
    },
    removeEducation: (state, action) => {
      state.education = state.education.filter((edu) => edu.id !== action.payload);
    },
    addExperience: (state, action) => {
      state.experience.push({
        id: Date.now().toString(),
        company: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: '',
        achievements: [],
        ...action.payload,
      });
    },
    updateExperience: (state, action) => {
      const { id, ...updates } = action.payload;
      const index = state.experience.findIndex((exp) => exp.id === id);
      if (index !== -1) {
        state.experience[index] = { ...state.experience[index], ...updates };
      }
    },
    removeExperience: (state, action) => {
      state.experience = state.experience.filter((exp) => exp.id !== action.payload);
    },
    addProject: (state, action) => {
      state.projects.push({
        id: Date.now().toString(),
        name: '',
        description: '',
        technologies: [],
        url: '',
        github: '',
        startDate: '',
        endDate: '',
        ...action.payload,
      });
    },
    updateProject: (state, action) => {
      const { id, ...updates } = action.payload;
      const index = state.projects.findIndex((proj) => proj.id === id);
      if (index !== -1) {
        state.projects[index] = { ...state.projects[index], ...updates };
      }
    },
    removeProject: (state, action) => {
      state.projects = state.projects.filter((proj) => proj.id !== action.payload);
    },
    addSkill: (state, action) => {
      state.skills.push({
        id: Date.now().toString(),
        name: '',
        level: 'intermediate',
        category: 'technical',
        ...action.payload,
      });
    },
    updateSkill: (state, action) => {
      const { id, ...updates } = action.payload;
      const index = state.skills.findIndex((skill) => skill.id === id);
      if (index !== -1) {
        state.skills[index] = { ...state.skills[index], ...updates };
      }
    },
    removeSkill: (state, action) => {
      state.skills = state.skills.filter((skill) => skill.id !== action.payload);
    },
    addCertification: (state, action) => {
      state.certifications.push({
        id: Date.now().toString(),
        name: '',
        issuer: '',
        date: '',
        expiryDate: '',
        credentialId: '',
        url: '',
        ...action.payload,
      });
    },
    updateCertification: (state, action) => {
      const { id, ...updates } = action.payload;
      const index = state.certifications.findIndex((cert) => cert.id === id);
      if (index !== -1) {
        state.certifications[index] = { ...state.certifications[index], ...updates };
      }
    },
    removeCertification: (state, action) => {
      state.certifications = state.certifications.filter((cert) => cert.id !== action.payload);
    },
    addLanguage: (state, action) => {
      state.languages.push({
        id: Date.now().toString(),
        name: '',
        proficiency: 'intermediate',
        ...action.payload,
      });
    },
    updateLanguage: (state, action) => {
      const { id, ...updates } = action.payload;
      const index = state.languages.findIndex((lang) => lang.id === id);
      if (index !== -1) {
        state.languages[index] = { ...state.languages[index], ...updates };
      }
    },
    removeLanguage: (state, action) => {
      state.languages = state.languages.filter((lang) => lang.id !== action.payload);
    },
    updateSocialLinks: (state, action) => {
      state.socialLinks = { ...state.socialLinks, ...action.payload };
    },
    reorderSection: (state, action) => {
      const { section, fromIndex, toIndex } = action.payload;
      if (state[section] && Array.isArray(state[section])) {
        const items = [...state[section]];
        const [moved] = items.splice(fromIndex, 1);
        items.splice(toIndex, 0, moved);
        state[section] = items;
      }
    },
    loadResume: (state, action) => {
      return { ...initialState, ...action.payload };
    },
    resetResume: () => initialState,
  },
});

export const {
  updatePersonalInfo,
  addEducation,
  updateEducation,
  removeEducation,
  addExperience,
  updateExperience,
  removeExperience,
  addProject,
  updateProject,
  removeProject,
  addSkill,
  updateSkill,
  removeSkill,
  addCertification,
  updateCertification,
  removeCertification,
  addLanguage,
  updateLanguage,
  removeLanguage,
  updateSocialLinks,
  reorderSection,
  loadResume,
  resetResume,
} = resumeSlice.actions;

export default resumeSlice.reducer;

