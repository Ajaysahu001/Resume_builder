'use client';

import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addLanguage,
  updateLanguage,
  removeLanguage,
} from '@/redux/slices/resumeSlice';
import Input from '../ui/Input';
import Select from '../ui/Select';
import FormSection from '../forms/FormSection';
import DynamicList from '../forms/DynamicList';
import { LANGUAGE_PROFICIENCY } from '@/constants/templates';

const LanguagesForm = () => {
  const dispatch = useDispatch();
  const languages = useSelector((state) => state.resume.languages);

  const handleAdd = () => dispatch(addLanguage());
  const handleUpdate = (id, field, value) => dispatch(updateLanguage({ id, [field]: value }));
  const handleRemove = (id) => dispatch(removeLanguage(id));

  const renderItem = (item) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      <Input
        label="Language"
        value={item.name}
        onChange={(e) => handleUpdate(item.id, 'name', e.target.value)}
        placeholder="English, Spanish, Mandarin..."
        required
      />
      <Select
        label="Proficiency"
        value={item.proficiency}
        onChange={(e) => handleUpdate(item.id, 'proficiency', e.target.value)}
        options={LANGUAGE_PROFICIENCY}
      />
    </div>
  );

  return (
    <FormSection title="Languages" subtitle="Languages you speak">
      <DynamicList
        items={languages}
        onAdd={handleAdd}
        onRemove={handleRemove}
        renderItem={renderItem}
        addButtonText="Add Language"
        emptyMessage="No languages added yet."
      />
    </FormSection>
  );
};

export default memo(LanguagesForm);
