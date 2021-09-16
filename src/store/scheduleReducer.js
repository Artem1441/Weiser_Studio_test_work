const SET_CURRENT_POINT = "SET_CURRENT_POINT";
const GET_DOLLAR_RATE = "GET_DOLLAR_RATE";

const defaultState = {
  pointsData: [
    {
      y: 0,
      id: 0,
    },
    {
      y: 280000,
      id: 1,
    },
    {
      y: 220000,
      id: 2,
    },
    {
      y: 200000,
      id: 3,
    },
    {
      y: 485000,
      id: 4,
    },
    {
      y: 480000,
      id: 5,
    },
    {
      y: 490000,
      id: 6,
    },
    {
      y: 480521,
      id: 7,
    },
    {
      y: 500521,
      id: 8,
    },
    {
      y: 490000,
      id: 9,
    },
  ],
  currentPoint: 0,
  dollarRate: 1,
};

export const scheduleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_POINT: {
      return {
        ...state,
        currentPoint: action.payload,
      };
    }
    case GET_DOLLAR_RATE: {
      return {
        ...state,
        dollarRate: action.payload,
      };
    }
    default:
      return state;
  }
};

export const setCurrentPointAction = (id) => ({
  type: SET_CURRENT_POINT,
  payload: id,
});

export const getDollarRateAction = (rate) => ({
  type: GET_DOLLAR_RATE,
  payload: rate,
});
