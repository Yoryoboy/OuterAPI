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

export const identifyParentList = (req, res, next) => {
  try {
    const historyItem = req.historyItem || req.body.history_items[0];
    const parentId = historyItem.parent_id;

    if (!parentId) {
      return res.status(400).json({ error: "No parent list ID found" });
    }

    let targetLists = [];

    if (parentId === CCI_HS_LIST.id) {
      targetLists = [CCI_HS_LIST.billingList.id];
    } else if (parentId === CCI_BAU_LIST.id) {
      targetLists = [CCI_BAU_LIST.billingList.id, GLOBAL_BAU_LIST.id];
    } else if (parentId === TRUENET_BAU_LIST.id) {
      targetLists = [TRUENET_BAU_LIST.billingList.id, GLOBAL_BAU_LIST.id];
    }

    if (!targetLists) {
      return res.status(204).end();
    }
    req.addToLists = targetLists;
    req.parentListId = parentId;

    next();
  } catch (error) {
    console.error("Error in identifyParentList middleware:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
