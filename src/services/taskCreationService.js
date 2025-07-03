/**
 * Service for handling task creation operations
 */
import clickUp from "../config/clickUp.js";

/**
 * Process a newly created task based on its parent list
 * @param {string} taskId - The ID of the task
 * @param {string} parentListId - The ID of the parent list
 * @param {string[]} targetListIds - Array of list IDs to add the task to
 * @returns {Promise<Object>} - Results of the operations
 */
export const processNewTask = async (taskId, parentListId, targetListIds) => {
  const results = {
    addToListsResult: null,
    taskUpdateResult: null,
  };

  results.addToListsResult = await addTaskToLists(taskId, targetListIds);

  // try {
  //   if (parentListId === CCI_BAU_LIST.id) {
  //     results.taskUpdateResult = await updateCciBauTaskFields(taskId);
  //   }
  // } catch (error) {
  //   console.error(
  //     `Error in list-specific processing for list ${parentListId}:`,
  //     error
  //   );
  //   results.error = error;
  // }

  return results;
};

/**
 * Adds a task to multiple lists
 * @param {string} taskId - The ID of the task to add
 * @param {string[]} listIds - Array of list IDs to add the task to
 * @returns {Promise<Array>} - Results of the add operations
 */
export const addTaskToLists = async (taskId, listIds) => {
  const promises = listIds.map((listId) =>
    clickUp.lists.addTaskToList(listId, taskId)
  );

  const results = await Promise.allSettled(promises);

  return results.map((result, index) => ({
    ...result,
    listId: listIds[index],
  }));
};

// /**
//  * Updates task fields for CCI BAU tasks
//  * @param {string} taskId - The ID of the task to update
//  * @returns {Promise<Object>} - Result of the update operation
//  */
// export const updateCciBauTaskFields = async (taskId) => {
//   const dueDate = new Date();
//   dueDate.setDate(dueDate.getDate() + 5);

//   if (dueDate.getDay() === 0) dueDate.setDate(dueDate.getDate() + 1);
//   if (dueDate.getDay() === 6) dueDate.setDate(dueDate.getDate() + 2);

//   try {
//     return await clickUp.tasks.update(taskId, {
//       due_date: dueDate.getTime(),
//       priority: 3,
//     });
//   } catch (error) {
//     console.error("Error updating CCI BAU task fields:", error);
//     throw error;
//   }
// };

// /**
//  * Updates task fields for TrueNet BAU tasks
//  * @param {string} taskId - The ID of the task to update
//  * @returns {Promise<Object>} - Result of the update operation
//  */
// export const updateTruenetBauTaskFields = async (taskId) => {
//   try {
//     return await clickUp.tasks.update(taskId, {
//       priority: 2, // Normal priority
//       // Add any other default fields for TrueNet BAU tasks
//     });
//   } catch (error) {
//     console.error("Error updating TrueNet BAU task fields:", error);
//     throw error;
//   }
// };
