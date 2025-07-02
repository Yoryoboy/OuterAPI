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

    let parentListName = "";
    let targetListIds = [];
    let targetListNames = [];

    if (parentId === CCI_HS_LIST.id) {
      parentListName = CCI_HS_LIST.name;
      targetListIds = [CCI_HS_LIST.billingList.id, CCI_HS_LIST.qcList.id];
      targetListNames = [CCI_HS_LIST.billingList.name, CCI_HS_LIST.qcList.name];
    } else if (parentId === CCI_BAU_LIST.id) {
      parentListName = CCI_BAU_LIST.name;
      targetListIds = [CCI_BAU_LIST.billingList.id, GLOBAL_BAU_LIST.id];
      targetListNames = [CCI_BAU_LIST.billingList.name, GLOBAL_BAU_LIST.name];
    } else if (parentId === TRUENET_BAU_LIST.id) {
      parentListName = TRUENET_BAU_LIST.name;
      targetListIds = [TRUENET_BAU_LIST.billingList.id, GLOBAL_BAU_LIST.id];
      targetListNames = [
        TRUENET_BAU_LIST.billingList.name,
        GLOBAL_BAU_LIST.name,
      ];
    }

    if (!targetListIds) {
      return res.status(204).end();
    }
    req.addToListIds = targetListIds;
    req.addToListNames = targetListNames;
    req.parentListId = parentId;
    req.parentListName = parentListName;

    next();
  } catch (error) {
    console.error("Error in identifyParentList middleware:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
