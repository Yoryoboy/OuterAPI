import { masterListIds } from "../config/contractors.js";

export function getContractorListId(task, contractor) {
  return task.masterList === masterListIds.kingFreedom
    ? contractor.freedomListId
    : contractor.keystoneListId;
}
