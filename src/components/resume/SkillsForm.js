'use client';

import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addSkill,
  updateSkill,
  removeSkill,
} from '@/redux/slices/resumeSlice';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import FormSection from '../forms/FormSection';
import DynamicList from '../forms/DynamicList';
import { SKILL_CATEGORIES, SKILL_LEVELS } from '@/constants/templates';
import styles from '../../styles/components/_common-form.module.scss';

const SkillsForm = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.resume.skills);

  const handleAdd = () => dispatch(addSkill());
  const handleUpdate = (id, field, value) => dispatch(updateSkill({ id, [field]: value }));
  const handleRemove = (id) => dispatch(removeSkill(id));

  const renderItem = (item) => (
    <>
      <Input
        label="Skill Name"
        value={item.name}
        onChange={(e) => handleUpdate(item.id, 'name', e.target.value)}
        placeholder="JavaScript, React, Leadership..."
        required
      />
      <div className={styles.grid2}>
        <Select
          label="Category"
          value={item.category}
          onChange={(e) => handleUpdate(item.id, 'category', e.target.value)}
          options={SKILL_CATEGORIES}
        />
        <Select
          label="Level"
          value={item.level}
          onChange={(e) => handleUpdate(item.id, 'level', e.target.value)}
          options={SKILL_LEVELS}
        />
      </div>
    </>
  );

  return (
    <FormSection
      title="Skills"
      subtitle="Technical and soft skills"
      actions={
        <Button variant="secondary" size="sm" onClick={handleAdd}>
          + Add
        </Button>
      }
    >
      <DynamicList
        items={skills}
        onAdd={handleAdd}
        onRemove={handleRemove}
        renderItem={renderItem}
        addButtonText="Add Skill"
        emptyMessage="No skills added yet."
      />
    </FormSection>
  );
};

export default memo(SkillsForm);
