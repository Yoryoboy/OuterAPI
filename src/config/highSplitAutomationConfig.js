export const HIGH_SPLIT_AUTOMATION_EVENT = "highSplitAutomation";

export const HIGH_SPLIT_AUTOMATIONS = [
  {
    segment: "ASBUILT",
    statusField: {
      id: "0dc606a1-e128-487e-9ba0-69e9cf636123",
      name: "ASBUILT BILLING STATUS",
      readyOptionId: "7ced988f-49e8-4b8b-a19c-b28e10af78a0",
      billedOptionId: "e82b12d5-5186-4f6b-8a52-07dc8f1bc915",
    },
    metricField: {
      id: "d281788f-5911-4954-82db-3616de342644",
      name: "ASBUILT ROUNDED MILES",
    },
  },
  {
    segment: "DESIGN",
    statusField: {
      id: "a263dd91-993e-4758-b112-07be364f3d0a",
      name: "DESIGN BILLING STATUS",
      readyOptionId: "87fbd12d-4cd2-4c0e-9d9c-fb5b2b3931c1",
      billedOptionId: "16447d35-5678-4162-8249-5a50ade9a053",
    },
    metricField: {
      id: "e1edd040-64af-4036-8012-9b9c29fc5f11",
      name: "DESIGN ROUNDED MILES",
    },
  },
  {
    segment: "REDESIGN",
    statusField: {
      id: "2ba7840b-7ff1-4e37-b519-2f7741e45170",
      name: "REDESIGN BILLING STATUS",
      readyOptionId: "b72a35ef-df4f-43e1-b9bc-8c1aa8fac08a",
      billedOptionId: "86e072c0-7078-45a6-929c-0bf6071cce1e",
    },
    metricField: {
      id: "4ec8d659-1037-4662-b228-e05c3228b374",
      name: "REDESIGN TIME",
    },
  },
];

export const HIGH_SPLIT_AUTOMATIONS_BY_FIELD_ID = {};
const highSplitFieldIds = [];

HIGH_SPLIT_AUTOMATIONS.forEach((automation) => {
  highSplitFieldIds.push(automation.statusField.id, automation.metricField.id);

  HIGH_SPLIT_AUTOMATIONS_BY_FIELD_ID[automation.statusField.id] = {
    automation,
    fieldRole: "status",
  };

  HIGH_SPLIT_AUTOMATIONS_BY_FIELD_ID[automation.metricField.id] = {
    automation,
    fieldRole: "metric",
  };
});

export const HIGH_SPLIT_AUTOMATION_FIELD_IDS = new Set(highSplitFieldIds);
