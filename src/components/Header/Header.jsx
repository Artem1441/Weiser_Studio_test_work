import React, { useEffect, useState } from "react";
import classes from "./Header.module.scss";
import refresh from "./../../assets/refresh.svg";
import settings from "./../../assets/settings.svg";
import close from "./../../assets/close.svg";
import { useSelector, useDispatch } from "react-redux";
import { fetchDollarRate } from "./../../API/fetchDollarRate";

export const Header = () => {
  const dispatch = useDispatch();
  const pointsData = useSelector((state) => state.scheduleName.pointsData);
  const currentPoint = useSelector((state) => state.scheduleName.currentPoint);
  const presentPoint = currentPoint - 1;
  const dollarRate = useSelector((state) => state.scheduleName.dollarRate);
  const [pointToday, setPointToday] = useState(0);
  const [pointYesterday, setPointYesterday] = useState(0);
  const [difference, setDifference] = useState(0);
  const [currency, setCurrency] = useState(true);

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
  };

  return (
    <div>
      <div className={classes.settings}>
        <div className={classes.settings_title}>Общая статистика</div>
        <div className={classes.settings_btns}>
          <div className={classes.settings_btns_icon}>
            <img src={refresh} alt={"refresh"} width={30} />
          </div>

          <div className={classes.settings_btns_icon}>
            <img src={settings} alt={"settings"} width={30} />
          </div>

          <div className={classes.settings_btns_icon}>
            <img src={close} alt={"close"} width={30} />
          </div>
        </div>
      </div>

      <div className={classes.indicators}>
        <div className={classes.indicators_row}>
          <div className={classes.indicators_title}>Показатель</div>
          <div className={classes.indicators_value}>
            Выручка,{"  "}
            <span onClick={() => setCurrency(!currency)}>
              {currency ? "руб" : "дол"}
            </span>
          </div>
        </div>

        <div className={classes.indicators_row}>
          <div className={classes.indicators_title}>Текущий день</div>
          <div className={classes.indicators_value}>
            {currency
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
            {pointYesterday && currency
              ? pointYesterday.y
              : pointYesterday && !currency
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
            {pointYesterday && currency
              ? pointYesterday.y
              : pointYesterday && !currency
              ? Math.ceil((pointYesterday.y / dollarRate) * 100) / 100
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
