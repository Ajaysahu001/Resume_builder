'use client';

import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProject,
  updateProject,
  removeProject,
} from '@/redux/slices/resumeSlice';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import FormSection from '../forms/FormSection';
import DynamicList from '../forms/DynamicList';
import styles from '../../styles/components/_common-form.module.scss';

const ProjectsForm = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.resume.projects);

  const handleAdd = () => dispatch(addProject());
  const handleUpdate = (id, field, value) => dispatch(updateProject({ id, [field]: value }));
  const handleRemove = (id) => dispatch(removeProject(id));

  const renderItem = (item) => (
    <>
      <Input
        label="Project Name"
        value={item.name}
        onChange={(e) => handleUpdate(item.id, 'name', e.target.value)}
        placeholder="E-commerce Platform"
        required
      />
      <Textarea
        label="Description"
        value={item.description}
        onChange={(e) => handleUpdate(item.id, 'description', e.target.value)}
        placeholder="What this project does, your role, and impact..."
        rows={3}
      />
      <Input
        label="Technologies (comma-separated)"
        value={Array.isArray(item.technologies) ? item.technologies.join(', ') : item.technologies}
        onChange={(e) =>
          handleUpdate(item.id, 'technologies', e.target.value.split(',').map((t) => t.trim()))
        }
        placeholder="React, Node.js, MongoDB"
      />
      <div className={styles.grid2}>
        <Input
          label="Live URL"
          type="url"
          value={item.url}
          onChange={(e) => handleUpdate(item.id, 'url', e.target.value)}
          placeholder="https://project.com"
        />
        <Input
          label="GitHub URL"
          type="url"
          value={item.github}
          onChange={(e) => handleUpdate(item.id, 'github', e.target.value)}
          placeholder="https://github.com/user/repo"
        />
      </div>
    </>
  );

  return (
    <FormSection
      title="Projects"
      subtitle="Notable personal or professional projects"
      actions={
        <Button variant="secondary" size="sm" onClick={handleAdd}>
          + Add
        </Button>
      }
    >
      <DynamicList
        items={projects}
        onAdd={handleAdd}
        onRemove={handleRemove}
        renderItem={renderItem}
        addButtonText="Add Project"
        emptyMessage="No projects added yet."
      />
    </FormSection>
  );
};

export default memo(ProjectsForm);
