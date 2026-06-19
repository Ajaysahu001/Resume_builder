'use client';

import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addEducation,
  updateEducation,
  removeEducation,
} from '@/redux/slices/resumeSlice';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import FormSection from '../forms/FormSection';
import DynamicList from '../forms/DynamicList';
import styles from '../../styles/components/_common-form.module.scss';

const EducationForm = () => {
  const dispatch = useDispatch();
  const education = useSelector((state) => state.resume.education);

  const handleAdd = () => dispatch(addEducation());
  const handleUpdate = (id, field, value) => dispatch(updateEducation({ id, [field]: value }));
  const handleRemove = (id) => dispatch(removeEducation(id));

  const renderItem = (item) => (
    <>
      <Input
        label="Institution"
        value={item.institution}
        onChange={(e) => handleUpdate(item.id, 'institution', e.target.value)}
        placeholder="University Name"
        required
      />
      <div className={styles.grid2}>
        <Input
          label="Degree"
          value={item.degree}
          onChange={(e) => handleUpdate(item.id, 'degree', e.target.value)}
          placeholder="Bachelor of Science"
          required
        />
        <Input
          label="Field of Study"
          value={item.field}
          onChange={(e) => handleUpdate(item.id, 'field', e.target.value)}
          placeholder="Computer Science"
        />
      </div>
      <div className={styles.grid2}>
        <Input
          label="Start Date"
          type="month"
          value={item.startDate}
          onChange={(e) => handleUpdate(item.id, 'startDate', e.target.value)}
        />
        <Input
          label="End Date"
          type="month"
          value={item.endDate}
          onChange={(e) => handleUpdate(item.id, 'endDate', e.target.value)}
        />
      </div>
      <Input
        label="GPA (Optional)"
        value={item.gpa}
        onChange={(e) => handleUpdate(item.id, 'gpa', e.target.value)}
        placeholder="3.8 / 4.0"
      />
      <Textarea
        label="Description"
        value={item.description}
        onChange={(e) => handleUpdate(item.id, 'description', e.target.value)}
        placeholder="Relevant coursework, honours, achievements..."
        rows={2}
      />
    </>
  );

  return (
    <FormSection
      title="Education"
      subtitle="Your academic background"
      actions={
        <Button variant="secondary" size="sm" onClick={handleAdd}>
          + Add
        </Button>
      }
    >
      <DynamicList
        items={education}
        onAdd={handleAdd}
        onRemove={handleRemove}
        renderItem={renderItem}
        addButtonText="Add Education"
        emptyMessage="No education entries yet."
      />
    </FormSection>
  );
};

export default memo(EducationForm);
