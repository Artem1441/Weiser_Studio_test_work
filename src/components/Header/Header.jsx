import React, { useEffect, useState } from "react";
import classes from "./Header.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchDollarRate } from "./../../API/fetchDollarRate";
import { CONSTS } from "./../styleConsts";
import { Settings } from "../Settings/Settings";
import { dollarChangeAction } from "../../store/scheduleReducer";

export const Header = () => {
  const dispatch = useDispatch();
  const pointsData = useSelector((state) => state.scheduleName.pointsData);
  // данные по точкам графика
  const currentPoint = useSelector((state) => state.scheduleName.currentPoint);
  // текущая точка
  const presentPoint = currentPoint - 1;
  // предыдущая точка (для составления таблиц)
  const dollarRate = useSelector((state) => state.scheduleName.dollarRate);
  // курс доллара
  const dollarChange = useSelector((state) => state.scheduleName.dollarChange);
  // выбран доллар или рубль
  const [pointToday, setPointToday] = useState([]);
  // массив с данными теущей точки
  const [pointYesterday, setPointYesterday] = useState([]);
  // массив с данными предыдущей  точки
  const [difference, setDifference] = useState(0);
  // после получения pointToday и pointYesterday составляется разница в процентом соотношении

  useEffect(() => {
    const current = filter(currentPoint);
    const present = filter(presentPoint);
    // current и present - массивы по текущей точке
    setPointToday(current);
    setPointYesterday(present);
    // т.к. useState - ассинхронная функция, то ниже использую current и present
    if (present) {
      // не получаем null, NaN или undifined
      if (present.y !== 0) {
        // не получаем ответ Infinity
        setDifference(-Math.ceil((current.y / present.y) * 100 - 100));
      } else {
        setDifference("-");
      }
    } else {
      setDifference("-");
    }
    // установка разницы в процентом соотношении в зависимости от present
  }, [currentPoint]);

  useEffect(() => {
    dispatch(fetchDollarRate());
    // делаем запрос к API для получения курса доллара
  }, []);

  const filter = (pointId) => {
    return pointsData.filter((point) => point.id === pointId && point)[0];
    // выбирает необходимый элемент среди всего массива (такая же в Table.jsx)
  };

  return (
    <div>
      <Settings />

      <div
        className={classes.indicators}
        style={{ width: CONSTS.HEADER_TABLE_WIDTH }}
      >
        <div className={classes.indicators_row}>
          <div
            className={classes.indicators_title}
            style={{ background: CONSTS.WHITE_BACKGROUND_COLOR }}
          >
            Показатель
          </div>
          <div
            className={classes.indicators_value}
            style={{ background: CONSTS.WHITE_BACKGROUND_COLOR }}
          >
            Выручка,
            <span
              style={{ marginLeft: 2 }}
              onClick={() => dispatch(dollarChangeAction(!dollarChange))}
            >
              {dollarChange ? CONSTS.RUBLE_MARK : CONSTS.DOLLAR_MARK}
            </span>
          </div>
        </div>

        <div className={classes.indicators_row}>
          <div
            className={classes.indicators_title}
            style={{ background: CONSTS.SECOND_ROW_BACKGROUNG }}
          >
            Текущий день
          </div>
          <div
            className={classes.indicators_value}
            style={{ background: CONSTS.SECOND_ROW_BACKGROUNG }}
          >
            {dollarChange
              ? pointToday.y
              : Math.ceil((pointToday.y * 100) / dollarRate) / 100}
          </div>
        </div>

        <div className={classes.indicators_row}>
          <div
            className={classes.indicators_title}
            style={{ background: CONSTS.WHITE_BACKGROUND_COLOR }}
          >
            {" "}
            Вчера
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              background: CONSTS.WHITE_BACKGROUND_COLOR,
            }}
            className={classes.indicators_value}
          >
            {pointYesterday && dollarChange
              ? pointYesterday.y
              : pointYesterday && !dollarChange
              ? Math.ceil((pointYesterday.y / dollarRate) * 100) / 100
              : ""}
            <span
              style={
                Number(difference) > 0
                  ? { color: "green" }
                  : Number(difference) < 0
                  ? { color: "red" }
                  : { color: "blue" }
              }
            >{`${difference}%`}</span>
          </div>
        </div>

        <div className={classes.indicators_row}>
          <div
            className={classes.indicators_title}
            style={{ background: CONSTS.WHITE_BACKGROUND_COLOR }}
          >
            Этот день недели
          </div>
          <div
            className={classes.indicators_value}
            style={{ background: CONSTS.WHITE_BACKGROUND_COLOR }}
          >
            {pointYesterday && dollarChange
              ? pointYesterday.y
              : pointYesterday && !dollarChange
              ? Math.ceil((pointYesterday.y / dollarRate) * 100) / 100
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
