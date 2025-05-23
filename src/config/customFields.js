export const customFields = [
      {
        id: '0a70a6d2-527b-4bdf-9a58-8404a4d20741',
        name: 'MILLAS DEVUELTAS REDESIGN',
        type: 'formula',
        type_config: {
          simple: false,
          formula: 'IF(CUSTOM_FIELD_1c0b063c_7076_4499_b218_4790f20ec11f-1 >= 3,     1.41 * IF(CUSTOM_FIELD_4ec8d659_1037_4662_b228_e05c3228b374*0.4 < 1, 1, CUSTOM_FIELD_4ec8d659_1037_4662_b228_e05c3228b374*0.4),    SWITCH(        CUSTOM_FIELD_1c0b063c_7076_4499_b218_4790f20ec11f-1,         1, 1 * IF(CUSTOM_FIELD_4ec8d659_1037_4662_b228_e05c3228b374*0.4 < 1, 1, CUSTOM_FIELD_4ec8d659_1037_4662_b228_e05c3228b374*0.4),        2, 1.4 * IF(CUSTOM_FIELD_4ec8d659_1037_4662_b228_e05c3228b374*0.4 < 1, 1, CUSTOM_FIELD_4ec8d659_1037_4662_b228_e05c3228b374*0.4),        0    ))',
          version: '1.11',
          is_dynamic: false,
          return_types: [
            'null',
            'number'
          ],
          calculation_state: 'ready'
        },
        date_created: '1710267505993',
        hide_from_guests: false,
        required: false
      },
      {
        id: '0dbd1e61-077f-44bf-a3cf-101cac65f3aa',
        name: 'ETA',
        type: 'date',
        type_config: {},
        date_created: '1693312417102',
        hide_from_guests: false,
        required: false
      },
      {
        id: '0dc606a1-e128-487e-9ba0-69e9cf636123',
        name: 'ASBUILT BILLING STATUS',
        type: 'drop_down',
        type_config: {
          default: 0,
          placeholder: null,
          new_drop_down: true,
          options: [
            {
              id: '7ced988f-49e8-4b8b-a19c-b28e10af78a0',
              name: 'ASBUILT READY TO BILL',
              color: '#f9d900',
              orderindex: 0
            },
            {
              id: 'e82b12d5-5186-4f6b-8a52-07dc8f1bc915',
              name: 'ASBUILT BILLED',
              color: '#2ecd6f',
              orderindex: 1
            },
            {
              id: 'a6e87509-7aa4-4158-a798-3a33994f48ab',
              name: 'NA',
              color: '#667684',
              orderindex: 2
            }
          ]
        },
        date_created: '1686679837842',
        hide_from_guests: false,
        required: false
      },
      {
        id: '0f9e872e-3666-4ed8-bad6-fc8ee416c7ee',
        name: 'CODE WS',
        type: 'drop_down',
        type_config: {
          default: 0,
          placeholder: null,
          new_drop_down: true,
          options: [
            {
              id: '1eb3fdab-bfa9-4ce8-ae49-7908d5491094',
              name: 'D1',
              color: null,
              orderindex: 0
            },
            {
              id: '1fa6b14a-11a8-4c44-9e86-dac111082c01',
              name: 'D2',
              color: null,
              orderindex: 1
            },
            {
              id: '2b52eed0-c2ba-4dc6-b995-fbaafabd217c',
              name: 'D3',
              color: null,
              orderindex: 2
            },
            {
              id: '5f7a9616-e291-4b14-9776-ccc03a8473bf',
              name: 'D4',
              color: null,
              orderindex: 3
            },
            {
              id: 'b1d101a3-39da-4277-8dcb-60720e96071b',
              name: 'D5',
              color: null,
              orderindex: 4
            },
            {
              id: 'cc4377f5-7bd3-49e1-8aea-ca48b7adfad8',
              name: 'D6',
              color: null,
              orderindex: 5
            },
            {
              id: 'bd226b66-9ff6-4b7f-a1c8-7237f663678f',
              name: 'D7',
              color: null,
              orderindex: 6
            },
            {
              id: '9204f40f-325b-49aa-a38d-7cf820077be1',
              name: 'D8',
              color: null,
              orderindex: 7
            },
            {
              id: '0fb77192-5284-4990-8ca5-fd7ab0b52071',
              name: 'D9',
              color: null,
              orderindex: 8
            },
            {
              id: '88799ceb-602a-4b89-9f8e-16a4da6f3eae',
              name: 'D10',
              color: null,
              orderindex: 9
            },
            {
              id: 'b7a3ab9f-a8e0-4fc0-a26a-b70de9373d41',
              name: 'D11',
              color: null,
              orderindex: 10
            },
            {
              id: '73abd5db-a5db-4812-9f93-ca766e584f01',
              name: 'D12',
              color: null,
              orderindex: 11
            },
            {
              id: '364e546e-d596-41d5-8cd1-e871b656386a',
              name: 'D13',
              color: null,
              orderindex: 12
            },
            {
              id: '554c554b-58cd-45a8-81cb-a8593416c7e8',
              name: 'D14',
              color: null,
              orderindex: 13
            },
            {
              id: '1a37b9d5-7b6d-4bfa-8ed1-a5471701def3',
              name: 'D15',
              color: null,
              orderindex: 14
            },
            {
              id: 'bc531ddd-4658-4d7d-b9e7-2cedcd9e1fae',
              name: 'D16',
              color: null,
              orderindex: 15
            },
            {
              id: 'a99eded3-857f-4da2-b431-bfb81f4ad67b',
              name: 'D17',
              color: null,
              orderindex: 16
            },
            {
              id: '19561b7c-aea0-4203-8bac-25f82bd4b7ac',
              name: 'D18',
              color: null,
              orderindex: 17
            },
            {
              id: '730a7073-8aee-4eb4-b7f0-4fdc22a89b45',
              name: 'D19',
              color: null,
              orderindex: 18
            },
            {
              id: 'ecb69540-24b1-4ab2-8b0e-0fbe30c4430a',
              name: 'D20',
              color: null,
              orderindex: 19
            },
            {
              id: 'efe9a5be-bc77-4d9e-bfb2-7808eaed396e',
              name: 'D21',
              color: null,
              orderindex: 20
            },
            {
              id: 'bc36f17f-7e55-4f8e-811c-3fc9b07909f2',
              name: 'D22',
              color: null,
              orderindex: 21
            },
            {
              id: '5a9277f4-892c-41b1-bab2-6f0bc6c8fc4e',
              name: 'D23',
              color: null,
              orderindex: 22
            },
            {
              id: '1113354b-5d3c-4938-9a85-6225b1c3a17f',
              name: 'D24',
              color: null,
              orderindex: 23
            },
            {
              id: '9ccf3421-bd65-4a2e-98fc-9077d07a75fd',
              name: 'D25',
              color: null,
              orderindex: 24
            },
            {
              id: 'b9122532-84ad-479a-ba0a-837dd8db104a',
              name: 'D26',
              color: null,
              orderindex: 25
            },
            {
              id: '7613149f-093b-47f1-ba49-0f3f1ddec7e9',
              name: 'D27',
              color: null,
              orderindex: 26
            },
            {
              id: '61faf2e7-a864-4bf5-94a6-306820424a1e',
              name: 'D28',
              color: null,
              orderindex: 27
            },
            {
              id: '486488cc-8418-4b93-b5a9-bfe8d6cc5b4c',
              name: 'D29',
              color: null,
              orderindex: 28
            },
            {
              id: 'a6e12da5-1ff0-4a50-aa4d-19da1797d6e8',
              name: 'D30',
              color: null,
              orderindex: 29
            },
            {
              id: 'fa01d131-4bac-4d1e-855d-3607fa9a1cf8',
              name: 'D31',
              color: null,
              orderindex: 30
            },
            {
              id: 'df14768d-860a-4a2a-a70d-561b5943e5f3',
              name: 'D32',
              color: null,
              orderindex: 31
            },
            {
              id: '2c6f90e0-455d-4fb1-88c8-ecc1e8391bc0',
              name: 'D33',
              color: null,
              orderindex: 32
            },
            {
              id: '942ec5b6-0246-4ea3-abef-a02f8bb4e9b7',
              name: 'D34',
              color: null,
              orderindex: 33
            },
            {
              id: '96306e62-a19b-49bd-a4c9-2eb2d98cdda7',
              name: 'D35',
              color: null,
              orderindex: 34
            },
            {
              id: 'dbdaa66c-52d0-4f7e-b7d8-eaebb3f29f6f',
              name: 'D36',
              color: null,
              orderindex: 35
            },
            {
              id: '70d3c52d-e5bf-41b3-95f5-6d0beeec8603',
              name: 'D37',
              color: null,
              orderindex: 36
            },
            {
              id: '0fb9f81e-b168-4f03-8815-1b3438c84cd3',
              name: 'D38',
              color: null,
              orderindex: 37
            }
          ]
        },
        date_created: '1671048751776',
        hide_from_guests: false,
        required: false
      },
      {
        id: '15664ed2-140b-4133-9187-66bf713a6ac2',
        name: 'PLANT TYPE',
        type: 'drop_down',
        type_config: {
          default: 0,
          sorting: 'manual',
          placeholder: null,
          new_drop_down: true,
          options: [
            {
              id: '7bb60379-cf21-49b2-9778-33b6e45e6eaa',
              name: 'COAX',
              color: null,
              orderindex: 0
            },
            {
              id: 'b9d0435b-88e5-46cc-8e69-c08f1e47af8f',
              name: 'FIBER',
              color: null,
              orderindex: 1
            },
            {
              id: '0c4cbc0b-948f-4765-926a-7d5e6935819b',
              name: 'COAX / FIBER',
              color: null,
              orderindex: 2
            },
            {
              id: '65d1bbda-4ec4-4c31-a8e2-f7ca6d539d8f',
              name: 'CANCELLED',
              color: null,
              orderindex: 3
            },
            {
              id: '9e2f5ece-e56f-4333-96eb-6779f4e034e5',
              name: 'DISCONNECT',
              color: null,
              orderindex: 4
            },
            {
              id: '64623e54-2b9c-440a-b7a0-78388382ebf3',
              name: 'NODE SPLIT',
              color: null,
              orderindex: 5
            },
            {
              id: 'e07612f1-2cf4-4692-af1f-5a3ae4ac8b0b',
              name: 'NODE SEGMENTATION',
              color: null,
              orderindex: 6
            },
            {
              id: '77b959a3-d6ee-4c4e-8d21-575559a9080a',
              name: 'UNKNOWN',
              color: null,
              orderindex: 7
            }
          ]
        },
        date_created: '1703678504386',
        hide_from_guests: false,
        required: false
      },
      {
        id: '194b8eff-60ac-4272-a49e-eeb504dd1288',
        name: 'REDESIGN MILES 2',
        type: 'formula',
        type_config: {
          simple: false,
          formula: 'CUSTOM_FIELD_4ec8d659_1037_4662_b228_e05c3228b374*0.56',
          version: '1.11',
          is_dynamic: false,
          return_types: [
            'null',
            'number'
          ],
          calculation_state: 'ready'
        },
        date_created: '1710267976292',
        hide_from_guests: false,
        required: false
      },
      {
        id: '19aa5613-9e50-42d2-84a4-c7fc3a87c627',
        name: 'DESIGN REJECTION',
        type: 'number',
        type_config: {},
        date_created: '1699436985780',
        hide_from_guests: false,
        required: false
      },
      {
        id: '1c0b063c-7076-4499-b218-4790f20ec11f',
        name: 'REDESIGN QC',
        type: 'number',
        type_config: {},
        date_created: '1702556898549',
        hide_from_guests: false,
        required: false
      },
      {
        id: '1c4c7504-b22d-4558-83dd-baa923f610a0',
        name: 'BILLING STATUS',
        type: 'drop_down',
        type_config: {
          default: 0,
          placeholder: null,
          options: [
            {
              id: '33a670bb-1c1a-4040-aeaf-1a4bde316fe7',
              name: 'NO BILLED',
              color: '#b5bcc2',
              orderindex: 0
            },
            {
              id: '391dee4c-1d5a-452f-bafb-43d539d783f4',
              name: 'READY TO BILL',
              color: '#f9d900',
              orderindex: 1
            },
            {
              id: 'd16f2ad2-788f-4273-b28f-9668ac56bdd9',
              name: 'BILLED',
              color: '#2ecd6f',
              orderindex: 2
            }
          ]
        },
        date_created: '1683578660111',
        hide_from_guests: false,
        required: false
      },
      {
        id: '203b9e28-ca01-41af-abe0-4b23fca93512',
        name: 'Fecha Entrega Diseño',
        type: 'date',
        type_config: {},
        date_created: '1648467446834',
        hide_from_guests: false,
        required: false
      },
      {
        id: '210d644d-2c74-44cc-96d7-96c9dfeca5ec',
        name: 'HOURLY BILL (QC DESIGN IRAZU)',
        type: 'number',
        type_config: {},
        date_created: '1699546011399',
        hide_from_guests: false,
        required: false
      },
      {
        id: '29ceb39c-770a-4d98-b37c-a3100a3b28b0',
        name: 'PORCENTAJE ERROR REDESIGN',
        type: 'number',
        type_config: {},
        date_created: '1707751045435',
        hide_from_guests: false,
        required: false
      },
      {
        id: '2ba7840b-7ff1-4e37-b519-2f7741e45170',
        name: 'REDESIGN BILLING STATUS',
        type: 'drop_down',
        type_config: {
          default: 0,
          placeholder: null,
          new_drop_down: true,
          options: [
            {
              id: 'b72a35ef-df4f-43e1-b9bc-8c1aa8fac08a',
              name: 'REDESIGN READY TO BILL',
              color: '#f9d900',
              orderindex: 0
            },
            {
              id: '86e072c0-7078-45a6-929c-0bf6071cce1e',
              name: 'REDESIGN BILLED',
              color: '#2ecd6f',
              orderindex: 1
            },
            {
              id: '2d4dc4c1-48d6-4af2-b009-2a0e1f0101b9',
              name: 'NA',
              color: '#667684',
              orderindex: 2
            }
          ]
        },
        date_created: '1698928392347',
        hide_from_guests: false,
        required: false
      },
      {
        id: '353ffd81-3618-4a34-95f6-e7cbde0520aa',
        name: 'SECONDARY ID',
        type: 'short_text',
        type_config: {},
        date_created: '1699298446243',
        hide_from_guests: false,
        required: false
      },
      {
        id: '3aa88781-1561-48da-920c-65d858248100',
        name: 'DEVOLUCIONES REDESIGN',
        type: 'formula',
        type_config: {
          simple: false,
          formula: 'CUSTOM_FIELD_1c0b063c_7076_4499_b218_4790f20ec11f-1',
          version: '1.11',
          is_dynamic: false,
          return_types: [
            'null',
            'number'
          ],
          calculation_state: 'ready'
        },
        date_created: '1710267436964',
        hide_from_guests: false,
        required: false
      },
      {
        id: '4140fbd7-512b-41bd-81a0-0f5f44e587b6',
        name: 'PORCENTAJE ERROR DISEÑO',
        type: 'number',
        type_config: {},
        date_created: '1699027582799',
        hide_from_guests: false,
        required: false
      },
      {
        id: '4641174b-5892-4bf6-81c5-d6770f6103ab',
        name: 'FIRST DESIGN QC SUBMISSION DATE 1',
        type: 'date',
        type_config: {},
        date_created: '1707130422056',
        hide_from_guests: false,
        required: false
      },
      {
        id: '48cd69b0-8280-4114-925b-c18e0d0cb328',
        name: 'COBRO CONTRATISTA DESIGN',
        type: 'date',
        type_config: {},
        date_created: '1686839870335',
        hide_from_guests: false,
        required: false
      },
      {
        id: '4b37aef6-e1d1-4057-96cd-e35146238424',
        name: 'PREASBUILT QC BY',
        type: 'users',
        type_config: {
          single_user: false,
          include_groups: true,
          include_guests: true,
          include_team_members: false
        },
        date_created: '1686746615482',
        hide_from_guests: false,
        required: false
      },
      {
        id: '4bae26aa-9b7f-446c-a131-e75c63d5a467',
        name: 'COBRO CONTRATISTA 1',
        type: 'date',
        type_config: {},
        date_created: '1658766276215',
        hide_from_guests: false,
        required: false
      },
      {
        id: '4bfb304d-d253-4f53-a4e7-233aedb3b6b9',
        name: 'JOB TYPE CCI',
        type: 'drop_down',
        type_config: {
          sorting: 'name_asc',
          new_drop_down: true,
          options: [
            {
              id: '2916fe7f-0314-4ccb-b441-a3f0f038308d',
              name: 'BROWNFIELD-LINE EXTENSION STATE GRANT',
              color: null,
              orderindex: 0
            },
            {
              id: '255970aa-986d-41af-bc19-8f6199e162b2',
              name: 'COMMERCIAL CARRIER/LANDLINE',
              color: null,
              orderindex: 1
            },
            {
              id: '476174d6-c33e-42e9-878b-92166f42c251',
              name: 'COMMERCIAL NEWBUILD',
              color: null,
              orderindex: 2
            },
            {
              id: '289b0c4d-5f53-4217-9294-8162be8d2af7',
              name: 'COMMERCIAL NEWBUILD - AUTOBUILD',
              color: null,
              orderindex: 3
            },
            {
              id: 'e215dea0-446a-4320-acd0-574342d048c9',
              name: 'E-RATE',
              color: null,
              orderindex: 4
            },
            {
              id: '02abb636-93de-4350-a9a7-036e92796290',
              name: 'FAILED INSTALL',
              color: null,
              orderindex: 5
            },
            {
              id: 'c0e6574b-355b-4c0f-90f3-659862e93971',
              name: 'FIBER SURVEY MODEL - CARRIER',
              color: null,
              orderindex: 6
            },
            {
              id: '3ac9b1b8-7fa9-489a-8205-63219f82c415',
              name: 'FIBER SURVEY MODEL - COMM NEWBUILD',
              color: null,
              orderindex: 7
            },
            {
              id: '808705c7-d5cc-445a-af20-e8a7e6b3cef8',
              name: 'FIBER VERIFICATION',
              color: null,
              orderindex: 8
            },
            {
              id: '03d5b67e-2a63-4586-a881-f6c1adc02c91',
              name: 'FORCED RELOCATE*',
              color: null,
              orderindex: 9
            },
            {
              id: 'c7a74c23-c3ff-4ab1-8264-6b455bfea40a',
              name: 'FTTH/FTTU',
              color: null,
              orderindex: 10
            },
            {
              id: '47727c47-0fa0-46f1-bc60-8034fe8074d7',
              name: 'GOVERNMENT',
              color: null,
              orderindex: 11
            },
            {
              id: '27a8b45a-9f76-471e-89f8-9ea8ad59b8a9',
              name: 'GREENFIELD',
              color: null,
              orderindex: 12
            },
            {
              id: 'df45878b-b48e-415d-9561-f8d0392e9f46',
              name: 'HIGH-SPLIT',
              color: null,
              orderindex: 13
            },
            {
              id: 'eee074f2-4998-4b59-adaf-ba8497b8bc5c',
              name: 'LOCAL',
              color: null,
              orderindex: 14
            },
            {
              id: '28f8bc3a-7bdd-4400-855b-390e3ec22ecb',
              name: 'LONG DROP PLANT CORRECTION',
              color: null,
              orderindex: 15
            },
            {
              id: 'eaeaf6c8-7d80-4503-a7fd-ba240895391a',
              name: 'MAPPING UPDATES',
              color: null,
              orderindex: 16
            },
            {
              id: 'fa9100ba-f491-4188-90ae-19291a5f7da7',
              name: 'MARKET FILL-IN COMMUNITY',
              color: null,
              orderindex: 17
            },
            {
              id: 'c87a4f37-bb50-45f8-ae92-b61d88906524',
              name: 'MARKET FILL-IN LINE EXT',
              color: null,
              orderindex: 18
            },
            {
              id: 'ecf57118-4db0-4b78-8585-6c23556c73fe',
              name: 'NATIONAL',
              color: null,
              orderindex: 19
            },
            {
              id: '1776109c-ce44-46fd-af3c-fd8d20ec8f86',
              name: 'NATIONAL SDU - GREENFIELD',
              color: null,
              orderindex: 20
            },
            {
              id: 'c96640f3-6492-4edc-9396-611ee1db7d5d',
              name: 'NO CONSTRUCTION REQUIRED',
              color: null,
              orderindex: 21
            },
            {
              id: '83a2d363-0340-44a1-8c33-d7cfe300354b',
              name: 'NODE SEGMENTATION',
              color: null,
              orderindex: 22
            },
            {
              id: 'b454c1b4-94fe-4370-9e16-7d084f6c8d31',
              name: 'NODE SPLIT',
              color: null,
              orderindex: 23
            },
            {
              id: '109823b3-3de9-4698-85f2-91162150c8ef',
              name: 'PLANT MAINTENANCE',
              color: null,
              orderindex: 24
            },
            {
              id: 'a56fedca-2a65-478c-8872-7dd36a7218cc',
              name: 'PLANT REPLACEMENT',
              color: null,
              orderindex: 25
            },
            {
              id: 'aae5115f-de1f-4bcb-a11b-d6a1d0ef9d9d',
              name: 'RESIDENTIAL SERVICEABILITY',
              color: null,
              orderindex: 26
            },
            {
              id: 'ca0d2c72-3689-4bb6-9f64-a20ba843d32f',
              name: 'SCHOOL',
              color: null,
              orderindex: 27
            },
            {
              id: '618529c8-04d5-4124-8ff0-1b4e128ed128',
              name: 'SINGLE SITE',
              color: null,
              orderindex: 28
            },
            {
              id: '3d9e9931-19fa-406d-820f-94715b62788e',
              name: 'SMB MARKET FILL-IN',
              color: null,
              orderindex: 29
            },
            {
              id: '4a2bd1ed-f6c2-4673-af69-5fac67bda8dd',
              name: 'SPECTRUM STORE',
              color: null,
              orderindex: 30
            },
            {
              id: '90928221-ffa4-4b15-afa2-b353dd4a4e57',
              name: 'SUBSIDIZED BUILD',
              color: null,
              orderindex: 31
            },
            {
              id: '58cd5ade-707d-49e4-8a68-0fff4cc7de81',
              name: 'SUBSIDIZED BUILD ARPA',
              color: null,
              orderindex: 32
            },
            {
              id: 'cd324e33-b42e-4c55-8c53-db6836ea9baf',
              name: 'TAP CUT IN',
              color: null,
              orderindex: 33
            },
            {
              id: '81f785fe-7a17-4075-ad7b-29918a6f55ad',
              name: 'UNKNOWN',
              color: null,
              orderindex: 34
            }
          ]
        },
        date_created: '1734708292798',
        hide_from_guests: false,
        required: false
      },
      {
        id: '4d37a694-6797-40b3-8277-997b98af396b',
        name: 'PREASBUILT REJECTION',
        type: 'number',
        type_config: {},
        date_created: '1699437238444',
        hide_from_guests: false,
        required: false
      },
      {
        id: '4ec8d659-1037-4662-b228-e05c3228b374',
        name: 'REDESIGN TIME',
        type: 'number',
        type_config: {},
        date_created: '1698931782151',
        hide_from_guests: false,
        required: false
      },
      {
        id: '509b2342-4ae9-4eac-99aa-40ac3b0bff62',
        name: 'COBRO CONTRATISTA ASBUILT',
        type: 'date',
        type_config: {},
        date_created: '1686839745253',
        hide_from_guests: false,
        required: false
      },
      {
        id: '510e0fed-6ce4-4bb7-b1de-9b4031177143',
        name: 'ESTIMATED DELIVERY DATE',
        type: 'date',
        type_config: {},
        date_created: '1684848166809',
        hide_from_guests: false,
        required: false
      },
      {
        id: '51638f93-a227-4efb-ac95-584a1e12a16b',
        name: 'RECEIVED DATE',
        type: 'date',
        type_config: {},
        date_created: '1684239726101',
        hide_from_guests: false,
        required: false
      },
      {
        id: '54bf85b3-77b1-40a7-ad37-710c6f5b5e97',
        name: 'REDESIGN QC SUBMISSION DATE',
        type: 'date',
        type_config: {},
        date_created: '1701197779761',
        hide_from_guests: false,
        required: false
      },
      {
        id: '55c401f0-f1b9-4884-90f5-9e1dac3753fb',
        name: 'PROJECT TYPE',
        type: 'drop_down',
        type_config: {
          sorting: 'manual',
          new_drop_down: true,
          options: [
            {
              id: '37e89ff6-34a6-43b3-9a43-2050b0473003',
              name: 'DESIGN',
              color: null,
              orderindex: 0
            },
            {
              id: '9059e8b1-909a-4f5d-93ae-7409fed2dcb7',
              name: 'ASBUILT',
              color: null,
              orderindex: 1
            },
            {
              id: '5fbdd2b2-316c-427c-88cf-ae77e0b478db',
              name: 'REDESIGN',
              color: null,
              orderindex: 2
            },
            {
              id: '1017ca36-6654-4ad1-b3c2-e649e3729ee3',
              name: 'NODE SPLIT',
              color: null,
              orderindex: 3
            },
            {
              id: 'f6ba3b92-3a71-4d4e-95ec-c1444968437c',
              name: 'MAP UPDATE',
              color: null,
              orderindex: 4
            },
            {
              id: '72d83432-80bb-4151-8fab-a19fd4ca45df',
              name: 'RESTORE',
              color: null,
              orderindex: 5
            },
            {
              id: 'ff865e6f-323f-49a0-bad5-9c9b439c8d64',
              name: 'UNKNOWN',
              color: null,
              orderindex: 6
            }
          ]
        },
        date_created: '1683638460955',
        hide_from_guests: false,
        required: false
      },
      {
        id: '58df5235-7036-45f7-a534-f23e2cd1d61c',
        name: 'DESIGN QC SUBMISSION DATE',
        type: 'date',
        type_config: {},
        date_created: '1697485961928',
        hide_from_guests: false,
        required: false
      },
      {
        id: '5b5f3b2f-49a8-4223-b64b-d9331bc1c5e9',
        name: 'HOURLY BILL (QC ASBUILT IRAZU)',
        type: 'number',
        type_config: {},
        date_created: '1698865603346',
        hide_from_guests: false,
        required: false
      },
      {
        id: '5d3a60e7-759d-4bdf-8b31-2439ae6604fc',
        name: 'TERMINADO POR IRAZU',
        type: 'labels',
        type_config: {
          options: [
            {
              id: '0eceb9c8-1f52-426e-9e55-60d28a6e3803',
              label: 'ASBUILT',
              color: '#2ecd6f'
            },
            {
              id: '4b229e07-a3cb-44d5-9395-02a305f64dcf',
              label: 'DESIGN',
              color: '#0231E8'
            },
            {
              id: '033d8491-58d6-4e52-99fb-1113978eeaa1',
              label: 'REDESIGN',
              color: '#FF7FAB'
            }
          ]
        },
        date_created: '1707131738435',
        hide_from_guests: false,
        required: false
      },
      {
        id: '618dff50-c93b-4914-9bb3-4c2ec84a91f1',
        name: 'WORK REQUEST ID',
        type: 'short_text',
        type_config: {},
        date_created: '1737460847918',
        hide_from_guests: false,
        required: false
      },
      {
        id: '63565954-d841-4434-9f2b-60388b95a0eb',
        name: 'Status WS',
        type: 'drop_down',
        type_config: {
          default: 0,
          placeholder: null,
          new_drop_down: true,
          options: [
            {
              id: '88bee65c-c4e9-4d4f-8d16-d5e6bbf92d44',
              name: 'Aprob. 20%',
              color: '#09f505',
              orderindex: 0
            },
            {
              id: '3700092c-9f51-42f8-ab3c-26249881ce61',
              name: 'FCT 80%',
              color: '#bf55ec',
              orderindex: 1
            },
            {
              id: '7f7f253b-1d37-4774-acfa-ab1494794a9c',
              name: 'En proceso',
              color: '#f9d900',
              orderindex: 2
            },
            {
              id: 'fd760d37-6ce0-4998-8db0-2e78abec1013',
              name: 'Finalizado',
              color: '#3082B7',
              orderindex: 3
            },
            {
              id: 'c667086f-df90-4053-a381-1d98260495a3',
              name: 'On Hold',
              color: '#667684',
              orderindex: 4
            },
            {
              id: '1b12faa1-6412-464b-bf02-bb422a378ecd',
              name: 'Entregado',
              color: '#02BCD4',
              orderindex: 5
            },
            {
              id: '6017fae8-0397-4c5c-b609-888e58f6d3d5',
              name: 'QC',
              color: '#E65100',
              orderindex: 6
            },
            {
              id: '09d98bdf-4d97-445b-8997-dd7992bb3ec7',
              name: 'Validation',
              color: '#7C4DFF',
              orderindex: 7
            },
            {
              id: '42906eac-7efb-4d32-89ff-3c1cd581569e',
              name: 'Aprobado',
              color: '#2ecd6f',
              orderindex: 8
            },
            {
              id: 'a9d26dd2-2d90-49f1-979b-a3769314e678',
              name: 'Facturado',
              color: '#FF7FAB',
              orderindex: 9
            },
            {
              id: 'f003a1f0-2f5e-403e-ae2c-de689e1bdf1d',
              name: 'PRE INVOICE',
              color: '#0231E8',
              orderindex: 10
            },
            {
              id: '3ccb3fb9-5bd2-4630-86d0-f0dd56d59304',
              name: 'Autofail',
              color: '#e50000',
              orderindex: 11
            }
          ]
        },
        date_created: '1650044302787',
        hide_from_guests: false,
        required: false
      },
      {
        id: '63dc920f-1b23-401c-a0f0-404ca9e71243',
        name: 'REDESIGN QC BY',
        type: 'users',
        type_config: {
          single_user: false,
          include_groups: null,
          include_guests: false,
          include_team_members: false
        },
        date_created: '1701197728942',
        hide_from_guests: false,
        required: false
      },
      {
        id: '6d3a7868-9685-4043-aaa9-71c149e3f6d5',
        name: 'Redesign Time Justification',
        type: 'text',
        type_config: {},
        date_created: '1739967958723',
        hide_from_guests: false,
        required: false
      },
      {
        id: '6e212cb9-c046-43af-9911-3421b8b23c98',
        name: 'Asbuilt QC',
        type: 'number',
        type_config: {},
        date_created: '1689602808837',
        hide_from_guests: false,
        required: false
      },
      {
        id: '70351909-003b-4397-adbd-5038fe78922a',
        name: 'ASBUILT QC SUBMISSION DATE',
        type: 'date',
        type_config: {},
        date_created: '1697483207250',
        hide_from_guests: false,
        required: false
      },
      {
        id: '7b9eac63-2f39-4b1b-accc-1b1dd1b6076f',
        name: 'REDESIGN REJECTION',
        type: 'number',
        type_config: {},
        date_created: '1699973246476',
        hide_from_guests: false,
        required: false
      },
      {
        id: '7c82b2d6-591f-4f28-9318-1d7282901fe7',
        name: 'DESIGN MILES',
        type: 'number',
        type_config: {},
        date_created: '1719239434474',
        hide_from_guests: false,
        required: false
      },
      {
        id: '8b0d6d64-0d01-48df-a84f-2e0a0f497184',
        name: 'TICKET',
        type: 'short_text',
        type_config: {},
        date_created: '1709297974962',
        hide_from_guests: false,
        required: false
      },
      {
        id: '94100d1d-770b-4b1d-acb6-ca47e2b241b8',
        name: 'Design QC',
        type: 'number',
        type_config: {},
        date_created: '1689602818149',
        hide_from_guests: false,
        required: false
      },
      {
        id: '9434a777-4a4e-4056-b5e9-4d7dfb2ea048',
        name: 'Fecha estimada Diseño',
        type: 'date',
        type_config: {},
        date_created: '1617298308427',
        hide_from_guests: false,
        required: false
      },
      {
        id: '95b708bc-e405-4c04-bf32-9e51507982fd',
        name: 'REDESIGN ACTUAL COMPLETION DATE',
        type: 'date',
        type_config: {},
        date_created: '1698931653748',
        hide_from_guests: false,
        required: false
      },
      {
        id: '9624b887-222b-4258-ae7a-8bf6be75c43c',
        name: 'INVOICE 2',
        type: 'number',
        type_config: {},
        date_created: '1686684180371',
        hide_from_guests: false,
        required: false
      },
      {
        id: '97cec8b6-b59f-4ab1-825b-7cd0e855822c',
        name: 'TIME SPENT BY VENDOR',
        type: 'number',
        type_config: {},
        date_created: '1745602917553',
        hide_from_guests: false,
        required: false
      },
      {
        id: '97e1bae3-7751-40a7-b827-c963fb68659e',
        name: 'PORCENTAJE ERROR ASBUILT',
        type: 'number',
        type_config: {},
        date_created: '1705936284739',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'a263dd91-993e-4758-b112-07be364f3d0a',
        name: 'DESIGN BILLING STATUS',
        type: 'drop_down',
        type_config: {
          default: 0,
          placeholder: null,
          new_drop_down: true,
          options: [
            {
              id: '87fbd12d-4cd2-4c0e-9d9c-fb5b2b3931c1',
              name: 'DESIGN READY TO BILL',
              color: '#f9d900',
              orderindex: 0
            },
            {
              id: '16447d35-5678-4162-8249-5a50ade9a053',
              name: 'DESIGN BILLED',
              color: '#2ecd6f',
              orderindex: 1
            },
            {
              id: 'd319475e-6fe8-4822-a1d9-929041511ca0',
              name: 'NA',
              color: '#667684',
              orderindex: 2
            }
          ]
        },
        date_created: '1686679892984',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'a29b848b-028a-4aa5-acea-ab6f9304177c',
        name: 'FIRST REDESIGN QC SUBMISSION DATE 1',
        type: 'date',
        type_config: {},
        date_created: '1708004537456',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'ac0155fd-3295-46d6-b7c4-ec9018590053',
        name: 'FIRST ASBUILT QC SUBMISSION DATE 1',
        type: 'date',
        type_config: {},
        date_created: '1707130386779',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'b6db2ba3-86dd-4bdc-8999-2109573e8f53',
        name: 'N° CERTIFICADO WS',
        type: 'number',
        type_config: {},
        date_created: '1648821683357',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'b82eb0a3-7b88-477c-b11d-9c3d854675c8',
        name: 'DESIGN ASSIGNEE',
        type: 'users',
        type_config: {
          single_user: false,
          include_groups: true,
          include_guests: true,
          include_team_members: true
        },
        date_created: '1727188707116',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'b90da633-7753-41d7-90d5-7b2207cc4a4f',
        name: 'REDESIGN MILES',
        type: 'formula',
        type_config: {
          simple: false,
          formula: 'CUSTOM_FIELD_4ec8d659_1037_4662_b228_e05c3228b374*0.56',
          version: '1.11',
          is_dynamic: false,
          return_types: [
            'null',
            'number'
          ],
          calculation_state: 'ready'
        },
        date_created: '1740772022383',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'bba00f93-ea25-4964-93e7-7b4e6d33c34c',
        name: 'REGION',
        type: 'drop_down',
        type_config: {
          sorting: 'manual',
          new_drop_down: true,
          options: [
            {
              id: 'd62c9844-71f5-4a11-bd2c-2c42e53ec1b0',
              name: 'TWNTX',
              color: null,
              orderindex: 0
            },
            {
              id: '6c6a952d-1701-4c28-b81a-f52e1833710b',
              name: 'TWSTX',
              color: null,
              orderindex: 1
            },
            {
              id: 'e09adf62-849c-47a9-85d2-154d3ba8c6e3',
              name: 'TWEPTX',
              color: null,
              orderindex: 2
            },
            {
              id: 'fbfb9e6d-73b1-4f11-b63b-9c9ba65ef98a',
              name: 'TWGTTX',
              color: null,
              orderindex: 3
            },
            {
              id: 'bb9409d6-ef80-44d6-9ea5-a346d4f9f5b9',
              name: 'CHFIBER',
              color: null,
              orderindex: 4
            },
            {
              id: '1b1cb48b-38ea-4ce9-90b9-dab0d39c66fe',
              name: 'CFL',
              color: null,
              orderindex: 5
            },
            {
              id: '4de38cf3-0722-40e5-9f7d-32ccbdc02b16',
              name: 'TWSIBER',
              color: null,
              orderindex: 6
            },
            {
              id: '526c54d7-f3bc-49c0-bf36-7547c64e9af7',
              name: 'TWCHV',
              color: null,
              orderindex: 7
            },
            {
              id: 'b9c6d663-3eee-4944-b0ef-13fc82c15b5e',
              name: 'DETROIT',
              color: null,
              orderindex: 8
            },
            {
              id: '48640736-40b5-4cd9-a795-855203f58fca',
              name: 'TWBQ',
              color: null,
              orderindex: 9
            },
            {
              id: '80383462-a06b-4167-b8a7-2ef3444d4e93',
              name: 'SCALENT',
              color: null,
              orderindex: 10
            },
            {
              id: '99ecfad0-e5cf-41a8-80db-38b5c010aa40',
              name: 'TWNOH',
              color: null,
              orderindex: 11
            },
            {
              id: '77b46de8-faf4-4d4f-9798-57f6813834e0',
              name: 'TWKIWI',
              color: null,
              orderindex: 12
            },
            {
              id: '571ea6e6-3ef1-4b32-9bab-6f117863120e',
              name: 'LASOUTH',
              color: null,
              orderindex: 13
            },
            {
              id: 'e71bdbd7-5eb4-4d29-9ff2-9ec96a3faa2d',
              name: 'LAMETRO',
              color: null,
              orderindex: 14
            },
            {
              id: '135e6636-c31b-4542-9eac-9cd7843ab413',
              name: 'TWMAN',
              color: null,
              orderindex: 15
            },
            {
              id: 'ce413cbf-0fe1-4e17-a8b6-cc0277cfd506',
              name: 'TWCKC',
              color: null,
              orderindex: 16
            },
            {
              id: '54fe9965-5c77-404a-a7b4-00744d61ec66',
              name: 'LANORTH',
              color: null,
              orderindex: 17
            },
            {
              id: 'ca4975a1-bfe5-4396-b6fd-1472a63fb0ce',
              name: 'TAMPABAY',
              color: null,
              orderindex: 18
            },
            {
              id: '93535174-e1cf-4655-84bc-895f713b30b1',
              name: 'TWSOH',
              color: null,
              orderindex: 19
            },
            {
              id: '69902759-91fd-4ae4-ac53-2ac0a9cf784d',
              name: 'TWMAINE',
              color: null,
              orderindex: 20
            },
            {
              id: '9e45d976-5c4a-4f33-a680-4fc39a863b32',
              name: 'TWNW',
              color: null,
              orderindex: 21
            },
            {
              id: '6c730e24-cdb5-4bbf-bf8b-b7fdb10c5a78',
              name: 'TWRAL',
              color: null,
              orderindex: 22
            },
            {
              id: '78dff1f0-e507-4d9c-8c82-ddeec5c603cc',
              name: 'TWCV',
              color: null,
              orderindex: 23
            },
            {
              id: '6775e215-7770-40e2-b6d3-8d04a8abdd3f',
              name: 'TWCLT',
              color: null,
              orderindex: 24
            },
            {
              id: '634e20ac-5523-4367-be34-b66ba9b43b89',
              name: 'BIRMINGHAM',
              color: null,
              orderindex: 25
            },
            {
              id: 'f09dfcf7-51f9-4ba9-a6ca-00c3093946b2',
              name: 'TWGBO',
              color: null,
              orderindex: 26
            },
            {
              id: '21dad535-2283-49ee-a98b-bb46a38b2544',
              name: 'TWSCAL',
              color: null,
              orderindex: 27
            },
            {
              id: '44cefce6-a79e-4b9c-b85f-9110b2672261',
              name: 'TEXMEX',
              color: null,
              orderindex: 28
            },
            {
              id: '63dead8b-c339-471d-8b8e-2238411d72df',
              name: 'TWSC',
              color: null,
              orderindex: 29
            },
            {
              id: 'a0605301-b01c-496f-917d-3a1099071db1',
              name: 'TWSYRA',
              color: null,
              orderindex: 30
            },
            {
              id: '2a8cb274-357f-48eb-a397-ac8ec45fac8d',
              name: 'TWWISC',
              color: null,
              orderindex: 31
            },
            {
              id: '8afb7cbf-d6e5-45b3-9d04-a8441375644e',
              name: 'TWALB',
              color: null,
              orderindex: 32
            },
            {
              id: '512fa2c2-7226-4001-b47f-0e0027eeda59',
              name: 'TWCOLU',
              color: null,
              orderindex: 33
            },
            {
              id: '20997adc-4a3b-493a-8c34-af5eba8156cd',
              name: 'TWCO',
              color: null,
              orderindex: 34
            },
            {
              id: 'b10f3236-be13-4212-9972-2910cd3ce716',
              name: 'INDY',
              color: null,
              orderindex: 35
            },
            {
              id: 'a8f3ae0e-d348-4dae-9f4e-ac416b5a6101',
              name: 'TWCNE',
              color: null,
              orderindex: 36
            },
            {
              id: '005220d8-456b-4b5e-b43e-28b2f1bc2370',
              name: 'TWYUMA',
              color: null,
              orderindex: 37
            },
            {
              id: '39a270ff-d698-44aa-ac63-4d37e99bd35b',
              name: 'WLIN',
              color: null,
              orderindex: 38
            },
            {
              id: '1b3183df-578f-450c-bfac-77157d79f17c',
              name: 'TWLIN',
              color: null,
              orderindex: 39
            },
            {
              id: '22b75b0c-c948-4c3c-b2e8-8582f4139db0',
              name: 'TWCAL',
              color: null,
              orderindex: 40
            },
            {
              id: '440c22b6-48b3-4001-bd12-a5953b24da58',
              name: 'DUKENET',
              color: null,
              orderindex: 41
            }
          ]
        },
        date_created: '1684847902903',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'c6cf6d2a-0e29-4855-8318-472066721a55',
        name: 'FECHA CERTIFICADO',
        type: 'date',
        type_config: {},
        date_created: '1648228873584',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'c87d19db-ac1a-4fe0-9d62-7d928a41e50a',
        name: 'HUB',
        type: 'short_text',
        type_config: {},
        date_created: '1710939666402',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'd059674c-de1d-4940-8cc2-3fd9546615aa',
        name: 'TRU Completed',
        type: 'date',
        type_config: {},
        date_created: '1617298330194',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'd281788f-5911-4954-82db-3616de342644',
        name: 'ASBUILT ROUNDED MILES',
        type: 'number',
        type_config: {},
        date_created: '1722442786414',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'd723d3df-b63f-46a2-9f48-02709670787b',
        name: 'CHECKED FOR SUBCO',
        type: 'labels',
        type_config: {
          options: [
            {
              id: '6f05f0da-8a0e-417e-980e-55530898e0b9',
              label: 'ASBUILT CHECKED',
              color: '#1bbc9c'
            },
            {
              id: 'da3b1495-c805-44d3-a595-e63bd997f8c1',
              label: 'DESIGN CHECKED',
              color: '#2ecd6f'
            },
            {
              id: 'fb617218-4b92-4ba2-93da-5801eae74ba3',
              label: 'REDESIGN CHECKED',
              color: '#EA80FC'
            },
            {
              id: '29b518c0-d946-4f5a-b624-cf5bed878d05',
              label: '0/11/24',
              color: '#E65100'
            }
          ]
        },
        date_created: '1686831149986',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'de3e3c1b-d925-4d2a-8ea8-605214a0ec04',
        name: 'ASBUILT MILES',
        type: 'number',
        type_config: {},
        date_created: '1719239417664',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'dea7eeaa-ead6-42ea-840d-008c32e7282f',
        name: 'PODS (CCI)',
        type: 'drop_down',
        type_config: {
          sorting: 'name_asc',
          new_drop_down: true,
          options: [
            {
              id: '8c1fab3e-3232-415d-9191-ad8285669c6e',
              name: '780-626',
              color: null,
              orderindex: 0
            },
            {
              id: 'da19862d-8666-4d45-ad64-553350fc9e01',
              name: '780-644',
              color: null,
              orderindex: 1
            },
            {
              id: '96eb7e8b-8ac7-4647-a2d7-85f11bade316',
              name: '780-743',
              color: null,
              orderindex: 2
            },
            {
              id: '8fd7714d-94f4-4e9d-a611-b8e855de9da8',
              name: '780-746',
              color: null,
              orderindex: 3
            },
            {
              id: '6601aeaf-034e-41ce-a603-b9d8bc8f4b5f',
              name: '780-815',
              color: null,
              orderindex: 4
            },
            {
              id: '19b2d9d8-2f45-45ad-87ae-cb3d36986663',
              name: '780-816',
              color: null,
              orderindex: 5
            },
            {
              id: 'b42869c3-15c9-4ef8-ae13-b9828ce27097',
              name: '780-817',
              color: null,
              orderindex: 6
            },
            {
              id: 'e124d69c-5885-4f44-bcfa-0348d615a770',
              name: '780-818',
              color: null,
              orderindex: 7
            },
            {
              id: 'd0413d99-f955-4fa3-9eb5-3156fc15ec37',
              name: '780-823',
              color: null,
              orderindex: 8
            },
            {
              id: '90587a9a-03f6-43ec-9aa4-1e9024885bd8',
              name: '780-824',
              color: null,
              orderindex: 9
            },
            {
              id: 'e41c9e69-412c-4a06-b880-109e79889818',
              name: '780-832',
              color: null,
              orderindex: 10
            },
            {
              id: 'fe4cf9b4-da42-4596-9e26-b82841f4acbc',
              name: '780-862',
              color: null,
              orderindex: 11
            },
            {
              id: 'e1e315c9-dc55-4e1c-acca-e41ad9b60160',
              name: '781-043',
              color: null,
              orderindex: 12
            },
            {
              id: '4ece8746-c06c-4c86-92f8-5da1b74a55f7',
              name: '781-044',
              color: null,
              orderindex: 13
            },
            {
              id: 'f0e3a7a9-aa3e-49d6-8e94-412425d88d6c',
              name: '781-045',
              color: null,
              orderindex: 14
            },
            {
              id: '756b258b-8168-426e-9dc9-678fa714a8ab',
              name: '781-046',
              color: null,
              orderindex: 15
            }
          ]
        },
        date_created: '1687363336131',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'e1edd040-64af-4036-8012-9b9c29fc5f11',
        name: 'DESIGN ROUNDED MILES',
        type: 'number',
        type_config: {},
        date_created: '1722442806835',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'e22ed1ec-1445-4909-a704-78e54cfbdc1d',
        name: 'SPECS_HS',
        type: 'drop_down',
        type_config: {
          sorting: 'manual',
          new_drop_down: true,
          options: [
            {
              id: '33ca859b-2dc9-40fb-b8b5-87509789b2fe',
              name: 'GTI_870',
              color: null,
              orderindex: 0
            },
            {
              id: '82ec437e-5ecc-4d3a-ad7e-73367b454fa9',
              name: 'MSI_870',
              color: null,
              orderindex: 1
            },
            {
              id: '25821ece-93a3-41ba-ba41-80704c3b6770',
              name: 'SWO870',
              color: null,
              orderindex: 2
            },
            {
              id: 'eb9ecd78-cdff-4999-b843-5a704ec27980',
              name: 'LKY750',
              color: null,
              orderindex: 3
            },
            {
              id: 'c4001a0e-cc90-437e-8678-adf760a1f3b8',
              name: 'STL_870',
              color: null,
              orderindex: 4
            },
            {
              id: '8cde5a5b-ddc0-497f-9cc0-70456ac2775a',
              name: 'LX750',
              color: null,
              orderindex: 5
            },
            {
              id: '60c68e9b-5359-4dfd-a8ce-d81c845766b5',
              name: 'PHI_870',
              color: null,
              orderindex: 6
            },
            {
              id: 'e120695e-6c36-49be-a659-bb9c96afe257',
              name: 'ROC87_1',
              color: null,
              orderindex: 7
            },
            {
              id: 'b5a8efc2-1d8d-4e52-a052-ef3422285cb2',
              name: 'CLHT750',
              color: null,
              orderindex: 8
            },
            {
              id: '80fa22c8-f33f-4790-8dfd-80428292e629',
              name: 'ROC75_2',
              color: null,
              orderindex: 9
            },
            {
              id: '099bc859-e1d5-40e1-a962-9cb0a9e3b024',
              name: 'ROC75_1',
              color: null,
              orderindex: 10
            },
            {
              id: '546e15c9-f853-4f3e-94ca-1ee37f1c0aab',
              name: 'TWC870',
              color: null,
              orderindex: 11
            },
            {
              id: '4053261e-50d3-4ef5-81d2-21f51bd7a79e',
              name: 'FTW870',
              color: null,
              orderindex: 12
            },
            {
              id: '90697834-261f-429c-b56d-2d625925f1a9',
              name: 'MN750_1',
              color: null,
              orderindex: 13
            },
            {
              id: 'e601a520-f126-42fd-8dbc-b8d0353e0629',
              name: 'CHART750',
              color: null,
              orderindex: 14
            },
            {
              id: '8d63d05a-afbc-4601-83a0-8ed5ba96f653',
              name: 'FLGVOL',
              color: null,
              orderindex: 15
            },
            {
              id: '3c1f4548-48b6-497c-830c-abda7b505a07',
              name: '1GIG',
              color: null,
              orderindex: 16
            },
            {
              id: '26dc3330-fc2f-41ff-af23-88d3e0c7b576',
              name: 'NEW1GHZ',
              color: null,
              orderindex: 17
            },
            {
              id: '7245493a-1f82-4313-8159-a109b529223e',
              name: 'AUS750',
              color: null,
              orderindex: 18
            },
            {
              id: '5904fa93-69ad-4a1b-8a41-e4ca2bfaa6a6',
              name: 'AUS870',
              color: null,
              orderindex: 19
            },
            {
              id: '37369851-e526-447a-baf8-eb60285f8e27',
              name: 'AUS1GZ',
              color: null,
              orderindex: 20
            },
            {
              id: '0530f2d3-01f7-4d9f-a777-9efaea423cbc',
              name: 'STI862',
              color: null,
              orderindex: 21
            },
            {
              id: '935b8a5b-c5b5-43c5-a321-6e9724f39691',
              name: 'BER862',
              color: null,
              orderindex: 22
            },
            {
              id: '101f2ace-04b7-4421-a8ed-77b5750dde63',
              name: 'DURCH750',
              color: null,
              orderindex: 23
            },
            {
              id: '3a1e62ff-0059-4aba-81c4-67f26ca238eb',
              name: 'T_1GIG_NEW',
              color: null,
              orderindex: 24
            },
            {
              id: '84006518-8d2c-409d-9095-856e4b54a638',
              name: '1GIG_NEW',
              color: null,
              orderindex: 25
            },
            {
              id: '4a924ba4-e3a9-4367-9aef-8c5422253de0',
              name: '870_NEW',
              color: null,
              orderindex: 26
            },
            {
              id: 'ae29356a-b943-4828-89eb-eaf80741189e',
              name: 'HV860_01',
              color: null,
              orderindex: 27
            },
            {
              id: '21fc3826-63ce-44a6-903f-43842a34ce72',
              name: 'LB870',
              color: null,
              orderindex: 28
            },
            {
              id: '30c75ce9-824f-468c-a2a4-4d1351f13bc6',
              name: 'GA750_5',
              color: null,
              orderindex: 29
            },
            {
              id: '53d59c87-1aeb-4d98-928c-6af2312ce068',
              name: 'DET1GIG',
              color: null,
              orderindex: 30
            },
            {
              id: '5e6e1c2a-0a12-42b3-8bee-d17b937cc2ea',
              name: 'NKY750',
              color: null,
              orderindex: 31
            },
            {
              id: 'eb04cdc1-66cb-4582-a76b-c9eb7b7696fc',
              name: 'BKLYN8',
              color: null,
              orderindex: 32
            },
            {
              id: '2fb11d36-4d98-4413-a863-e53c45234341',
              name: 'HOKE750',
              color: null,
              orderindex: 33
            },
            {
              id: '3798bd80-7419-4a33-9eb6-c575b7260ebc',
              name: 'NE870_02',
              color: null,
              orderindex: 34
            },
            {
              id: '1cf28104-0db5-4668-a2d5-780c0b7e7b9b',
              name: 'SCA860_2',
              color: null,
              orderindex: 35
            },
            {
              id: 'c305e931-9365-42e4-8b16-d4201d2bfd53',
              name: 'ALB75_8',
              color: null,
              orderindex: 36
            },
            {
              id: '6bcd0298-60c0-47a6-b780-800dcd6526f9',
              name: 'ALB75_5',
              color: null,
              orderindex: 37
            },
            {
              id: '68fe6a1b-9410-468e-8ab8-fe8285875c80',
              name: 'LASOUTH',
              color: null,
              orderindex: 38
            },
            {
              id: 'b527583e-31fe-4767-a2ce-8ee9b709d3c5',
              name: 'ALB75_6',
              color: null,
              orderindex: 39
            },
            {
              id: 'e33f58d2-f595-4739-a86d-fed25c860f93',
              name: 'UPG750',
              color: null,
              orderindex: 40
            },
            {
              id: 'a918c85f-dcfb-4a48-9638-87e7605210dd',
              name: 'NEWBAKER',
              color: null,
              orderindex: 41
            },
            {
              id: 'f824b769-f85a-45a6-830f-80289cd4dc87',
              name: 'CNY10_1',
              color: null,
              orderindex: 42
            },
            {
              id: '9c211e2a-989f-4a65-a57d-ab38dae2b860',
              name: 'CNY10_3',
              color: null,
              orderindex: 43
            },
            {
              id: 'a170dc5e-56e0-41c6-a993-ec5a16d9fa7a',
              name: 'ALB87_2',
              color: null,
              orderindex: 44
            },
            {
              id: 'eef6a4dd-6a85-4fd5-9d31-6bcd77590360',
              name: 'ALB1G_4',
              color: null,
              orderindex: 45
            },
            {
              id: 'b9d1814d-c6ff-4475-86ed-be775734ff5b',
              name: 'ALB75_4',
              color: null,
              orderindex: 46
            },
            {
              id: '8cf248be-1504-40f8-a648-eec2d2da5f7c',
              name: 'CORRY750',
              color: null,
              orderindex: 47
            },
            {
              id: '6ef657c0-ea6f-486c-b11a-6161122ac159',
              name: 'ALB1G_2',
              color: null,
              orderindex: 48
            },
            {
              id: '855c4a21-99ae-4c33-bab9-dd2f888cc1ba',
              name: 'HS_TWC870',
              color: null,
              orderindex: 49
            },
            {
              id: 'c47b7f9c-af58-4f63-b994-9948c0ae2362',
              name: 'ALB1G_3',
              color: null,
              orderindex: 50
            },
            {
              id: '26899370-601a-453b-a809-feda663c8901',
              name: 'ALB75_1',
              color: null,
              orderindex: 51
            },
            {
              id: 'a81186af-a2e9-4b36-ab9e-d767f7c01e3e',
              name: 'MLA_MOTO',
              color: null,
              orderindex: 52
            },
            {
              id: '7ba7fdde-56c6-4000-8465-a311487ef888',
              name: 'AL750_8',
              color: null,
              orderindex: 53
            },
            {
              id: '0ce82b98-9f77-4dba-bfda-120ec7b147dd',
              name: 'MN750_2',
              color: null,
              orderindex: 54
            },
            {
              id: '01a1af79-56bb-4e6d-a4da-e12ff28b3bb7',
              name: 'HS_ROC87_1',
              color: null,
              orderindex: 55
            },
            {
              id: '4615da4a-34b9-4710-a023-cddde8083597',
              name: 'HS_LKY750',
              color: null,
              orderindex: 56
            },
            {
              id: 'c85c49c0-0c2a-4973-9100-5c3f696869ba',
              name: 'HS_TWMAINE_1.0',
              color: null,
              orderindex: 57
            },
            {
              id: 'aed2114f-2bf5-49a3-87be-b93710763ecd',
              name: 'BILL750',
              color: null,
              orderindex: 58
            },
            {
              id: 'c2f76ec3-2048-4763-9f25-2e76b33425e7',
              name: 'RED550',
              color: null,
              orderindex: 59
            },
            {
              id: '8921f956-4231-4c13-af02-1635f41e90fb',
              name: 'RGV870',
              color: null,
              orderindex: 60
            },
            {
              id: '451e7c19-be1b-47ed-9e52-7977f438b588',
              name: 'EP862UP',
              color: null,
              orderindex: 61
            },
            {
              id: 'e077e11c-625f-41f9-815d-b262a8441689',
              name: 'HS_TEXMEX_1.0',
              color: null,
              orderindex: 62
            },
            {
              id: '302c3545-dfaa-4305-bde2-6cf1281061dd',
              name: 'EP1002',
              color: null,
              orderindex: 63
            },
            {
              id: '181e9658-58c1-4bff-887b-767cffa4382e',
              name: 'HS_TWEPTX_1.0',
              color: null,
              orderindex: 64
            },
            {
              id: '68940bc4-6ca5-4fb4-ae9c-958de168051b',
              name: 'EP862',
              color: null,
              orderindex: 65
            },
            {
              id: '5b2669b5-e641-4800-b4d6-8836f77f5324',
              name: 'LAS_RC01',
              color: null,
              orderindex: 66
            },
            {
              id: '1c83d6c6-a2e2-4669-a3cc-9363d0bcc584',
              name: 'LAMETRO',
              color: null,
              orderindex: 67
            },
            {
              id: 'daf29430-ebff-41e9-b1e0-34469640e9da',
              name: 'LAM870_1',
              color: null,
              orderindex: 68
            },
            {
              id: '52144bfb-fb98-4c53-a65c-dd19e65ab49e',
              name: 'MAN870',
              color: null,
              orderindex: 69
            },
            {
              id: '73d44de6-c119-41c3-8019-06d248eab159',
              name: 'TWA1GHZ',
              color: null,
              orderindex: 70
            },
            {
              id: 'cc1bd7e3-1f03-4a1f-a3ba-58983933dc35',
              name: 'CA750_1',
              color: null,
              orderindex: 71
            },
            {
              id: '68aa6d66-9ff0-4839-8559-7bbd8800f8c5',
              name: 'HS_TWCHV_1.0',
              color: null,
              orderindex: 72
            },
            {
              id: '453276a3-7a8b-44a1-b05e-3ce49d1e6b5f',
              name: 'LAM750_1',
              color: null,
              orderindex: 73
            },
            {
              id: '3a2014fe-b9bc-4dcc-bfe7-d4e3693ab667',
              name: 'KC750',
              color: null,
              orderindex: 74
            },
            {
              id: '4589f5d8-5185-42db-bdb6-829f2933c524',
              name: 'PALM',
              color: null,
              orderindex: 75
            },
            {
              id: 'bab3934f-b39d-4b79-bb36-4b9602ba3c00',
              name: '1_GHZ',
              color: null,
              orderindex: 76
            },
            {
              id: '720b8f16-20ec-41a0-a95a-0227a4a96a2c',
              name: 'DEN550',
              color: null,
              orderindex: 77
            },
            {
              id: '85f3dcac-f361-490f-bae6-d3ff5d7b70eb',
              name: '870R1GHZ',
              color: null,
              orderindex: 78
            },
            {
              id: '07a3095e-82e4-4de8-80b1-ae55aa36a02b',
              name: 'SATX1G_N1',
              color: null,
              orderindex: 79
            },
            {
              id: 'a241a2f1-8863-4832-a807-58e366e5c5dc',
              name: 'SATX750',
              color: null,
              orderindex: 80
            },
            {
              id: '9a3a8318-92c3-45e0-b44a-7a082c54635a',
              name: 'DAY870',
              color: null,
              orderindex: 81
            },
            {
              id: 'da192a3f-c2d3-4ee1-ae38-e9c3cee71359',
              name: 'HS_CHFIBER_1.0',
              color: null,
              orderindex: 82
            },
            {
              id: '6b994094-c0e4-4d8f-ac2a-64bc3e784a1b',
              name: 'HS_TWALB_1.0',
              color: null,
              orderindex: 83
            },
            {
              id: 'c65209b9-6fec-49a6-88a8-c7d452320f08',
              name: 'LAM870_2',
              color: null,
              orderindex: 84
            },
            {
              id: '3043e978-a9e9-4dfa-9d9b-8ffa573a2c4d',
              name: 'WA860_1',
              color: null,
              orderindex: 85
            },
            {
              id: 'eb23fb0f-d691-4bfb-a3c2-4735a41cd4c4',
              name: 'DAYT860',
              color: null,
              orderindex: 86
            },
            {
              id: 'fc7270e3-17a1-4058-b292-8b2ce0892d26',
              name: 'OSC870_1',
              color: null,
              orderindex: 87
            },
            {
              id: '2f016d7e-19d1-4a61-a33b-39b7fb1bd226',
              name: 'TN860_1',
              color: null,
              orderindex: 88
            },
            {
              id: '4e3b5d28-8e57-48a8-ab77-d4db5c9f244c',
              name: 'NHAM750',
              color: null,
              orderindex: 89
            },
            {
              id: '2c53f5cf-b962-418b-b249-42dd21eb2014',
              name: 'FBB_750',
              color: null,
              orderindex: 90
            },
            {
              id: 'f8be52b9-6fb0-4f8f-81f7-a387a77f007a',
              name: 'FDP1_750',
              color: null,
              orderindex: 91
            },
            {
              id: '83b73c61-c4bc-4324-b56e-e7f9f13531a4',
              name: 'TWC2003',
              color: null,
              orderindex: 92
            },
            {
              id: 'cc174a87-704f-4ccd-9c69-106e5610ff4b',
              name: 'COI_870',
              color: null,
              orderindex: 93
            },
            {
              id: 'f4675787-c440-4106-9571-2f47da177ddc',
              name: 'TWC2006',
              color: null,
              orderindex: 94
            },
            {
              id: '265b7c4e-37a6-4037-a1b0-da6dcff3198f',
              name: 'NOE860_2',
              color: null,
              orderindex: 95
            },
            {
              id: '0821a12f-2b59-43f1-a96b-9bf363d4f5e8',
              name: 'LUD870',
              color: null,
              orderindex: 96
            },
            {
              id: '14d97205-0b14-4497-938e-2f1d01fe26f6',
              name: 'CC870',
              color: null,
              orderindex: 97
            },
            {
              id: '3bf32ef3-b6ec-4451-9b22-82ab6ef458ea',
              name: 'LA_PHIL',
              color: null,
              orderindex: 98
            },
            {
              id: '7d1f81a9-8dac-499a-88b5-f22f1cfbbd9c',
              name: 'MT860_1',
              color: null,
              orderindex: 99
            },
            {
              id: '0bcb10c6-619e-42db-901a-e07f704e2778',
              name: 'MT860_2',
              color: null,
              orderindex: 100
            },
            {
              id: '469e5aac-32f8-4f9f-950a-08400dbe98cf',
              name: 'LAS_OC11',
              color: null,
              orderindex: 101
            },
            {
              id: 'c1d65db7-116e-4558-ada8-6b55a5ccd8c4',
              name: 'HS_TWBQ_1.0',
              color: null,
              orderindex: 102
            },
            {
              id: '3bd1f15a-517c-4da6-af81-fe49a027d4f8',
              name: 'HS_FTW870',
              color: null,
              orderindex: 103
            },
            {
              id: '7cad4208-bac7-4da5-9acd-1a1727e3ee82',
              name: 'NE860_1',
              color: null,
              orderindex: 104
            },
            {
              id: '119a7288-9082-4ecc-8caa-6fe36aa92b8d',
              name: 'YUMA750',
              color: null,
              orderindex: 105
            },
            {
              id: 'd7595b00-d798-44ec-8153-3fa49ad1b00e',
              name: 'TN750_8',
              color: null,
              orderindex: 106
            },
            {
              id: '56bac25f-be17-4558-91f1-09f2ce51830d',
              name: 'HS_TWSIBER_1.0',
              color: null,
              orderindex: 107
            },
            {
              id: '691ec252-625c-4bac-9d77-36331137b5d9',
              name: 'BEVE870',
              color: null,
              orderindex: 108
            },
            {
              id: 'bfc74e0e-8ac3-4e9f-bded-e9783362143b',
              name: 'CNY86_3',
              color: null,
              orderindex: 109
            },
            {
              id: '3d5ededf-98f4-49a9-8cef-083344804a7f',
              name: 'RP1GZ',
              color: null,
              orderindex: 110
            },
            {
              id: '27c4ee78-23d4-4447-bbe5-fd56e89102af',
              name: 'USCBL8MO_870',
              color: null,
              orderindex: 111
            },
            {
              id: '64eddb88-7c37-45ed-b4ae-49c4c290bd41',
              name: 'COLUMBIA870',
              color: null,
              orderindex: 112
            },
            {
              id: '6421bc1a-ceef-4dec-b7b8-3434705fbef6',
              name: 'MOB870',
              color: null,
              orderindex: 113
            },
            {
              id: 'a93fffe0-01da-4277-b584-ccbfaf3c9cce',
              name: 'HS_TAMPABAY_1.0',
              color: null,
              orderindex: 114
            },
            {
              id: 'bc25697d-b5a7-4a73-872a-ca8a5b6134b6',
              name: 'HS_TECHNETIX_OTTZ_1800_1.0',
              color: null,
              orderindex: 115
            },
            {
              id: 'f9feec11-3beb-4eb8-90e0-1bbe96fa71a8',
              name: 'HS_LASOUTH_1.0',
              color: null,
              orderindex: 116
            },
            {
              id: '76aa716a-da4a-4845-ab8e-42f6c6bca426',
              name: 'HS_TWYUMA_1.0',
              color: null,
              orderindex: 117
            },
            {
              id: '5d18c058-588f-44a7-95bb-2a50395f3498',
              name: 'FULTON870',
              color: null,
              orderindex: 118
            },
            {
              id: '22b5ee54-ec67-4fd8-b19c-8b2cfc68c84e',
              name: 'MEX870',
              color: null,
              orderindex: 119
            },
            {
              id: '2e095c05-cda1-493a-8d47-1139f466b4e8',
              name: '870_1GIGSA_CISCO',
              color: null,
              orderindex: 120
            },
            {
              id: '7e02e360-a4e5-4f31-9120-f301034cf762',
              name: 'HS_SCALENT_1.0',
              color: null,
              orderindex: 121
            },
            {
              id: 'f2cd6f86-ab40-4771-9b86-a6a65c687ab7',
              name: 'AND862',
              color: null,
              orderindex: 122
            },
            {
              id: '488bd7d2-6735-456a-b5e1-abe502f79ea2',
              name: 'HS_TWKIWI_1.0',
              color: null,
              orderindex: 123
            },
            {
              id: 'f48b6754-82c8-43cb-83bf-2b76e23a9474',
              name: 'CNY10_2',
              color: null,
              orderindex: 124
            },
            {
              id: '7a8ba151-f14d-41a6-8e45-29a481a9842b',
              name: 'DEFI870',
              color: null,
              orderindex: 125
            },
            {
              id: '107d491c-ef60-4b26-8770-2984e7576459',
              name: 'SAG870_2',
              color: null,
              orderindex: 126
            },
            {
              id: 'f9a58494-789b-478c-a1ed-d30b6e51b1d7',
              name: 'NOE750_5',
              color: null,
              orderindex: 127
            }
          ]
        },
        date_created: '1677420666565',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'e4ae3c81-f4cd-4e07-a8c1-0e50490e6bdb',
        name: 'Timetracked',
        type: 'checkbox',
        type_config: {},
        date_created: '1738076374692',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'e574328b-b173-49c8-a639-a077f5ed1875',
        name: 'PREASBUILT ACTUAL COMPLETION DATE ',
        type: 'date',
        type_config: {},
        date_created: '1694797540650',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'ed83fc7c-baeb-4fdc-8e59-7ccbb4587cd5',
        name: 'ACTUAL COMPLETION DATE',
        type: 'date',
        type_config: {},
        date_created: '1684239881618',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'ef2a5d08-734c-4197-8ce7-66c1f7d0d162',
        name: 'DESIGN QC BY',
        type: 'users',
        type_config: {
          single_user: false,
          include_groups: true,
          include_guests: true,
          include_team_members: false
        },
        date_created: '1696339442170',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'f0a5484a-3758-4368-8ebc-ba93983fbc1f',
        name: 'HUB',
        type: 'drop_down',
        type_config: {
          sorting: 'name_asc',
          new_drop_down: true,
          options: [
            {
              id: '8fc923e6-d059-4e74-86d9-53da07477b13',
              name: ' HUNTER-5-E-TX',
              color: null,
              orderindex: 0
            },
            {
              id: '73e1da89-6e14-47df-8542-fe3596b623e1',
              name: ' ORANGEBURG-SC',
              color: null,
              orderindex: 1
            },
            {
              id: '51f24508-0725-4389-bc8e-28c82a2c231f',
              name: '10 - CHENAULT-TX-RDC',
              color: null,
              orderindex: 2
            },
            {
              id: 'e1a2e265-e72e-43d4-b52a-7d59e6fffb62',
              name: '19 - MESQUITE-19-TX',
              color: null,
              orderindex: 3
            },
            {
              id: '92d16f42-47f8-466b-8608-e2229720ebfd',
              name: '1F - LANCASTER-1F-TX',
              color: null,
              orderindex: 4
            },
            {
              id: '0ca5a49c-2255-48cc-bd07-d763c09f5d1e',
              name: '1M - WYLIE-1M-TX',
              color: null,
              orderindex: 5
            },
            {
              id: 'e5eff45e-9138-4f21-aa03-a7991c73a7c5',
              name: '22 - COIT-22-TX',
              color: null,
              orderindex: 6
            },
            {
              id: '990ed20e-b02d-4b0f-91aa-ec183cd09958',
              name: '24 - MCKINNEY-24-TX',
              color: null,
              orderindex: 7
            },
            {
              id: '403865e4-9d70-4251-b727-efd372e7fc79',
              name: '25 - FRISCO-25-TX',
              color: null,
              orderindex: 8
            },
            {
              id: '0443c917-47cf-46cd-976f-860be873844a',
              name: '2P - PAMPLICO-SC',
              color: null,
              orderindex: 9
            },
            {
              id: 'a0216d08-eab6-447a-91cb-4cb26d55d89a',
              name: '39 - BEDFORD-39-TX',
              color: null,
              orderindex: 10
            },
            {
              id: '1871bb38-16fc-40b7-9bb9-990bcb5b388c',
              name: '3Y - SUMTER-SC',
              color: null,
              orderindex: 11
            },
            {
              id: '8060d60e-33c8-46cc-b045-0034448646b6',
              name: '57 - NEWARK-OH',
              color: null,
              orderindex: 12
            },
            {
              id: '1541884a-3b94-44ef-a12b-48cbf479e897',
              name: '65 - WASHINGTON-COURTHOUSE-OH',
              color: null,
              orderindex: 13
            },
            {
              id: 'd0c2e25d-4818-4b81-b8be-cc27134efd69',
              name: 'ABRAMS-1C-TX',
              color: null,
              orderindex: 14
            },
            {
              id: 'c8524912-10d5-4840-a7e2-af6c0a9184b1',
              name: 'ACCOMAC-VA',
              color: null,
              orderindex: 15
            },
            {
              id: '276d87ac-3bd8-48ea-8abf-66d212e42d9e',
              name: 'AG - AGOURA-CA',
              color: null,
              orderindex: 16
            },
            {
              id: 'da3efc14-602d-44e4-9496-772fdbb39a6b',
              name: 'AGOURA-CA',
              color: null,
              orderindex: 17
            },
            {
              id: 'd4373964-d7f1-4faa-a11a-9e86ee781d85',
              name: 'ALLENDALE-MI-MDC',
              color: null,
              orderindex: 18
            },
            {
              id: '0fe8a67e-4428-47fe-a725-22fb441650c0',
              name: 'ANAHEIM-CA',
              color: null,
              orderindex: 19
            },
            {
              id: 'a56ebcb3-f6ad-4390-b7e8-0e465e054dca',
              name: 'ASHFORD-CT',
              color: null,
              orderindex: 20
            },
            {
              id: '6e8ec7af-99b4-4b58-aaa6-82aba5d9a40b',
              name: 'BAZETTA - BAZETTA-OH',
              color: null,
              orderindex: 21
            },
            {
              id: 'af5896b8-b752-477b-be1c-cad458362cb6',
              name: 'BEVERLY-OH',
              color: null,
              orderindex: 22
            },
            {
              id: '16f0ab55-a510-4e3a-aca5-5832e686c613',
              name: 'BHAM10-HUB-C-AL',
              color: null,
              orderindex: 23
            },
            {
              id: 'eab499c3-26da-4d6b-8d4d-522ac3693203',
              name: 'BILLINGS_MT',
              color: null,
              orderindex: 24
            },
            {
              id: '5ba56fda-cf52-40fa-81ac-95889e3815d0',
              name: 'BKFD07-WASCO-CA',
              color: null,
              orderindex: 25
            },
            {
              id: 'd8b039cb-4e69-4559-a2e8-5f4aa45f06ac',
              name: 'BNGHNYA',
              color: null,
              orderindex: 26
            },
            {
              id: '0c88fee9-2b7f-41eb-b6b8-c5cce6ebb9bb',
              name: 'BUTTE-MT',
              color: null,
              orderindex: 27
            },
            {
              id: '71a5f5df-5d37-40df-9f42-41b7d1242d86',
              name: 'CANBY-NORG-CA',
              color: null,
              orderindex: 28
            },
            {
              id: '7c95fb65-c8ac-46b5-8e2f-fe6cbad3d09b',
              name: 'CARMEL-VALLEY-CA',
              color: null,
              orderindex: 29
            },
            {
              id: '07a15772-c801-44ad-9adf-0b0e59eb6b0b',
              name: 'CARROLLTON-1K',
              color: null,
              orderindex: 30
            },
            {
              id: '5e21bca7-fdee-49af-94b6-22136fec4597',
              name: 'CASPER-WY',
              color: null,
              orderindex: 31
            },
            {
              id: '33e0a952-e2e5-4660-b761-e5829b09ec06',
              name: 'CB - BUCKNER-C-TX',
              color: null,
              orderindex: 32
            },
            {
              id: '881443ed-b2e3-495a-83fe-0862503d18c0',
              name: 'CITY-OF-INDUSTRY-CA',
              color: null,
              orderindex: 33
            },
            {
              id: '3403d445-6d65-45ef-b01e-4df6194d1bb1',
              name: 'CLEVELAND-TN',
              color: null,
              orderindex: 34
            },
            {
              id: '6ffd5add-92e5-4a5b-a057-e8e439586d5d',
              name: 'COLDWATER-MI',
              color: null,
              orderindex: 35
            },
            {
              id: '6114a9dd-725d-4a06-a917-404b1d654edd',
              name: 'COOKEVILLE-TN',
              color: null,
              orderindex: 36
            },
            {
              id: '58e99bde-e3a3-48a1-917e-cb3f52901fe0',
              name: 'CORONA-CA',
              color: null,
              orderindex: 37
            },
            {
              id: 'ec62ebd4-8dcf-4f34-b429-bdab6862b2f8',
              name: 'COVINLA - COVINGTON-MANDEVILLE-LA',
              color: null,
              orderindex: 38
            },
            {
              id: '043a4dba-23e2-4c12-9755-81e9b770e3c7',
              name: 'DALLAS-1A-TX',
              color: null,
              orderindex: 39
            },
            {
              id: 'c5931e25-7f84-4132-b7f5-be847a94774b',
              name: 'DALLAS-WEST-SIDE-1D-TX',
              color: null,
              orderindex: 40
            },
            {
              id: '14a545f1-c85a-4243-b094-36dfcb585459',
              name: 'EAGLE-PASS-TX',
              color: null,
              orderindex: 41
            },
            {
              id: '10e0f30b-6844-4491-a4b1-82e315163e16',
              name: 'EAUCLAI - EAU-CLAIRE-WI-MDC',
              color: null,
              orderindex: 42
            },
            {
              id: '4ac54161-81e7-4c69-b607-461597863a4f',
              name: 'EDGEWOOD-COVINGTON-KY',
              color: null,
              orderindex: 43
            },
            {
              id: '9b49fe62-6f76-47c4-8e1d-9d1ec96a85ff',
              name: 'ESCALON-CA',
              color: null,
              orderindex: 44
            },
            {
              id: '6b98ab2d-9547-48b1-bd0f-74fb0fc63158',
              name: 'EVANSVILLE-NEWBURGH-IN',
              color: null,
              orderindex: 45
            },
            {
              id: '06449505-dd50-4792-b28f-8f157978d6a2',
              name: 'FEMRITE-WI',
              color: null,
              orderindex: 46
            },
            {
              id: '4260e039-dd0b-4b4c-b899-a9ad110f8a4e',
              name: 'FLORA-MO',
              color: null,
              orderindex: 47
            },
            {
              id: '85d2b71f-08d4-4466-8999-1c6b925f1710',
              name: 'FOOTHILLS-AZ',
              color: null,
              orderindex: 48
            },
            {
              id: '80d1277e-e5d4-4a9d-95e2-5887cb6ef814',
              name: 'FORT-WORTH-C-TX',
              color: null,
              orderindex: 49
            },
            {
              id: '4dee0cba-ff2d-4dfc-8f21-426ae49534c6',
              name: 'FORT-WORTH-E-TX',
              color: null,
              orderindex: 50
            },
            {
              id: 'a980f106-bedc-47bd-b4b8-286b7ddee4ac',
              name: 'FORT-WORTH-G-TX',
              color: null,
              orderindex: 51
            },
            {
              id: '9cf3f9e2-941b-4f31-8c24-8705fe44cf61',
              name: 'GARNER-HUB-K-NC',
              color: null,
              orderindex: 52
            },
            {
              id: '4999e6c6-d67b-43b2-a834-2c40e801ad08',
              name: 'GILROY - GILROY-CA',
              color: null,
              orderindex: 53
            },
            {
              id: '1a227ec7-3992-476a-8b2a-b8dc3984c3c7',
              name: 'GRANDJU - GRAND-JUNCTION-CO',
              color: null,
              orderindex: 54
            },
            {
              id: 'fad29c32-82d6-4bf6-a59a-02868215900c',
              name: 'GREENVILLE-SC',
              color: null,
              orderindex: 55
            },
            {
              id: '635181d1-c4f3-4a92-9093-deb084ba614a',
              name: 'GREENVILLE-TX',
              color: null,
              orderindex: 56
            },
            {
              id: 'aa2909fd-dbb3-41ef-98e1-a07456c2ca63',
              name: 'HAMMOND-LA',
              color: null,
              orderindex: 57
            },
            {
              id: 'f3a113a3-64bb-4ce1-befe-4152a2cc1b3c',
              name: 'HARBOR-WILMINGTON-CA',
              color: null,
              orderindex: 58
            },
            {
              id: 'ac2b0de1-db2d-4e49-9be7-9bfc9085b8e9',
              name: 'HARBORCREEK-PA',
              color: null,
              orderindex: 59
            },
            {
              id: 'e8db1117-da6f-4e0b-a6c9-9c5a892f6d10',
              name: 'HH - HARLINGEN-TX',
              color: null,
              orderindex: 60
            },
            {
              id: '222817db-7469-4cd3-b119-131b08cd2562',
              name: 'HILLSBO - HILLSBORO-MO',
              color: null,
              orderindex: 61
            },
            {
              id: '860d0022-2a2d-4555-9716-f556944d6af8',
              name: 'HR - HOLLY-RIDGE-NC',
              color: null,
              orderindex: 62
            },
            {
              id: '9a7f6e60-e9df-4fc7-9742-ba1ef351fea0',
              name: 'HSPRCA - HESPERIA-CA',
              color: null,
              orderindex: 63
            },
            {
              id: 'e3a4d0db-ff98-442e-b01a-4d324e3bc431',
              name: 'HUB-C-NYC',
              color: null,
              orderindex: 64
            },
            {
              id: 'e72214f0-4433-4274-a075-c2ef4ec8ed77',
              name: 'HUB-F-NYC',
              color: null,
              orderindex: 65
            },
            {
              id: 'd45564c2-d96a-4124-9437-13293ecfda27',
              name: 'HUB-G-NYC',
              color: null,
              orderindex: 66
            },
            {
              id: 'e892ef4b-11b0-4512-9aeb-95396e72fc37',
              name: 'HUB-I-STATEN-ISLAND',
              color: null,
              orderindex: 67
            },
            {
              id: '2b6effe3-49cb-47e7-98d9-adc33a0d17a8',
              name: 'HUB-L-ELMHURST',
              color: null,
              orderindex: 68
            },
            {
              id: '401e5591-7e67-41be-8e4e-6060e1822a2c',
              name: 'HUB-N-BERGEN-NJ',
              color: null,
              orderindex: 69
            },
            {
              id: '0475f9b2-9a7d-4a14-8d87-440279c80f48',
              name: 'HUB-O-OZONE-PARK-NYC',
              color: null,
              orderindex: 70
            },
            {
              id: 'f3236415-60c4-4942-8aa9-dccff2de0454',
              name: 'HUSTISF - JUNEAU-WI',
              color: null,
              orderindex: 71
            },
            {
              id: 'c51439da-d087-4765-a077-e8bee5d1829d',
              name: 'INDIAN-TRAIL-NC',
              color: null,
              orderindex: 72
            },
            {
              id: 'a136c8d8-b820-4885-b6cd-8bb1730da9d9',
              name: 'IRONWOOD-MI',
              color: null,
              orderindex: 73
            },
            {
              id: '6db24161-b5c8-4fbe-a3a9-e183571dab38',
              name: 'JACKSONPORT-WI',
              color: null,
              orderindex: 74
            },
            {
              id: '74e81b90-5331-463d-b6ca-dedf91a7c45b',
              name: 'JH - HAYS-TX',
              color: null,
              orderindex: 75
            },
            {
              id: '65ff9ec0-f741-4aed-8945-e071687494c2',
              name: 'JX - JACKSONVILLE-NC',
              color: null,
              orderindex: 76
            },
            {
              id: 'de8e13d8-4db1-4efd-9bd0-51ec1fa61690',
              name: 'KENNEWICK-WA',
              color: null,
              orderindex: 77
            },
            {
              id: '156927b7-60e3-442c-ad54-4d755c903297',
              name: 'KK - KERNERSVILLE-NC',
              color: null,
              orderindex: 78
            },
            {
              id: '3b376580-8833-4016-a570-e63cc69dc07f',
              name: 'LA-MIRADA-CA',
              color: null,
              orderindex: 79
            },
            {
              id: '48b44ab6-4952-4546-b506-9d4a842d3220',
              name: 'LAGRANGE-GA',
              color: null,
              orderindex: 80
            },
            {
              id: 'ad861817-1b67-448c-83a2-9a3b4ad8c684',
              name: 'LANETT - LANETT-AL',
              color: null,
              orderindex: 81
            },
            {
              id: '3d205abf-ebd1-4908-a69e-cb1ca83915a3',
              name: 'LEWISVILLE-45-TX',
              color: null,
              orderindex: 82
            },
            {
              id: '0ef813c7-2ab1-4476-a5dd-5e7047602073',
              name: 'LI - LIBERTY-OH',
              color: null,
              orderindex: 83
            },
            {
              id: 'f8a8aec3-5aac-48b5-97e2-3a82789ddc16',
              name: 'LN - LONDON-KY',
              color: null,
              orderindex: 84
            },
            {
              id: '86ac4a07-7223-4922-85db-4899de9fa3ee',
              name: 'LX - LEXINGTON-KY',
              color: null,
              orderindex: 85
            },
            {
              id: '8e636f9f-ed77-4dca-8701-e2852089028e',
              name: 'LY - LYNCHBURG-OH',
              color: null,
              orderindex: 86
            },
            {
              id: '4e52aa1a-0e21-43bc-84af-aad00292707a',
              name: 'MANKATO-MN',
              color: null,
              orderindex: 87
            },
            {
              id: '383260d0-c4e5-4545-b0e7-9b991cc42753',
              name: 'MARSHALL-MN',
              color: null,
              orderindex: 88
            },
            {
              id: '162e879e-0c33-49ad-b174-2cd920623315',
              name: 'MARYVILLE-TN',
              color: null,
              orderindex: 89
            },
            {
              id: '904c26eb-de3a-4199-9d26-07bd5b67fabf',
              name: 'MCKINLEY-WI',
              color: null,
              orderindex: 90
            },
            {
              id: '718a9344-7551-4170-8359-ea346db4f029',
              name: 'MEDFORD - MEDFORD-OR',
              color: null,
              orderindex: 91
            },
            {
              id: '82438ed3-ac71-401a-b991-489f8b22b9ba',
              name: 'MEDFORD-OR',
              color: null,
              orderindex: 92
            },
            {
              id: 'fbd61eb7-d4d8-42d2-8118-72af3c3dfcb8',
              name: 'MESQUITE-19-TX',
              color: null,
              orderindex: 93
            },
            {
              id: '7df0558e-341a-47b9-ada1-724a177ab2d3',
              name: 'MIDDLETOWN-NY',
              color: null,
              orderindex: 94
            },
            {
              id: 'fbf75c56-5547-418c-af1e-6eaddff679f3',
              name: 'MONROVIA-CA',
              color: null,
              orderindex: 95
            },
            {
              id: 'f39160aa-a082-41c2-bbcd-2000d5bde1fa',
              name: 'MONTEREY-PARK-CA',
              color: null,
              orderindex: 96
            },
            {
              id: '247f274a-c9ce-4083-aeaf-a85dfe836904',
              name: 'NORTH-WILKESBORO-NC',
              color: null,
              orderindex: 97
            },
            {
              id: 'ed2731aa-e075-47ca-b44b-b77672673108',
              name: 'NR - EDGEWOOD-COVINGTON-KY',
              color: null,
              orderindex: 98
            },
            {
              id: 'a0a92c0f-cf92-4efd-935b-4e2e95895ff6',
              name: 'OAKLAND-MI',
              color: null,
              orderindex: 99
            },
            {
              id: 'b4ba51ea-5fd6-4aea-9b29-ee87d89ed8b1',
              name: 'ORLD11-OLD-DELAND-HE',
              color: null,
              orderindex: 100
            },
            {
              id: '9fa8e574-2302-4d22-b30a-e6778d3e317c',
              name: 'OSCODA-MI',
              color: null,
              orderindex: 101
            },
            {
              id: '855ef691-1aea-4370-95ab-a60d28e9f0ff',
              name: 'PALMDALE-CA',
              color: null,
              orderindex: 102
            },
            {
              id: 'c858951c-312a-4227-855c-57a39c2c9055',
              name: 'PARK-AVE-EAST-OH',
              color: null,
              orderindex: 103
            },
            {
              id: 'e0f608cc-9a73-488f-90eb-3d46018e38c8',
              name: 'PEPPERELL-MA',
              color: null,
              orderindex: 104
            },
            {
              id: '3186d56b-ff7a-4b81-a9eb-25966a396cbc',
              name: 'PHARR-TX',
              color: null,
              orderindex: 105
            },
            {
              id: '5fb4c347-9ad3-49e9-a0ac-47e4f9a30881',
              name: 'PORT-EWEN-NY',
              color: null,
              orderindex: 106
            },
            {
              id: 'c4872c25-3195-4f25-a25f-7265b12f59f2',
              name: 'PORTERV - PORTERVILLE-CA',
              color: null,
              orderindex: 107
            },
            {
              id: 'b3941991-94ab-44ea-a6db-5496a4180619',
              name: 'PRISNY0 - MAPLEVIEW-NY',
              color: null,
              orderindex: 108
            },
            {
              id: '5a610208-fca5-4e3e-aac8-7e4667f3b100',
              name: 'PTEWEN - PORT-EWEN-NY',
              color: null,
              orderindex: 109
            },
            {
              id: 'd1be100d-1497-4c3c-b7b0-bbd2916c0c38',
              name: 'QUEENSB - QUEENSBURY-NY',
              color: null,
              orderindex: 110
            },
            {
              id: '7508bc89-497b-4e30-a2c2-d293350ce73b',
              name: 'R1 - ROCKINGHAM-NC',
              color: null,
              orderindex: 111
            },
            {
              id: '521b2acc-5721-42a0-9d19-5c678c04850a',
              name: 'REDDING-CA',
              color: null,
              orderindex: 112
            },
            {
              id: '8207a36d-6e34-4332-8157-1c6ea33bed2a',
              name: 'RHINEBECK-NY',
              color: null,
              orderindex: 113
            },
            {
              id: '2aabd4bf-a1c5-447f-ac13-e09802040c88',
              name: 'RI - RICHMOND-KY',
              color: null,
              orderindex: 114
            },
            {
              id: '6fc06a59-7698-4523-b7e1-6f25631c0f32',
              name: 'ROSEMOUNT-MN',
              color: null,
              orderindex: 115
            },
            {
              id: 'af770159-f94f-4312-b760-709f0a918dab',
              name: 'RUMFORD-ME',
              color: null,
              orderindex: 116
            },
            {
              id: '4eab29bf-235f-4277-bb99-077c88c0df17',
              name: 'SAGINAW-MI',
              color: null,
              orderindex: 117
            },
            {
              id: 'f4e6f052-f132-448f-a4d5-39071c8f2057',
              name: 'SANTA-MONICA-CA',
              color: null,
              orderindex: 118
            },
            {
              id: 'b698daed-6fc8-484e-a12e-2faaaf671aa2',
              name: 'SDVOLIV - OLIVETTE-MO-MDC',
              color: null,
              orderindex: 119
            },
            {
              id: '6b5c778e-1a15-4910-9034-90241fe70cb6',
              name: 'SDVSTPE - ST-PETERS-MO',
              color: null,
              orderindex: 120
            },
            {
              id: 'fd5f72f7-40eb-4b0a-8935-b9409931ba0c',
              name: 'SEBAGO-ME',
              color: null,
              orderindex: 121
            },
            {
              id: '27d5b91a-9fa1-41b8-92ed-15abfdc16794',
              name: 'SHLBMI0 - SHELBY-MI',
              color: null,
              orderindex: 122
            },
            {
              id: '11d9de15-e99f-4947-b4b3-5dbe59431027',
              name: 'SL - SELLERSBURG-IN',
              color: null,
              orderindex: 123
            },
            {
              id: 'cb92e36e-f42c-45c1-8e19-cf870a351213',
              name: 'SM - SANTA-MONICA-CA',
              color: null,
              orderindex: 124
            },
            {
              id: 'b1ef9425-f7cb-4e56-b8c0-3fadc34b5c9a',
              name: 'SNB - SAN-BERNARDINO-SNB-CA',
              color: null,
              orderindex: 125
            },
            {
              id: '263e350e-bfd9-4ad0-b9c1-8a8d5a21c3a0',
              name: 'TAMP41-CHASE-RD',
              color: null,
              orderindex: 126
            },
            {
              id: '78008836-b971-4ffa-9d45-602720c480e9',
              name: 'TAMP43-GEORGE-JENKINS',
              color: null,
              orderindex: 127
            },
            {
              id: '6969ea24-85d5-4486-a516-54d10a147965',
              name: 'TAMP46-WINTER-HAVEN',
              color: null,
              orderindex: 128
            },
            {
              id: 'f789018b-5456-4ba1-a249-90b6ea406559',
              name: 'TAMP47-HAINES-CITY',
              color: null,
              orderindex: 129
            },
            {
              id: 'e9249854-b3d2-4ced-9265-45803c5d146e',
              name: 'TAMP55-MANATEE',
              color: null,
              orderindex: 130
            },
            {
              id: 'd49cdec7-9287-4f75-ab86-48fa10e29aea',
              name: 'TAMP58-LAKEWOOD-RANCH',
              color: null,
              orderindex: 131
            },
            {
              id: '947321da-83b1-4c4b-ae45-f6f908bd1f7d',
              name: 'THBDLA02571 - CHACKBAY',
              color: null,
              orderindex: 132
            },
            {
              id: '4dbc7818-482d-446d-b722-5f5b589d11ac',
              name: 'TNCOLON - TENNESSEE-COLONY',
              color: null,
              orderindex: 133
            },
            {
              id: 'c6c0b7be-6481-448b-8aec-089ede5f815c',
              name: 'TRAWOOD-3-C-TX',
              color: null,
              orderindex: 134
            },
            {
              id: '00718e26-0be6-451e-9e28-3f4d55ba2f17',
              name: 'UTICA-NY',
              color: null,
              orderindex: 135
            },
            {
              id: 'd7b9c344-5417-49d4-bf0d-00ca7a564629',
              name: 'VNTRCA',
              color: null,
              orderindex: 136
            },
            {
              id: 'c0c156ac-71d3-45ac-911a-e865cd966797',
              name: 'WAITE-PARK-MN',
              color: null,
              orderindex: 137
            },
            {
              id: '6236d91f-5ca5-4ada-97b7-98140b4301fd',
              name: 'WEATHERFORD-TX',
              color: null,
              orderindex: 138
            },
            {
              id: '605a5364-05a8-45ae-8f01-fc3d670b56b5',
              name: 'WESTERVILLE-OH',
              color: null,
              orderindex: 139
            },
            {
              id: '001d806d-ba22-482b-bf0d-666303f501a1',
              name: 'WILLMAR-MN',
              color: null,
              orderindex: 140
            },
            {
              id: 'c5af5a86-8d64-4332-a131-02e913a3175a',
              name: 'WINDHAM - WINDHAM-OH',
              color: null,
              orderindex: 141
            },
            {
              id: 'b33f8b49-19af-4333-a4fb-90a0c636b642',
              name: 'WURTSBORO-NY',
              color: null,
              orderindex: 142
            },
            {
              id: 'afc0fd9d-66bc-41fa-a317-66238932fa5f',
              name: 'WYANDOTTE-KS',
              color: null,
              orderindex: 143
            },
            {
              id: '01d2d6a7-83a0-4ade-98c2-4099e303ffb5',
              name: 'WYLIE-1M-TX',
              color: null,
              orderindex: 144
            }
          ]
        },
        date_created: '1718652599456',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'f170ab6e-cdcc-44c6-a9f9-ef87933387dd',
        name: 'NODE',
        type: 'short_text',
        type_config: {},
        date_created: '1671467252944',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'f8e1d948-f53f-4881-bda5-1fc16fae5a95',
        name: 'PORCENTAJE DEVOLUCIONES REDESIGN',
        type: 'formula',
        type_config: {
          simple: false,
          formula: 'IF(CUSTOM_FIELD_1c0b063c_7076_4499_b218_4790f20ec11f-1 >= 3,     141,    SWITCH(        CUSTOM_FIELD_1c0b063c_7076_4499_b218_4790f20ec11f-1,         1, 100,        2, 140,        0    ))',
          version: '1.11',
          is_dynamic: false,
          return_types: [
            'null',
            'number'
          ],
          calculation_state: 'ready'
        },
        date_created: '1710267566969',
        hide_from_guests: false,
        required: false
      },
      {
        id: 'ff5d27a0-9997-46e1-a318-4c4e720303f5',
        name: 'INVOICE WS',
        type: 'number',
        type_config: {},
        date_created: '1648228511358',
        hide_from_guests: false,
        required: false
      }
    ]