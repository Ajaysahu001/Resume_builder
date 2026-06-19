'use client';

import { memo } from 'react';
import { formatDate } from '@/utils/helpers';
import styles from '../../styles/templates/_classic.module.scss';

const TemplateClassic = ({ resumeData }) => {
  const {
    personalInfo,
    experience,
    education,
    skills,
    projects,
    certifications,
    languages,
    socialLinks,
  } = resumeData || {};

  return (
    <div className={styles.resume} id="resume-preview">
      <header className={styles.resume__header}>
        <h1 className={styles.resume__name}>{personalInfo?.fullName || 'Your Name'}</h1>
        <div className={styles.resume__contact}>
          {personalInfo?.email && <span>{personalInfo.email}</span>}
          {personalInfo?.phone && <span>| {personalInfo.phone}</span>}
          {personalInfo?.location && <span>| {personalInfo.location}</span>}
        </div>
      </header>

      {personalInfo?.summary && (
        <section className={styles.resume__section}>
          <h2 className={styles.resume__sectionTitle}>Professional Summary</h2>
          <p>{personalInfo.summary}</p>
        </section>
      )}

      {experience && experience.length > 0 && (
        <section className={styles.resume__section}>
          <h2 className={styles.resume__sectionTitle}>Professional Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className={styles.resume__item}>
              <h3 className={styles.resume__itemTitle}>{exp.position}</h3>
              <div className={styles.resume__itemMeta}>
                <span>{exp.company}</span>
                {exp.location && <span>• {exp.location}</span>}
                <span>
                  {exp.startDate && formatDate(exp.startDate)} -{' '}
                  {exp.current ? 'Present' : exp.endDate ? formatDate(exp.endDate) : ''}
                </span>
              </div>
              {exp.description && <p>{exp.description}</p>}
              {exp.achievements && exp.achievements.length > 0 && (
                <ul style={{ paddingLeft: '1.25rem', marginTop: '0.25rem' }}>
                  {exp.achievements.filter(Boolean).map((a, i) => (
                    <li key={i} style={{ marginBottom: '0.2rem' }}>{a}</li>
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
              <h3 className={styles.resume__itemTitle}>
                {edu.degree} {edu.field && `in ${edu.field}`}
              </h3>
              <div className={styles.resume__itemMeta}>
                <span>{edu.institution}</span>
                <span>
                  {edu.startDate && formatDate(edu.startDate)} -{' '}
                  {edu.endDate ? formatDate(edu.endDate) : 'Present'}
                </span>
              </div>
              {edu.gpa && <p>GPA: {edu.gpa}</p>}
            </div>
          ))}
        </section>
      )}

      {skills && skills.length > 0 && (
        <section className={styles.resume__section}>
          <h2 className={styles.resume__sectionTitle}>Skills</h2>
          <ul className={styles.resume__list}>
            {skills.map((skill) => (
              <li key={skill.id}>{skill.name}</li>
            ))}
          </ul>
        </section>
      )}

      {projects && projects.length > 0 && (
        <section className={styles.resume__section}>
          <h2 className={styles.resume__sectionTitle}>Projects</h2>
          {projects.map((project) => (
            <div key={project.id} className={styles.resume__item}>
              <h3 className={styles.resume__itemTitle}>{project.name}</h3>
              {project.description && <p>{project.description}</p>}
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default memo(TemplateClassic);

