import { addToHistory } from '../slices/historySlice';

/**
 * Middleware to track resume state changes for undo/redo
 * Excludes undo/redo actions and loadResume to prevent infinite loops
 */
export const historyMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  
  // Track resume slice actions, but exclude undo/redo and loadResume
  if (
    action.type?.startsWith('resume/') &&
    !action.type.includes('loadResume') &&
    !action.type.includes('resetResume')
  ) {
    const currentState = store.getState().resume;
    // Deep clone to avoid reference issues
    const stateCopy = JSON.parse(JSON.stringify(currentState));
    store.dispatch(addToHistory(stateCopy));
  }
  
  return result;
};
