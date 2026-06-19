'use client';

import { memo } from 'react';
import { formatDate } from '@/utils/helpers';
import styles from '../../styles/templates/_minimal.module.scss';

const TemplateMinimal = ({ resumeData }) => {
  const {
    personalInfo,
    experience,
    education,
    skills,
    projects,
  } = resumeData || {};

  return (
    <div className={styles.resume} id="resume-preview">
      <header className={styles.resume__header}>
        <h1 className={styles.resume__name}>{personalInfo?.fullName || 'Your Name'}</h1>
        <div className={styles.resume__contact}>
          {personalInfo?.email && <span>{personalInfo.email}</span>}
          {personalInfo?.phone && <span>{personalInfo.phone}</span>}
          {personalInfo?.location && <span>{personalInfo.location}</span>}
        </div>
      </header>

      {personalInfo?.summary && (
        <section className={styles.resume__section}>
          <p className={styles.resume__summary}>{personalInfo.summary}</p>
        </section>
      )}

      {experience && experience.length > 0 && (
        <section className={styles.resume__section}>
          <h2 className={styles.resume__sectionTitle}>Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className={styles.resume__item}>
              <div className={styles.resume__itemRow}>
                <h3 className={styles.resume__itemTitle}>{exp.position}</h3>
                <span className={styles.resume__itemDate}>
                  {exp.startDate && formatDate(exp.startDate)} -{' '}
                  {exp.current ? 'Present' : exp.endDate ? formatDate(exp.endDate) : ''}
                </span>
              </div>
              <p className={styles.resume__itemCompany}>{exp.company}</p>
              {exp.description && <p className={styles.resume__itemDescription}>{exp.description}</p>}
              {exp.achievements && exp.achievements.length > 0 && (
                <ul style={{ paddingLeft: '1.25rem', marginTop: '0.25rem', fontSize: '0.875rem' }}>
                  {exp.achievements.filter(Boolean).map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {education && education.length > 0 && (
        <section className={styles.resume__section}>
          <h2 className={styles.resume__sectionTitle}>Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className={styles.resume__item}>
              <div className={styles.resume__itemRow}>
                <h3 className={styles.resume__itemTitle}>
                  {edu.degree} {edu.field && `• ${edu.field}`}
                </h3>
                <span className={styles.resume__itemDate}>
                  {edu.startDate && formatDate(edu.startDate)} -{' '}
                  {edu.endDate ? formatDate(edu.endDate) : 'Present'}
                </span>
              </div>
              <p className={styles.resume__itemCompany}>{edu.institution}</p>
            </div>
          ))}
        </section>
      )}

      {skills && skills.length > 0 && (
        <section className={styles.resume__section}>
          <h2 className={styles.resume__sectionTitle}>Skills</h2>
          <p className={styles.resume__skills}>
            {skills.map((skill, index) => (
              <span key={skill.id}>
                {skill.name}
                {index < skills.length - 1 && ' • '}
              </span>
            ))}
          </p>
        </section>
      )}

      {projects && projects.length > 0 && (
        <section className={styles.resume__section}>
          <h2 className={styles.resume__sectionTitle}>Projects</h2>
          {projects.map((project) => (
            <div key={project.id} className={styles.resume__item}>
              <h3 className={styles.resume__itemTitle}>{project.name}</h3>
              {project.description && <p className={styles.resume__itemDescription}>{project.description}</p>}
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default memo(TemplateMinimal);

