'use client';

import { memo } from 'react';
import { formatDate } from '@/utils/helpers';
import styles from '../../styles/templates/_executive.module.scss';

const TemplateExecutive = ({ resumeData }) => {
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
      <aside className={styles.resume__sidebar}>
        <div>
          <h1 className={styles.resume__sidebarName}>{personalInfo?.fullName || 'Your Name'}</h1>
          {personalInfo?.summary && (
            <p className={styles.resume__sidebarTitle}>
              {personalInfo.summary.split('.')[0]}
            </p>
          )}
        </div>

        <div className={styles.resume__sidebarSection}>
          <h2 className={styles.resume__sidebarSectionTitle}>Contact</h2>
          {personalInfo?.email && (
            <span className={styles.resume__sidebarItem}>{personalInfo.email}</span>
          )}
          {personalInfo?.phone && (
            <span className={styles.resume__sidebarItem}>{personalInfo.phone}</span>
          )}
          {personalInfo?.location && (
            <span className={styles.resume__sidebarItem}>{personalInfo.location}</span>
          )}
          {socialLinks?.linkedin && (
            <span className={styles.resume__sidebarItem}>
              {socialLinks.linkedin.replace(/^https?:\/\/(www\.)?/, '')}
            </span>
          )}
          {socialLinks?.github && (
            <span className={styles.resume__sidebarItem}>
              {socialLinks.github.replace(/^https?:\/\/(www\.)?/, '')}
            </span>
          )}
          {socialLinks?.portfolio && (
            <span className={styles.resume__sidebarItem}>
              {socialLinks.portfolio.replace(/^https?:\/\/(www\.)?/, '')}
            </span>
          )}
        </div>

        {skills && skills.length > 0 && (
          <div className={styles.resume__sidebarSection}>
            <h2 className={styles.resume__sidebarSectionTitle}>Skills</h2>
            <div className={styles.resume__sidebarSkills}>
              {skills.map((skill) => (
                <span key={skill.id} className={styles.resume__sidebarSkill}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {languages && languages.length > 0 && (
          <div className={styles.resume__sidebarSection}>
            <h2 className={styles.resume__sidebarSectionTitle}>Languages</h2>
            <div className={styles.resume__sidebarLangs}>
              {languages.map((lang) => (
                <div key={lang.id} className={styles.resume__sidebarLang}>
                  {lang.name}
                  <span className={styles.resume__sidebarProficiency}> — {lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {certifications && certifications.length > 0 && (
          <div className={styles.resume__sidebarSection}>
            <h2 className={styles.resume__sidebarSectionTitle}>Certifications</h2>
            {certifications.map((cert) => (
              <div key={cert.id}>
                <span className={styles.resume__sidebarItem}>{cert.name}</span>
                {cert.issuer && (
                  <span className={styles.resume__sidebarProficiency}> · {cert.issuer}</span>
                )}
              </div>
            ))}
          </div>
        )}
      </aside>

      <main className={styles.resume__main}>
        {personalInfo?.summary && (
          <section className={styles.resume__section}>
            <h2 className={styles.resume__sectionTitle}>Summary</h2>
            <p className={styles.resume__summary}>{personalInfo.summary}</p>
          </section>
        )}

        {experience && experience.length > 0 && (
          <section className={styles.resume__section}>
            <h2 className={styles.resume__sectionTitle}>Experience</h2>
            {experience.map((exp) => (
              <div key={exp.id} className={styles.resume__item}>
                <div className={styles.resume__itemHeader}>
                  <div>
                    <h3 className={styles.resume__itemTitle}>{exp.position}</h3>
                    <p className={styles.resume__itemSubtitle}>
                      {exp.company}{exp.location && ` · ${exp.location}`}
                    </p>
                  </div>
                  <span className={styles.resume__itemDates}>
                    {exp.startDate && formatDate(exp.startDate)} –{' '}
                    {exp.current ? 'Present' : exp.endDate ? formatDate(exp.endDate) : ''}
                  </span>
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

        {projects && projects.length > 0 && (
          <section className={styles.resume__section}>
            <h2 className={styles.resume__sectionTitle}>Projects</h2>
            {projects.map((project) => (
              <div key={project.id} className={styles.resume__item}>
                <div className={styles.resume__itemHeader}>
                  <div>
                    <h3 className={styles.resume__itemTitle}>{project.name}</h3>
                    {project.technologies && project.technologies.length > 0 && (
                      <p className={styles.resume__itemSubtitle}>
                        {Array.isArray(project.technologies)
                          ? project.technologies.join(' · ')
                          : project.technologies}
                      </p>
                    )}
                  </div>
                </div>
                {project.description && (
                  <p className={styles.resume__itemDescription}>{project.description}</p>
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
                <div className={styles.resume__itemHeader}>
                  <div>
                    <h3 className={styles.resume__itemTitle}>
                      {edu.degree}{edu.field && ` in ${edu.field}`}
                    </h3>
                    <p className={styles.resume__itemSubtitle}>{edu.institution}</p>
                  </div>
                  <span className={styles.resume__itemDates}>
                    {edu.startDate && formatDate(edu.startDate)} –{' '}
                    {edu.endDate ? formatDate(edu.endDate) : 'Present'}
                    {edu.gpa && ` · GPA ${edu.gpa}`}
                  </span>
                </div>
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
};

export default memo(TemplateExecutive);
