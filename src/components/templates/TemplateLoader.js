'use client';

import { memo, Suspense } from 'react';
import dynamic from 'next/dynamic';

const TemplateLoader = ({ templateId, resumeData }) => {
  let TemplateComponent = null;

  switch (templateId) {
    case 'modern':
      TemplateComponent = dynamic(
        () => import('./TemplateModern'),
        { ssr: false }
      );
      break;
    case 'classic':
      TemplateComponent = dynamic(
        () => import('./TemplateClassic'),
        { ssr: false }
      );
      break;
    case 'minimal':
      TemplateComponent = dynamic(
        () => import('./TemplateMinimal'),
        { ssr: false }
      );
      break;
    case 'professional':
      TemplateComponent = dynamic(
        () => import('./TemplateProfessional'),
        { ssr: false }
      );
      break;
    case 'executive':
      TemplateComponent = dynamic(
        () => import('./TemplateExecutive'),
        { ssr: false }
      );
      break;
    default:
      TemplateComponent = dynamic(
        () => import('./TemplateModern'),
        { ssr: false }
      );
  }

  return (
    <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading template...</div>}>
      <TemplateComponent resumeData={resumeData} />
    </Suspense>
  );
};

export default memo(TemplateLoader);

