'use client';

import { memo } from 'react';
import { formatDate } from '@/utils/helpers';
import styles from '../../styles/templates/_professional.module.scss';

const TemplateProfessional = ({ resumeData }) => {
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

  // Group skills by category for better organization
  const groupedSkills = skills?.reduce((acc, skill) => {
    const category = skill.category || 'other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {}) || {};

  return (
    <div className={styles.resume} id="resume-preview">
      {/* Header Section */}
      <header className={styles.resume__header}>
        <div className={styles.resume__headerContent}>
          <h1 className={styles.resume__name}>
            {personalInfo?.fullName || 'Your Full Name'}
          </h1>
          {personalInfo?.summary && (
            <p className={styles.resume__jobTitle}>
              {personalInfo.summary.split('.')[0] || 'Professional Title'}
            </p>
          )}
          <div className={styles.resume__contact}>
            {personalInfo?.email && (
              <span className={styles.resume__contactItem}>
                {personalInfo.email}
              </span>
            )}
            {personalInfo?.phone && (
              <span className={styles.resume__contactItem}>
                {personalInfo.phone}
              </span>
            )}
            {personalInfo?.location && (
              <span className={styles.resume__contactItem}>
                {personalInfo.location}
              </span>
            )}
            {socialLinks?.linkedin && (
              <span className={styles.resume__contactItem}>
                LinkedIn: {socialLinks.linkedin.replace(/^https?:\/\//, '').replace(/^www\./, '')}
              </span>
            )}
            {socialLinks?.github && (
              <span className={styles.resume__contactItem}>
                GitHub: {socialLinks.github.replace(/^https?:\/\//, '').replace(/^www\./, '')}
              </span>
            )}
          </div>
        </div>
        <div className={styles.resume__divider}></div>
      </header>

      {/* Professional Summary */}
      {personalInfo?.summary && (
        <section className={styles.resume__section}>
          <h2 className={styles.resume__sectionTitle}>Professional Summary</h2>
          <p className={styles.resume__summary}>
            {personalInfo.summary}
          </p>
        </section>
      )}

      {/* Skills Section - ATS Optimized */}
      {skills && skills.length > 0 && (
        <section className={styles.resume__section}>
          <h2 className={styles.resume__sectionTitle}>Technical Skills</h2>
          <div className={styles.resume__skills}>
            {Object.keys(groupedSkills).length > 0 ? (
              Object.entries(groupedSkills).map(([category, categorySkills]) => (
                <div key={category} className={styles.resume__skillGroup}>
                  <span className={styles.resume__skillCategory}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}:
                  </span>
                  <span className={styles.resume__skillList}>
                    {categorySkills.map((skill, index) => (
                      <span key={skill.id}>
                        {skill.name}
                        {index < categorySkills.length - 1 && ' • '}
                      </span>
                    ))}
                  </span>
                </div>
              ))
            ) : (
              <div className={styles.resume__skillList}>
                {skills.map((skill, index) => (
                  <span key={skill.id}>
                    {skill.name}
                    {index < skills.length - 1 && ' • '}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {experience && experience.length > 0 && (
        <section className={styles.resume__section}>
          <h2 className={styles.resume__sectionTitle}>Professional Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className={styles.resume__item}>
              <div className={styles.resume__itemHeader}>
                <div className={styles.resume__itemTitleGroup}>
                  <h3 className={styles.resume__itemTitle}>{exp.position}</h3>
                  <span className={styles.resume__itemCompany}>
                    {exp.company}
                    {exp.location && ` • ${exp.location}`}
                  </span>
                </div>
                <div className={styles.resume__itemDates}>
                  {exp.startDate && formatDate(exp.startDate)} -{' '}
                  {exp.current ? 'Present' : exp.endDate ? formatDate(exp.endDate) : ''}
                </div>
              </div>
              {exp.description && (
                <div className={styles.resume__itemDescription}>
                  {exp.description.split('\n').map((line, index) => (
                    line.trim() && (
                      <p key={index} className={styles.resume__bulletPoint}>
                        {line.trim()}
                      </p>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <section className={styles.resume__section}>
          <h2 className={styles.resume__sectionTitle}>Projects</h2>
          {projects.map((project) => (
            <div key={project.id} className={styles.resume__item}>
              <div className={styles.resume__itemHeader}>
                <div className={styles.resume__itemTitleGroup}>
                  <h3 className={styles.resume__itemTitle}>{project.name}</h3>
                  {project.technologies && project.technologies.length > 0 && (
                    <span className={styles.resume__itemTech}>
                      {Array.isArray(project.technologies)
                        ? project.technologies.join(' • ')
                        : project.technologies}
                    </span>
                  )}
                </div>
                {(project.url || project.github) && (
                  <div className={styles.resume__itemLinks}>
                    {project.url && (
                      <span className={styles.resume__linkItem}>
                        {project.url.replace(/^https?:\/\//, '').replace(/^www\./, '')}
                      </span>
                    )}
                  </div>
                )}
              </div>
              {project.description && (
                <p className={styles.resume__itemDescription}>
                  {project.description}
                </p>
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
                <div className={styles.resume__itemTitleGroup}>
                  <h3 className={styles.resume__itemTitle}>
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <span className={styles.resume__itemCompany}>{edu.institution}</span>
                </div>
                <div className={styles.resume__itemDates}>
                  {edu.startDate && formatDate(edu.startDate)} -{' '}
                  {edu.endDate ? formatDate(edu.endDate) : 'Present'}
                  {edu.gpa && ` • GPA: ${edu.gpa}`}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {certifications && certifications.length > 0 && (
        <section className={styles.resume__section}>
          <h2 className={styles.resume__sectionTitle}>Certifications</h2>
          <div className={styles.resume__certifications}>
            {certifications.map((cert) => (
              <div key={cert.id} className={styles.resume__certItem}>
                <span className={styles.resume__certName}>{cert.name}</span>
                {cert.issuer && (
                  <span className={styles.resume__certIssuer}>
                    {cert.issuer}
                    {cert.date && ` • ${formatDate(cert.date)}`}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Languages */}
      {languages && languages.length > 0 && (
        <section className={styles.resume__section}>
          <h2 className={styles.resume__sectionTitle}>Languages</h2>
          <div className={styles.resume__languages}>
            {languages.map((lang, index) => (
              <span key={lang.id} className={styles.resume__language}>
                {lang.name} ({lang.proficiency})
                {index < languages.length - 1 && ' • '}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default memo(TemplateProfessional);

