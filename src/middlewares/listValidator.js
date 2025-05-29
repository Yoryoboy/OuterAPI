/**
 * Middleware to validate that a task belongs to a specific list
 * @param {string} targetListId - The list ID that should be allowed to proceed
 * @returns {Function} Middleware function
 */
export const validateList = (targetListId) => {
  return (req, res, next) => {
 
    if (!req.listId) {
      console.log('List ID not found in request');
      return res.status(400).json({ error: 'List ID not found in request' });
    }

    if (req.listId !== targetListId) {
      return res.status(200).json({ 
        success: true, 
        message: 'Task skipped - not from target list',
        data: {
          listId: req.listId,
          targetListId: targetListId
        }
      });
    }

    next();
  };
};
