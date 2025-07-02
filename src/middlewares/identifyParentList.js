/**
 * Middleware to identify the parent list of a task creation event
 * and add the corresponding billing list ID to the request object
 *
 * Examines the parent_id in the history_items array and matches it
 * against the list IDs in the configuration
 */
import {
  CCI_HS_LIST,
  CCI_BAU_LIST,
  TRUENET_BAU_LIST,
  GLOBAL_BAU_LIST,
} from "../config/listsDetails.js";

/**
 * Map of parent list IDs to their configuration objects
 * This allows for a more scalable approach when adding new lists
 */
const LIST_CONFIG_MAP = {
  [CCI_HS_LIST.id]: {
    parentList: CCI_HS_LIST,
    targetLists: [
      { id: CCI_HS_LIST.billingList.id, name: CCI_HS_LIST.billingList.name },
      { id: CCI_HS_LIST.qcList.id, name: CCI_HS_LIST.qcList.name }
    ]
  },
  [CCI_BAU_LIST.id]: {
    parentList: CCI_BAU_LIST,
    targetLists: [
      { id: CCI_BAU_LIST.billingList.id, name: CCI_BAU_LIST.billingList.name },
      { id: GLOBAL_BAU_LIST.id, name: GLOBAL_BAU_LIST.name }
    ]
  },
  [TRUENET_BAU_LIST.id]: {
    parentList: TRUENET_BAU_LIST,
    targetLists: [
      { id: TRUENET_BAU_LIST.billingList.id, name: TRUENET_BAU_LIST.billingList.name },
      { id: GLOBAL_BAU_LIST.id, name: GLOBAL_BAU_LIST.name }
    ]
  }
};

/**
 * Middleware to identify the parent list and determine target lists for task creation
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {void}
 */
export const identifyParentList = (req, res, next) => {
  try {
    // Get the history item from either the attached property or the first item
    const historyItem = req.historyItem || req.body.history_items[0];
    const parentId = historyItem.parent_id;

    // Validate parent ID exists
    if (!parentId) {
      return res.status(400).json({ error: "No parent list ID found" });
    }

    // Look up the parent list configuration
    const listConfig = LIST_CONFIG_MAP[parentId];
    
    // If no matching configuration, return 204 No Content
    if (!listConfig) {
      return res.status(204).end();
    }
    
    // Extract target list IDs and names
    const targetListIds = listConfig.targetLists.map(list => list.id);
    const targetListNames = listConfig.targetLists.map(list => list.name);
    
    // Attach data to request object for downstream handlers
    req.addToListIds = targetListIds;
    req.addToListNames = targetListNames;
    req.parentListId = parentId;
    req.parentListName = listConfig.parentList.name;

    next();
  } catch (error) {
    console.error("Error in identifyParentList middleware:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
