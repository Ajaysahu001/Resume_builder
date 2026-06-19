'use client';

import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addExperience,
  updateExperience,
  removeExperience,
} from '@/redux/slices/resumeSlice';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import FormSection from '../forms/FormSection';
import DynamicList from '../forms/DynamicList';
import styles from '../../styles/components/_experience-form.module.scss';

const ExperienceForm = () => {
  const dispatch = useDispatch();
  const experience = useSelector((state) => state.resume.experience);

  const handleAdd = () => dispatch(addExperience());
  const handleUpdate = (id, field, value) => dispatch(updateExperience({ id, [field]: value }));
  const handleRemove = (id) => dispatch(removeExperience(id));

  const handleAddAchievement = (id, achievements) => {
    handleUpdate(id, 'achievements', [...(achievements || []), '']);
  };

  const handleUpdateAchievement = (id, achievements, index, value) => {
    const updated = [...(achievements || [])];
    updated[index] = value;
    handleUpdate(id, 'achievements', updated);
  };

  const handleRemoveAchievement = (id, achievements, index) => {
    handleUpdate(id, 'achievements', (achievements || []).filter((_, i) => i !== index));
  };

  const renderItem = (item) => (
    <>
      <Input
        label="Position"
        value={item.position}
        onChange={(e) => handleUpdate(item.id, 'position', e.target.value)}
        placeholder="Software Engineer"
        required
      />
      <Input
        label="Company"
        value={item.company}
        onChange={(e) => handleUpdate(item.id, 'company', e.target.value)}
        placeholder="Tech Company Inc."
        required
      />
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
          disabled={item.current}
        />
      </div>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={item.current}
          onChange={(e) => handleUpdate(item.id, 'current', e.target.checked)}
        />
        <span>Currently working here</span>
      </label>
      <Input
        label="Location"
        value={item.location}
        onChange={(e) => handleUpdate(item.id, 'location', e.target.value)}
        placeholder="City, Country"
      />
      <Textarea
        label="Description"
        value={item.description}
        onChange={(e) => handleUpdate(item.id, 'description', e.target.value)}
        placeholder="Brief overview of your role..."
        rows={3}
      />
      <div className={styles.achievements}>
        <div className={styles.achievements__header}>
          <label className={styles.achievements__label}>Key Achievements</label>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => handleAddAchievement(item.id, item.achievements)}
          >
            + Add
          </Button>
        </div>
        {(item.achievements || []).length === 0 && (
          <p className={styles.achievements__hint}>
            Add bullet-point achievements — recommended for ATS
          </p>
        )}
        {(item.achievements || []).map((achievement, index) => (
          <div key={index} className={styles.achievements__row}>
            <span className={styles.achievements__bullet}>•</span>
            <input
              type="text"
              value={achievement}
              onChange={(e) =>
                handleUpdateAchievement(item.id, item.achievements, index, e.target.value)
              }
              placeholder="Reduced load time by 40% through code optimization"
              className={styles.achievements__input}
            />
            <button
              type="button"
              className={styles.achievements__remove}
              onClick={() => handleRemoveAchievement(item.id, item.achievements, index)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <FormSection
      title="Work Experience"
      subtitle="Your professional experience"
      actions={
        <Button variant="secondary" size="sm" onClick={handleAdd}>
          + Add
        </Button>
      }
    >
      <DynamicList
        items={experience}
        onAdd={handleAdd}
        onRemove={handleRemove}
        renderItem={renderItem}
        addButtonText="Add Experience"
        emptyMessage="No work experience added yet."
      />
    </FormSection>
  );
};

export default memo(ExperienceForm);
