'use client';

import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCertification,
  updateCertification,
  removeCertification,
} from '@/redux/slices/resumeSlice';
import Input from '../ui/Input';
import FormSection from '../forms/FormSection';
import DynamicList from '../forms/DynamicList';

const CertificationsForm = () => {
  const dispatch = useDispatch();
  const certifications = useSelector((state) => state.resume.certifications);

  const handleAdd = () => dispatch(addCertification());
  const handleUpdate = (id, field, value) => dispatch(updateCertification({ id, [field]: value }));
  const handleRemove = (id) => dispatch(removeCertification(id));

  const renderItem = (item) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      <Input
        label="Certification Name"
        value={item.name}
        onChange={(e) => handleUpdate(item.id, 'name', e.target.value)}
        placeholder="AWS Certified Solutions Architect"
        required
      />
      <Input
        label="Issuing Organization"
        value={item.issuer}
        onChange={(e) => handleUpdate(item.id, 'issuer', e.target.value)}
        placeholder="Amazon Web Services"
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <Input
          label="Issue Date"
          type="month"
          value={item.date}
          onChange={(e) => handleUpdate(item.id, 'date', e.target.value)}
        />
        <Input
          label="Expiry Date"
          type="month"
          value={item.expiryDate}
          onChange={(e) => handleUpdate(item.id, 'expiryDate', e.target.value)}
        />
      </div>
      <Input
        label="Credential ID"
        value={item.credentialId}
        onChange={(e) => handleUpdate(item.id, 'credentialId', e.target.value)}
        placeholder="ABC-12345"
      />
      <Input
        label="Credential URL"
        type="url"
        value={item.url}
        onChange={(e) => handleUpdate(item.id, 'url', e.target.value)}
        placeholder="https://www.credly.com/badges/..."
      />
    </div>
  );

  return (
    <FormSection title="Certifications" subtitle="Your professional certifications">
      <DynamicList
        items={certifications}
        onAdd={handleAdd}
        onRemove={handleRemove}
        renderItem={renderItem}
        addButtonText="Add Certification"
        emptyMessage="No certifications added yet."
      />
    </FormSection>
  );
};

export default memo(CertificationsForm);
