const createOrgStructure = "hrReducer/CREATE-ORG-STRUCTURE";
const createOrgCity = "hrReducer/CREATE-ORG-CITY";
const deleteOrgStructure = "hrReducer/DELETE-ORG-STRUCTURE";
const updateOrgStructure = "hrReducer/UPDATE-ORG-STRUCTURE";
const addToOpened = "hrReducer/ADD-TO-OPENED";
const removeFromOpened = "hrReducer/REMOVE-FROM-OPENED";

let initialState = {
  hrInfo: [
    {
      id: 1,
      parent_id: -1,
      name: "Алматы",
    },
    {
      id: 2,
      parent_id: 1,
      name: "Центр 1",
    },
    {
      id: 3,
      parent_id: 1,
      name: "Центр 2",
    },
    {
      id: 4,
      parent_id: 2,
      name: "Управление 1",
    },
    {
      id: 5,
      parent_id: 4,
      name: "Отдел 1",
      quantity: 17,
    },
    {
      id: 6,
      parent_id: 4,
      name: "Отдел 2",
      quantity: 23,
    },
    {
      id: 7,
      parent_id: 2,
      name: "Управление 2",
    },
    {
      id: 8,
      parent_id: 7,
      name: "Отдел 1",
      quantity: 9,
    },
    {
      id: 9,
      parent_id: 7,
      name: "Отдел 2",
      quantity: 26,
    },

    {
      id: 10,
      parent_id: 3,
      name: "Управление 1",
    },
    {
      id: 11,
      parent_id: 10,
      name: "Отдел 1",
      quantity: 21,
    },
    {
      id: 12,
      parent_id: 10,
      name: "Отдел 2",
      quantity: 14,
    },
    {
      id: 13,
      parent_id: 3,
      name: "Управление 2",
    },
    {
      id: 14,
      parent_id: 13,
      name: "Отдел 1",
      quantity: 5,
    },
    {
      id: 15,
      parent_id: 13,
      name: "Отдел 2",
      quantity: 42,
    },

    {
      id: 16,
      parent_id: -1,
      name: "Актау",
    },
    {
      id: 17,
      parent_id: 16,
      name: "Центр 1",
    },
    {
      id: 18,
      parent_id: 16,
      name: "Центр 2",
    },
    {
      id: 19,
      parent_id: 17,
      name: "Управление 1",
    },
    {
      id: 20,
      parent_id: 19,
      name: "Отдел 1",
      quantity: 25,
    },
    {
      id: 21,
      parent_id: 19,
      name: "Отдел 2",
      quantity: 22,
    },
    {
      id: 22,
      parent_id: 17,
      name: "Управление 2",
    },
    {
      id: 23,
      parent_id: 22,
      name: "Отдел 1",
      quantity: 8,
    },
    {
      id: 24,
      parent_id: 22,
      name: "Отдел 2",
      quantity: 60,
    },

    {
      id: 25,
      parent_id: 18,
      name: "Управление 1",
    },
    {
      id: 26,
      parent_id: 25,
      name: "Отдел 1",
      quantity: 42,
    },
    {
      id: 27,
      parent_id: 25,
      name: "Отдел 2",
      quantity: 37,
    },
    {
      id: 28,
      parent_id: 18,
      name: "Управление 2",
    },
    {
      id: 29,
      parent_id: 28,
      name: "Отдел 1",
      quantity: 18,
    },
    {
      id: 30,
      parent_id: 28,
      name: "Отдел 2",
      quantity: 9,
    },
  ],
  opened: [-1],
};

const hrReducer = (state = initialState, action) => {
  switch (action.type) {
    case createOrgStructure:
      let newOrgStr = {
        id: Math.random(),
        parent_id: action.orgId,
        name: action.orgName,
      };
      return {
        ...state,
        hrInfo: [...state.hrInfo, newOrgStr],
        opened: [...state.opened, newOrgStr.id],
      };
    case createOrgCity:
      let newOrgCity = {
        id: Math.random(),
        parent_id: -1,
        name: action.orgName,
      };
      return {
        ...state,
        hrInfo: [...state.hrInfo, newOrgCity],
      };
    case deleteOrgStructure:
      const newState = state.hrInfo.filter((item) => {
        return item.id !== action.orgId && item.parent_id !== action.orgId;
      });
      return {
        ...state,
        hrInfo: newState,
      };
    case updateOrgStructure:
      return {
        ...state,
        hrInfo: state.hrInfo.map((item) => {
          if (item.id === action.orgId) {
            return {
              ...item,
              name: action.orgNewValue,
            };
          }
          return item;
        }),
      };
    case addToOpened:
      return {
        ...state,
        opened: [...state.opened, action.openedId],
      };
    case removeFromOpened:
      const newOpened = state.opened.filter((item) => item !== action.openedId);
      return {
        ...state,
        opened: newOpened,
      };
    default:
      return state;
  }
};

export const createOrg = (orgId, orgName) => {
  return {
    type: createOrgStructure,
    orgId,
    orgName,
  };
};

export const createCity = (orgName) => {
  return {
    type: createOrgCity,
    orgName,
  };
};

export const updateOrg = (orgId, orgNewValue) => {
  return {
    type: updateOrgStructure,
    orgId,
    orgNewValue,
  };
};

export const deleteOrg = (orgId) => {
  return {
    type: deleteOrgStructure,
    orgId,
  };
};

export const setOpened = (openedId) => {
  return {
    type: addToOpened,
    openedId,
  };
};

export const deleteFromOpened = (openedId) => {
  return {
    type: removeFromOpened,
    openedId,
  };
};

export default hrReducer;
