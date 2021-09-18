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
  const currentPoint = useSelector((state) => state.scheduleName.currentPoint);
  const presentPoint = currentPoint - 1;
  const dollarRate = useSelector((state) => state.scheduleName.dollarRate);
  const dollarChange = useSelector((state) => state.scheduleName.dollarChange);
  const [pointToday, setPointToday] = useState(0);
  const [pointYesterday, setPointYesterday] = useState(0);
  const [difference, setDifference] = useState(0);

  useEffect(() => {
    const current = filter(currentPoint);
    const present = filter(presentPoint);
    setPointToday(current);
    setPointYesterday(present);
    if (present) {
      if (present.y !== 0) {
        setDifference(-Math.ceil((current.y / present.y) * 100 - 100));
      } else {
        setDifference("-");
      }
    } else {
      setDifference("-");
    }
  }, [currentPoint]);

  useEffect(() => {
    dispatch(fetchDollarRate());
  }, []);

  const filter = (pointId) => {
    return pointsData.filter((point) => point.id === pointId && point)[0];
    // выбирает необходимый элемент среди всего массива
  };

  return (
    <div>
      <Settings />

      <div className={classes.indicators}>
        <div className={classes.indicators_row}>
          <div className={classes.indicators_title}>Показатель</div>
          <div className={classes.indicators_value}>
            Выручка,{"  "}
            <span onClick={() => dispatch(dollarChangeAction(!dollarChange))}>
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
          <div className={classes.indicators_title}>Вчера</div>
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
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
          <div className={classes.indicators_title}>Этот день недели</div>
          <div className={classes.indicators_value}>
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
