import { getDollarRateAction } from "../store/scheduleReducer";

export const fetchDollarRate = () => {
  return function (dispatch) {
    fetch(
      "http://data.fixer.io/api/latest?access_key=b562f3bcbe61bc35e47cb4903ccb911b"
    )
      .then((response) => response.json())
      .then(
        (json) => dispatch(getDollarRateAction(json.rates.RUB / json.rates.USD))
        // т.к. данные в API приходят в Евро (тупо, конечно, но мне лень разбираться в поиске норм api для курса доллара) производим вычисление и получаем курс доллара к рублю
      );
  };
};
