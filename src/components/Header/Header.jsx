import React, { useEffect, useState } from "react";
import classes from "./Header.module.scss";
import refresh from "./../../assets/refresh.svg";
import settings from "./../../assets/settings.svg";
import close from "./../../assets/close.svg";
import { useSelector } from "react-redux";

export const Header = () => {
  const pointsData = useSelector((state) => state.scheduleName.pointsData);
  const currentPoint = useSelector((state) => state.scheduleName.currentPoint);
  const presentPoint = currentPoint - 1;
  const [pointToday, setPointToday] = useState(0);
  const [pointYesterday, setPointYesterday] = useState(0);
  const [difference, setDifference] = useState(0);

  useEffect(() => {
    const current = filter(currentPoint);
    const present = filter(presentPoint);
    setPointToday(current);
    setPointYesterday(present);
    if (present) {
      if (present.y != 0) {
        setDifference(-Math.ceil((current.y / present.y) * 100 - 100));
      } else {
        setDifference("-");
      }
    } else {
      setDifference("-");
    }
  }, [currentPoint]);

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
            Выручка, <span>руб</span>
          </div>
        </div>

        <div className={classes.indicators_row}>
          <div className={classes.indicators_title}>Текущий день</div>
          <div className={classes.indicators_value}>{pointToday.y}</div>
        </div>

        <div className={classes.indicators_row}>
          <div className={classes.indicators_title}>Вчера</div>
          <div className={classes.indicators_value}>
            {pointYesterday ? pointYesterday.y : ""}
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
            {pointYesterday ? pointYesterday.y : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
