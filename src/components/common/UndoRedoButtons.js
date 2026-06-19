'use client';

import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { undo, redo } from '@/redux/slices/historySlice';
import { loadResume, resetResume } from '@/redux/slices/resumeSlice';
import Button from '../ui/Button';

const UndoRedoButtons = () => {
  const dispatch = useDispatch();
  const { past, future } = useSelector((state) => state.history);

  const canUndo = past.length > 0;
  const canRedo = future.length > 0;

  const handleUndo = () => {
    if (!canUndo) return;
    // past[last] is the state that was just saved (current state).
    // past[last-2] is the state before the last change.
    const stateToRestore = past.length >= 2 ? past[past.length - 2] : null;
    dispatch(undo());
    if (stateToRestore) {
      dispatch(loadResume(stateToRestore));
    } else {
      dispatch(resetResume());
    }
  };

  const handleRedo = () => {
    if (!canRedo) return;
    // future[0] is the next state to restore.
    const stateToRestore = future[0];
    dispatch(redo());
    dispatch(loadResume(stateToRestore));
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        handleUndo();
      }
      if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) {
        e.preventDefault();
        handleRedo();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [past, future]);

  return (
    <div style={{ display: 'flex', gap: '0.25rem' }}>
      <Button variant="secondary" size="sm" onClick={handleUndo} disabled={!canUndo} title="Undo (Ctrl+Z)">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7v6h6" />
          <path d="M3 13C5.5 6.5 13 4 19 8s4 12-2 15" />
        </svg>
      </Button>
      <Button variant="secondary" size="sm" onClick={handleRedo} disabled={!canRedo} title="Redo (Ctrl+Y)">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 7v6h-6" />
          <path d="M21 13C18.5 6.5 11 4 5 8S1 20 7 23" />
        </svg>
      </Button>
    </div>
  );
};

export default memo(UndoRedoButtons);
