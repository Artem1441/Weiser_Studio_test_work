const SET_CURRENT_POINT = "SET_CURRENT_POINT";
const GET_DOLLAR_RATE = "GET_DOLLAR_RATE";
const DOLLAR_CHANGE = "DOLLAR_CHANGE";

const defaultState = {
  pointsData: [
    {
      y: 0,
      id: 0,
      params: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    {
      y: 280000,
      id: 1,
      params: [280000, 0, 0, 1300, 1200, 1000, 1300, 34, 34],
    },
    {
      y: 220000,
      id: 2,
      params: [200000, 20000, 0, 1300, 1200, 1000, 1300, 34, 34],
    },
    {
      y: 200000,
      id: 3,
      params: [100000, 0, 100000, 1300, 1200, 1000, 1300, 34, 34],
    },
    {
      y: 485000,
      id: 4,
      params: [380000, 100000, 5000, 1300, 1200, 1000, 1300, 34, 34],
    },
    {
      y: 480000,
      id: 5,
      params: [0, 0, 480000, 1300, 1200, 1000, 1300, 34, 34],
    },
    {
      y: 490000,
      id: 6,
      params: [90000, 300000, 100000, 1300, 1200, 1000, 1300, 34, 34],
    },
    {
      y: 480521,
      id: 7,
      params: [300000, 80000, 100521, 900, 800, 1100, 1300, 36, 36],
    },
    {
      y: 500521,
      id: 8,
      params: [300000, 100000, 100521, 1300, 1200, 1000, 1300, 34, 34],
    },
    {
      y: 490000,
      id: 9,
      params: [280000, 200000, 10000, 1300, 1200, 1000, 1300, 34, 34],
    },
  ],
  // reservePointsData: [
  //   {
  //     y: 0,
  //     id: -1,
  //     params: [
  //       {
  //          "-",
  //          "-",
  //          "-",
  //         fourthParam: "-",
  //         fifthParam: "-",
  //         sixthParam: "-",
  //         seventhParam: "-",
  //         eighthParam: "-",
  //         ninethParam: "-",
  //       },
  //     ],
  //   },
  // ],
  currentPoint: 0,
  dollarRate: 1,
  dollarChange: true,
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
    case DOLLAR_CHANGE: {
      return {
        ...state,
        dollarChange: action.payload,
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

export const dollarChangeAction = (bool) => ({
  type: DOLLAR_CHANGE,
  payload: bool,
});
