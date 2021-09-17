const SET_CURRENT_POINT = "SET_CURRENT_POINT";
const GET_DOLLAR_RATE = "GET_DOLLAR_RATE";
const DOLLAR_CHANGE = "DOLLAR_CHANGE";

const defaultState = {
  pointsData: [
    {
      y: 0,
      id: 0,
      params: [
        {
          firstParam: 0,
          secondParam: 0,
          thirdParam: 0,
          fourthParam: 0,
          fifthParam: 0,
          sixthParam: 0,
          seventhParam: 0,
          eighthParam: 0,
          ninethParam: 0,
        },
      ],
    },
    {
      y: 280000,
      id: 1,
      params: [
        {
          firstParam: 280000,
          secondParam: 0,
          thirdParam: 0,
          fourthParam: 1300,
          fifthParam: 1200,
          sixthParam: 1000,
          seventhParam: 1300,
          eighthParam: 34,
          ninethParam: 34,
        },
      ],
    },
    {
      y: 220000,
      id: 2,
      params: [
        {
          firstParam: 200000,
          secondParam: 20000,
          thirdParam: 0,
          fourthParam: 1300,
          fifthParam: 1200,
          sixthParam: 1000,
          seventhParam: 1300,
          eighthParam: 34,
          ninethParam: 34,
        },
      ],
    },
    {
      y: 200000,
      id: 3,
      params: [
        {
          firstParam: 100000,
          secondParam: 0,
          thirdParam: 100000,
          fourthParam: 1300,
          fifthParam: 1200,
          sixthParam: 1000,
          seventhParam: 1300,
          eighthParam: 34,
          ninethParam: 34,
        },
      ],
    },
    {
      y: 485000,
      id: 4,
      params: [
        {
          firstParam: 380000,
          secondParam: 100000,
          thirdParam: 5000,
          fourthParam: 1300,
          fifthParam: 1200,
          sixthParam: 1000,
          seventhParam: 1300,
          eighthParam: 34,
          ninethParam: 34,
        },
      ],
    },
    {
      y: 480000,
      id: 5,
      params: [
        {
          firstParam: 0,
          secondParam: 0,
          thirdParam: 480000,
          fourthParam: 1300,
          fifthParam: 1200,
          sixthParam: 1000,
          seventhParam: 1300,
          eighthParam: 34,
          ninethParam: 34,
        },
      ],
    },
    {
      y: 490000,
      id: 6,
      params: [
        {
          firstParam: 90000,
          secondParam: 300000,
          thirdParam: 100000,
          fourthParam: 1300,
          fifthParam: 1200,
          sixthParam: 1000,
          seventhParam: 1300,
          eighthParam: 34,
          ninethParam: 34,
        },
      ],
    },
    {
      y: 480521,
      id: 7,
      params: [
        {
          firstParam: 300000,
          secondParam: 80000,
          thirdParam: 100521,
          fourthParam: 900,
          fifthParam: 800,
          sixthParam: 1100,
          seventhParam: 1300,
          eighthParam: 36,
          ninethParam: 36,
        },
      ],
    },
    {
      y: 500521,
      id: 8,
      params: [
        {
          firstParam: 300000,
          secondParam: 100000,
          thirdParam: 100521,
          fourthParam: 1300,
          fifthParam: 1200,
          sixthParam: 1000,
          seventhParam: 1300,
          eighthParam: 34,
          ninethParam: 34,
        },
      ],
    },
    {
      y: 490000,
      id: 9,
      params: [
        {
          firstParam: 280000,
          secondParam: 200000,
          thirdParam: 10000,
          fourthParam: 1300,
          fifthParam: 1200,
          sixthParam: 1000,
          seventhParam: 1300,
          eighthParam: 34,
          ninethParam: 34,
        },
      ],
    },
  ],
  reservePointsData: [
    {
      y: 0,
      id: -1,
      params: [
        {
          firstParam: "-",
          secondParam: "-",
          thirdParam: "-",
          fourthParam: "-",
          fifthParam: "-",
          sixthParam: "-",
          seventhParam: "-",
          eighthParam: "-",
          ninethParam: "-",
        },
      ],
    },
  ],
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
