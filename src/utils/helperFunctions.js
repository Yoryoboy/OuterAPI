import { masterListIds } from "../config/contractors.js";

export function getContractorListId(task, contractor) {
  return task.masterList === masterListIds.kingFreedom
    ? contractor.freedomListId
    : contractor.keystoneListId;
}

export function getCodesCustomFields(task) {
  return task?.custom_fields?.filter(
    (field) =>
      field.type === "number" &&
      field.value &&
      (field.name?.includes("(EA)") ||
        field.name?.includes("(FT)") ||
        field.name?.includes("(HR)"))
  );
}
