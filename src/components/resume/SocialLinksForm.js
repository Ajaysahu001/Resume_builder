'use client';

import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSocialLinks } from '@/redux/slices/resumeSlice';
import Input from '../ui/Input';
import FormSection from '../forms/FormSection';

const SocialLinksForm = () => {
  const dispatch = useDispatch();
  const socialLinks = useSelector((state) => state.resume.socialLinks);

  const handleChange = (field, value) => {
    dispatch(updateSocialLinks({ [field]: value }));
  };

  return (
    <FormSection title="Social Links" subtitle="Your online presence">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input
          label="LinkedIn"
          type="url"
          value={socialLinks.linkedin}
          onChange={(e) => handleChange('linkedin', e.target.value)}
          placeholder="https://linkedin.com/in/yourname"
        />
        <Input
          label="GitHub"
          type="url"
          value={socialLinks.github}
          onChange={(e) => handleChange('github', e.target.value)}
          placeholder="https://github.com/yourname"
        />
        <Input
          label="Portfolio / Website"
          type="url"
          value={socialLinks.portfolio}
          onChange={(e) => handleChange('portfolio', e.target.value)}
          placeholder="https://yourportfolio.com"
        />
        <Input
          label="Twitter / X"
          type="url"
          value={socialLinks.twitter}
          onChange={(e) => handleChange('twitter', e.target.value)}
          placeholder="https://twitter.com/yourhandle"
        />
      </div>
    </FormSection>
  );
};

export default memo(SocialLinksForm);
