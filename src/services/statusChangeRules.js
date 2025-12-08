// Centralized rules for status-driven actions
// Each status maps to an array of actions to execute in order

import { CCI_BAU_LIST, CCI_HS_LIST } from "../config/listsDetails.js";

export const STATUS_RULES = {
  "asbuilt ready for qc": [
    {
      type: "updateCustomFieldByName",
      params: {
        fieldName: "first asbuilt qc submission date 1",
        description: "Update first asbuilt qc submission date 1",
        alwaysUpdate: false,
        dateSource: "historyItemDate",
        listId: CCI_HS_LIST.id,
      },
    },
    {
      type: "updateCustomFieldByName",
      params: {
        fieldName: "asbuilt qc submission date",
        description: "Update asbuilt qc submission date",
        alwaysUpdate: true,
        dateSource: "historyItemDate",
        listId: CCI_HS_LIST.id,
      },
    },
  ],
  "design ready for qc": [
    {
      type: "updateCustomFieldByName",
      params: {
        fieldName: "first design qc submission date 1",
        description: "Update first design qc submission date 1",
        alwaysUpdate: false,
        dateSource: "historyItemDate",
      },
    },
  ],
  "redesign ready for qc": [
    {
      type: "updateCustomFieldByName",
      params: {
        fieldName: "first redesign qc submission date 1",
        description: "Update first redesign qc submission date 1",
        alwaysUpdate: false,
        dateSource: "historyItemDate",
      },
    },
  ],
  "redesign sent": [
    {
      type: "updateCustomFieldByName",
      params: {
        fieldName: "redesign actual completion date",
        description: "Update redesign actual completion date",
        alwaysUpdate: false,
        dateSource: "historyItemDate",
      },
    },
  ],
  "asbuilt sent": [
    {
      type: "validateTaskFields",
      params: {
        validations: [
          { fieldName: "PORCENTAJE ERROR ASBUILT", type: "number" },
          { fieldName: "ASBUILT MILES", type: "number" },
          { fieldName: "PREASBUILT QC BY", type: "users" },
        ],
        onFailure: {
          targetStatus: "asbuilt in qc by irazu",
          notifyUserFields: ["PREASBUILT QC BY"], // Campo dinámico del usuario
          staticRecipients: ["jdiaz@irazutechnology.com", "93jad@gmail.com"], // Tus emails fijos
          emailSubject: "Acción Requerida: Campos faltantes en Asbuilt para QC",
        },
      },
    },
    {
      type: "updateCustomFieldByName",
      params: {
        fieldName: "preasbuilt actual completion date ",
        description: "Update preasbuilt actual completion date",
        alwaysUpdate: false,
        dateSource: "historyItemDate",
      },
    },
  ],
  sent: [
    {
      type: "updateCustomFieldByName",
      params: {
        fieldName: "actual completion date",
        description: "Update actual completion date",
        alwaysUpdate: false,
        dateSource: "historyItemDate",
      },
    },
    {
      type: "setDateFieldNowIfEmptyForList",
      params: {
        description: "Set Date QCer when ready for qc (CCI BAU only)",
        fieldId: "5555571c-f2e2-4df0-a8fe-98bfeb8656e7", // Date QCer
        listId: CCI_BAU_LIST.id,
      },
    },
  ],
  "ready for qc": [
    {
      type: "updateCustomFieldByName",
      params: {
        fieldName: "submitted to qc",
        description: "Update submitted to qc",
        alwaysUpdate: true,
        dateSource: "historyItemDate",
      },
    },
    {
      type: "setDateFieldNowIfEmptyForList",
      params: {
        description: "Set Date Designer when ready for qc (CCI BAU only)",
        fieldId: "24860992-630a-4b05-a4ec-8a09387aad3d", // Date Designer
        listId: CCI_BAU_LIST.id,
      },
    },
  ],
};
