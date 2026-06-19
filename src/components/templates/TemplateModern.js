'use client';

import { memo } from 'react';
import { formatDate } from '@/utils/helpers';
import styles from '../../styles/templates/_modern.module.scss';

const TemplateModern = ({ resumeData }) => {
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
      {/* Header */}
      <header className={styles.resume__header}>
        <div className={styles.resume__headerContent}>
          <h1 className={styles.resume__name}>{personalInfo?.fullName || 'Your Name'}</h1>
          <div className={styles.resume__contact}>
            {personalInfo?.email && (
              <span>{personalInfo.email}</span>
            )}
            {personalInfo?.phone && (
              <span>{personalInfo.phone}</span>
            )}
            {personalInfo?.location && (
              <span>{personalInfo.location}</span>
            )}
          </div>
          {(socialLinks?.linkedin || socialLinks?.github || socialLinks?.portfolio) && (
            <div className={styles.resume__social}>
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              )}
              {socialLinks.github && (
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {socialLinks.portfolio && (
                <a href={socialLinks.portfolio} target="_blank" rel="noopener noreferrer">
                  Portfolio
                </a>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Summary */}
      {personalInfo?.summary && (
        <section className={styles.resume__section}>
          <h2 className={styles.resume__sectionTitle}>Summary</h2>
          <p className={styles.resume__summary}>{personalInfo.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && (
        <section className={styles.resume__section}>
          <h2 className={styles.resume__sectionTitle}>Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className={styles.resume__item}>
              <div className={styles.resume__itemHeader}>
                <div>
                  <h3 className={styles.resume__itemTitle}>{exp.position}</h3>
                  <p className={styles.resume__itemSubtitle}>
                    {exp.company} {exp.location && `• ${exp.location}`}
                  </p>
                </div>
                <div className={styles.resume__itemDates}>
                  {exp.startDate && formatDate(exp.startDate)} -{' '}
                  {exp.current ? 'Present' : exp.endDate ? formatDate(exp.endDate) : ''}
                </div>
              </div>
              {exp.description && (
                <p className={styles.resume__itemDescription}>{exp.description}</p>
              )}
              {exp.achievements && exp.achievements.length > 0 && (
                <ul className={styles.resume__achievements}>
                  {exp.achievements.filter(Boolean).map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <section className={styles.resume__section}>
          <h2 className={styles.resume__sectionTitle}>Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className={styles.resume__item}>
              <div className={styles.resume__itemHeader}>
                <div>
                  <h3 className={styles.resume__itemTitle}>
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className={styles.resume__itemSubtitle}>{edu.institution}</p>
                </div>
                <div className={styles.resume__itemDates}>
                  {edu.startDate && formatDate(edu.startDate)} -{' '}
                  {edu.endDate ? formatDate(edu.endDate) : 'Present'}
                </div>
              </div>
              {edu.gpa && (
                <p className={styles.resume__itemDescription}>GPA: {edu.gpa}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <section className={styles.resume__section}>
          <h2 className={styles.resume__sectionTitle}>Skills</h2>
          <div className={styles.resume__skills}>
            {skills.map((skill) => (
              <span key={skill.id} className={styles.resume__skill}>
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <section className={styles.resume__section}>
          <h2 className={styles.resume__sectionTitle}>Projects</h2>
          {projects.map((project) => (
            <div key={project.id} className={styles.resume__item}>
              <div className={styles.resume__itemHeader}>
                <h3 className={styles.resume__itemTitle}>{project.name}</h3>
                {(project.url || project.github) && (
                  <div className={styles.resume__itemLinks}>
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
              {project.description && (
                <p className={styles.resume__itemDescription}>{project.description}</p>
              )}
              {project.technologies && project.technologies.length > 0 && (
                <p className={styles.resume__itemTech}>
                  <strong>Technologies:</strong>{' '}
                  {Array.isArray(project.technologies)
                    ? project.technologies.join(', ')
                    : project.technologies}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {certifications && certifications.length > 0 && (
        <section className={styles.resume__section}>
          <h2 className={styles.resume__sectionTitle}>Certifications</h2>
          {certifications.map((cert) => (
            <div key={cert.id} className={styles.resume__item}>
              <div className={styles.resume__itemHeader}>
                <h3 className={styles.resume__itemTitle}>{cert.name}</h3>
                <div className={styles.resume__itemDates}>
                  {cert.date && formatDate(cert.date)}
                </div>
              </div>
              {cert.issuer && (
                <p className={styles.resume__itemSubtitle}>{cert.issuer}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Languages */}
      {languages && languages.length > 0 && (
        <section className={styles.resume__section}>
          <h2 className={styles.resume__sectionTitle}>Languages</h2>
          <div className={styles.resume__languages}>
            {languages.map((lang) => (
              <div key={lang.id} className={styles.resume__language}>
                <strong>{lang.name}</strong> - {lang.proficiency}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default memo(TemplateModern);

