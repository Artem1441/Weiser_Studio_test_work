const REFRESH_ROW = "REFRESH_ROW";

const defaultState = {
  tableRows: [
    {
      id: 0,
      title: "Наличные",
      isChangeDollarFunction: false,
      isShow: localStorage.getItem("rows")
        ? // получение данных из localStorage
          JSON.parse(localStorage.getItem("row0"))
        : 1,
      //   https://coderoad.ru/61102718/%D0%9A%D0%B0%D0%BA-%D0%BF%D0%BE%D0%BC%D0%B5%D1%81%D1%82%D0%B8%D1%82%D1%8C-%D0%B8-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C-%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F-%D0%B2-localStorage-%D0%B2-Redux - ссылка на сохранение данных из localStorage
    },
    {
      id: 1,
      title: "Безналичный расчёт",
      isChangeDollarFunction: false,
      isShow: localStorage.getItem("rows")
        ? JSON.parse(localStorage.getItem("row1"))
        : 1,
    },
    {
      id: 2,
      title: "Кредитные карты",
      isChangeDollarFunction: false,
      isShow: localStorage.getItem("rows")
        ? JSON.parse(localStorage.getItem("row2"))
        : 1,
    },
    {
      id: 3,
      title: "Средний чек",
      isChangeDollarFunction: true,
      isShow: localStorage.getItem("rows")
        ? JSON.parse(localStorage.getItem("row3"))
        : 1,
    },
    {
      id: 4,
      title: "Средний гость",
      isChangeDollarFunction: true,
      isShow: localStorage.getItem("rows")
        ? JSON.parse(localStorage.getItem("row4"))
        : 1,
    },
    {
      id: 5,
      title: "Удаления из чека (после оплаты)",
      isChangeDollarFunction: true,
      isShow: localStorage.getItem("rows")
        ? JSON.parse(localStorage.getItem("row5"))
        : 1,
    },
    {
      id: 6,
      title: "Удаление из счета (до оплаты)",
      isChangeDollarFunction: true,
      isShow: localStorage.getItem("rows")
        ? JSON.parse(localStorage.getItem("row6"))
        : 1,
    },
    {
      id: 7,
      title: "Кол-во чеков",
      isChangeDollarFunction: false,
      isShow: localStorage.getItem("rows")
        ? JSON.parse(localStorage.getItem("row7"))
        : 1,
    },
    {
      id: 8,
      title: "Кол-во гостей",
      isChangeDollarFunction: false,
      isShow: localStorage.getItem("rows")
        ? JSON.parse(localStorage.getItem("row8"))
        : 1,
    },
  ],
};

export const rowsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REFRESH_ROW: {
      return {
        ...state,
        tableRows: action.payload,
      };
    }
    default:
      return state;
  }
};

export const refreshRowAction = (arr) => ({
  type: REFRESH_ROW,
  payload: arr,
});
