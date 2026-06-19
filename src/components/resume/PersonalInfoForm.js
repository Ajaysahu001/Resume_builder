'use client';

import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePersonalInfo } from '@/redux/slices/resumeSlice';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import FormSection from '../forms/FormSection';
import styles from '../../styles/components/_common-form.module.scss';

const PersonalInfoForm = () => {
  const dispatch = useDispatch();
  const personalInfo = useSelector((state) => state.resume.personalInfo);

  const handleChange = (field, value) => {
    dispatch(updatePersonalInfo({ [field]: value }));
  };

  return (
    <FormSection title="Personal Information" subtitle="Your basic contact details">
      <div className={styles.stack}>
        <Input
          label="Full Name"
          value={personalInfo.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          placeholder="John Doe"
          required
        />
        <div className={styles.grid2}>
          <Input
            label="Email"
            type="email"
            value={personalInfo.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="john@example.com"
            required
          />
          <Input
            label="Phone"
            type="tel"
            value={personalInfo.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="+1 (555) 123-4567"
          />
        </div>
        <Input
          label="Location"
          value={personalInfo.location}
          onChange={(e) => handleChange('location', e.target.value)}
          placeholder="City, Country"
        />
        <Textarea
          label="Professional Summary"
          value={personalInfo.summary}
          onChange={(e) => handleChange('summary', e.target.value)}
          placeholder="Brief summary of your professional background and key strengths..."
          rows={4}
        />
      </div>
    </FormSection>
  );
};

export default memo(PersonalInfoForm);
