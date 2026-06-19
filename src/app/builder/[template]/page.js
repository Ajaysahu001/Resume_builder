'use client';

import { useEffect, useRef, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'next/navigation';
import { setTemplate } from '@/redux/slices/uiSlice';
import { loadResumeFromStorage, saveResumeToStorage } from '@/utils/storage';
import BuilderHeader from '@/components/common/BuilderHeader';
import PersonalInfoForm from '@/components/resume/PersonalInfoForm';
import ExperienceForm from '@/components/resume/ExperienceForm';
import EducationForm from '@/components/resume/EducationForm';
import SkillsForm from '@/components/resume/SkillsForm';
import ProjectsForm from '@/components/resume/ProjectsForm';
import CertificationsForm from '@/components/resume/CertificationsForm';
import LanguagesForm from '@/components/resume/LanguagesForm';
import SocialLinksForm from '@/components/resume/SocialLinksForm';
import TemplateLoader from '@/components/templates/TemplateLoader';
import { loadResume, resetResume } from '@/redux/slices/resumeSlice';
import '../../../styles/layout/_builder.scss';

function BuilderContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const { selectedTemplate, previewMode } = useSelector((state) => state.ui);
  const resumeData = useSelector((state) => state.resume);
  const resumeId = searchParams.get('id') || 'current';
  const resumeIdRef = useRef(resumeId);
  resumeIdRef.current = resumeId;

  useEffect(() => {
    if (params.template) {
      dispatch(setTemplate(params.template));
    }
  }, [params.template, dispatch]);

  useEffect(() => {
    dispatch(resetResume());
    const savedResume = loadResumeFromStorage(resumeId);
    if (savedResume) {
      dispatch(loadResume(savedResume));
      if (savedResume.template) {
        dispatch(setTemplate(savedResume.template));
      }
    }
  }, [resumeId, dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const resumeName = resumeData.personalInfo?.fullName
        ? `${resumeData.personalInfo.fullName}'s Resume`
        : 'Untitled Resume';
      saveResumeToStorage(resumeData, resumeIdRef.current, resumeName, selectedTemplate);
    }, 1000);
    return () => clearTimeout(timer);
  }, [resumeData, selectedTemplate]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const stored = localStorage.getItem('theme') || 'light';
      document.documentElement.setAttribute('data-theme', stored);
    }
  }, []);

  const showForm = previewMode === 'split' || previewMode === 'form';
  const showPreview = previewMode === 'split' || previewMode === 'preview';

  return (
    <div className="builder">
      <div className="builder__main">
        <BuilderHeader resumeId={resumeId} />
        <div className="builder__content">
          {showForm && (
            <div className="builder__form-panel">
              <div className="builder__sections">
                <PersonalInfoForm />
                <SocialLinksForm />
                <ExperienceForm />
                <EducationForm />
                <SkillsForm />
                <ProjectsForm />
                <CertificationsForm />
                <LanguagesForm />
              </div>
            </div>
          )}
          {showPreview && (
            <div className="builder__preview-panel">
              <div className="builder__preview-container">
                <TemplateLoader templateId={selectedTemplate} resumeData={resumeData} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BuilderPage() {
  return (
    <Suspense fallback={
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', color: 'var(--text-secondary-color)' }}>
        Loading builder...
      </div>
    }>
      <BuilderContent />
    </Suspense>
  );
}
