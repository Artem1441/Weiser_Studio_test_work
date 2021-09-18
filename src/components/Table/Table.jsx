import React, { useEffect, useState } from "react";
import classes from "./Table.module.scss";
import { useSelector } from "react-redux";
import OneTable from "../UI/OneTable/OneTable";

export const Table = () => {
  const spareTableRow = useSelector(
    (state) => state.scheduleName.spareTableRow
  );
  // при нулевом элементе нет данных о предыдущем, т.к. его попросту нет, именно поэтому такая логика (это данные только для первой точки)
  const pointsData = useSelector((state) => state.scheduleName.pointsData);
  // данные по точкам графика
  const currentPoint = useSelector((state) => state.scheduleName.currentPoint);
  // текущая точка
  const presentPoint = currentPoint - 1;
  // предыдущая точка (для составления таблиц)
  const tableRows = useSelector((state) => state.rowsName.tableRows);
  // получение данных таблицы из rowsReducer
  const [pointToday, setPointToday] = useState(0);
  // массив с данными теущей точки
  const [pointYesterday, setPointYesterday] = useState(0);
  // массив с данными предыдущей  точки

  useEffect(() => {
    const current = filter(currentPoint);
    const present = filter(presentPoint);
    // current и present - массивы по текущей точке
    setPointToday(current);
    setPointYesterday(present);
  }, [currentPoint]);

  const filter = (pointId) => {
    return pointsData.filter((point) => point.id === pointId && point)[0];
    // выбирает необходимый элемент среди всего массива (такая же в Header.jsx)
  };
  return (
    <div>
      <table align="center" className={classes.table}>
        <tbody tbody="true" style={{ width: "100%" }}>
          {pointYesterday
            ? tableRows.map(
                (row, index) =>
                  row.isShow && (
                    <OneTable
                      title={row.title}
                      paramToday={pointToday.params[index]}
                      paramYesterday={pointYesterday.params[index]}
                      isChangeDollarFunction={row.isChangeDollarFunction}
                      key={index}
                    />
                  )
              )
            : tableRows.map(
                (row, index) =>
                  row.isShow && (
                    <OneTable
                      title={row.title}
                      paramToday={spareTableRow[0].params[index]}
                      paramYesterday={spareTableRow[1].params[index]}
                      isChangeDollarFunction={row.isChangeDollarFunction}
                      key={index}
                    />
                  )
              )}
        </tbody>
      </table>
    </div>
  );
};
