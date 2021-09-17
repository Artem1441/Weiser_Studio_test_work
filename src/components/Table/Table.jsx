import React, { useEffect, useState } from "react";
import classes from "./Table.module.scss";
import { useSelector } from "react-redux";
import OneTable from "../UI/OneTable";

export const Table = () => {
  const pointsData = useSelector((state) => state.scheduleName.pointsData);
  const currentPoint = useSelector((state) => state.scheduleName.currentPoint);
  const presentPoint = currentPoint - 1;
  const [pointToday, setPointToday] = useState(0);
  const [pointYesterday, setPointYesterday] = useState(0);

  useEffect(() => {
    const current = filter(currentPoint);
    const present = filter(presentPoint);
    setPointToday(current);
    setPointYesterday(present);
  }, [currentPoint]);

  const filter = (pointId) => {
    return pointsData.filter((point) => point.id === pointId && point)[0];
  };

  return (
    <div>
      <table align="center" className={classes.table}>
        <tbody tbody="true">
          {pointYesterday && (
            <div style={{ width: "100%" }}>
              <OneTable
                title="Наличные"
                pointToday={pointToday}
                pointYesterday={pointYesterday}
                paramToday={pointToday.params[0].firstParam}
                paramYesterday={pointYesterday.params[0].firstParam}
              />
              <OneTable
                title="Безналичный расчёт"
                pointToday={pointToday}
                pointYesterday={pointYesterday}
                paramToday={pointToday.params[0].secondParam}
                paramYesterday={pointYesterday.params[0].secondParam}
              />
              <OneTable
                title="Кредитные карты"
                pointToday={pointToday}
                pointYesterday={pointYesterday}
                paramToday={pointToday.params[0].thirdParam}
                paramYesterday={pointYesterday.params[0].thirdParam}
              />
              <OneTable
                title="Средний чек, руб"
                pointToday={pointToday}
                pointYesterday={pointYesterday}
                paramToday={pointToday.params[0].fourthParam}
                paramYesterday={pointYesterday.params[0].fourthParam}
              />
              <OneTable
                title="Средний гость, руб"
                pointToday={pointToday}
                pointYesterday={pointYesterday}
                paramToday={pointToday.params[0].fifthParam}
                paramYesterday={pointYesterday.params[0].fifthParam}
              />
              <OneTable
                title="Удаления из чека (после оплаты), руб"
                pointToday={pointToday}
                pointYesterday={pointYesterday}
                paramToday={pointToday.params[0].sixthParam}
                paramYesterday={pointYesterday.params[0].sixthParam}
              />
              <OneTable
                title="Удаление из счета (до оплаты), руб"
                pointToday={pointToday}
                pointYesterday={pointYesterday}
                paramToday={pointToday.params[0].seventhParam}
                paramYesterday={pointYesterday.params[0].seventhParam}
              />
              <OneTable
                title="Кол-во чеков"
                pointToday={pointToday}
                pointYesterday={pointYesterday}
                paramToday={pointToday.params[0].eighthParam}
                paramYesterday={pointYesterday.params[0].eighthParam}
              />
              <OneTable
                title="Кол-во гостей"
                pointToday={pointToday}
                pointYesterday={pointYesterday}
                paramToday={pointToday.params[0].ninethParam}
                paramYesterday={pointYesterday.params[0].secondParam}
              />
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};
