export function computeAtsScore(resumeData) {
  const checks = [];

  const { personalInfo, experience, education, skills, projects, certifications, socialLinks } = resumeData || {};

  checks.push({
    label: 'Full name',
    pass: !!personalInfo?.fullName?.trim(),
    weight: 10,
  });
  checks.push({
    label: 'Email address',
    pass: !!personalInfo?.email?.trim(),
    weight: 10,
  });
  checks.push({
    label: 'Phone number',
    pass: !!personalInfo?.phone?.trim(),
    weight: 5,
  });
  checks.push({
    label: 'Location',
    pass: !!personalInfo?.location?.trim(),
    weight: 5,
  });
  checks.push({
    label: 'Professional summary',
    pass: (personalInfo?.summary?.trim() || '').length >= 50,
    weight: 10,
    hint: 'Add at least 50 characters',
  });
  checks.push({
    label: 'LinkedIn profile',
    pass: !!socialLinks?.linkedin?.trim(),
    weight: 5,
  });
  checks.push({
    label: 'Work experience',
    pass: (experience || []).length > 0,
    weight: 15,
  });
  checks.push({
    label: 'Achievement bullets in experience',
    pass: (experience || []).some((e) => (e.achievements || []).filter(Boolean).length > 0),
    weight: 10,
    hint: 'Add bullet-point achievements to your experience',
  });
  checks.push({
    label: 'Education',
    pass: (education || []).length > 0,
    weight: 10,
  });
  checks.push({
    label: 'At least 5 skills',
    pass: (skills || []).length >= 5,
    weight: 10,
    hint: `${(skills || []).length}/5 added`,
  });
  checks.push({
    label: 'Projects',
    pass: (projects || []).length > 0,
    weight: 5,
  });
  checks.push({
    label: 'Certifications',
    pass: (certifications || []).length > 0,
    weight: 5,
  });

  const total = checks.reduce((s, c) => s + c.weight, 0);
  const earned = checks.filter((c) => c.pass).reduce((s, c) => s + c.weight, 0);
  const score = Math.round((earned / total) * 100);

  return { score, checks };
}
