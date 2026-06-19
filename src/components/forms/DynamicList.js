'use client';

import { memo } from 'react';
import Button from '../ui/Button';
import styles from '../../styles/components/_dynamic-list.module.scss';

const DynamicList = ({
  items = [],
  onAdd,
  onRemove,
  renderItem,
  addButtonText = 'Add Item',
  emptyMessage = 'No items yet.',
  className = '',
}) => {
  return (
    <div className={`${styles.list} ${className}`}>
      {items.length === 0 ? (
        <div className={styles.list__empty}>
          <p>{emptyMessage}</p>
          <Button variant="secondary" size="sm" onClick={onAdd}>
            + {addButtonText}
          </Button>
        </div>
      ) : (
        <>
          <div className={styles.list__items}>
            {items.map((item, index) => (
              <div key={item.id || index} className={styles.list__item}>
                <div className={styles.list__itemHeader}>
                  <span className={styles.list__itemIndex}>#{index + 1}</span>
                  <button
                    type="button"
                    className={styles.list__removeBtn}
                    onClick={() => onRemove(item.id)}
                    title="Remove"
                  >
                    ✕
                  </button>
                </div>
                <div className={styles.list__itemBody}>
                  {renderItem(item, index)}
                </div>
              </div>
            ))}
          </div>
          <Button variant="secondary" size="sm" onClick={onAdd} className={styles.list__addBtn}>
            + {addButtonText}
          </Button>
        </>
      )}
    </div>
  );
};

export default memo(DynamicList);
