import React, { useEffect, useState } from "react";
import classes from "./Table.module.scss";
import { useSelector, } from "react-redux";
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
      {pointYesterday && (
        <table align="center" className={classes.table}>
          <tbody tbody="true" style={{ width: "100%" }}>
            <OneTable
              title="Наличные"
              paramToday={pointToday.params[0].firstParam}
              paramYesterday={pointYesterday.params[0].firstParam}
              isChangeDollarFunction={false}
            />
            <OneTable
              title="Безналичный расчёт"
              paramToday={pointToday.params[0].secondParam}
              paramYesterday={pointYesterday.params[0].secondParam}
              isChangeDollarFunction={false}
            />
            <OneTable
              title="Кредитные карты"
              paramToday={pointToday.params[0].thirdParam}
              paramYesterday={pointYesterday.params[0].thirdParam}
              isChangeDollarFunction={false}
            />
            <OneTable
              title="Средний чек, "
              paramToday={pointToday.params[0].fourthParam}
              paramYesterday={pointYesterday.params[0].fourthParam}
              isChangeDollarFunction={true}
            />
            <OneTable
              title="Средний гость, "
              paramToday={pointToday.params[0].fifthParam}
              paramYesterday={pointYesterday.params[0].fifthParam}
              isChangeDollarFunction={true}
            />
            <OneTable
              title="Удаления из чека (после оплаты), "
              paramToday={pointToday.params[0].sixthParam}
              paramYesterday={pointYesterday.params[0].sixthParam}
              isChangeDollarFunction={true}
            />
            <OneTable
              title="Удаление из счета (до оплаты), "
              paramToday={pointToday.params[0].seventhParam}
              paramYesterday={pointYesterday.params[0].seventhParam}
              isChangeDollarFunction={true}
            />
            <OneTable
              title="Кол-во чеков"
              paramToday={pointToday.params[0].eighthParam}
              paramYesterday={pointYesterday.params[0].eighthParam}
              isChangeDollarFunction={false}
            />
            <OneTable
              title="Кол-во гостей"
              paramToday={pointToday.params[0].ninethParam}
              paramYesterday={pointYesterday.params[0].ninethParam}
              isChangeDollarFunction={false}
            />
          </tbody>
        </table>
      )}
    </div>
  );
};
