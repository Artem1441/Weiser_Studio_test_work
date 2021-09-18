import React, { useEffect, useState } from "react";
import classes from "./Table.module.scss";
import { useSelector } from "react-redux";
import OneTable from "../UI/OneTable/OneTable";

export const Table = () => {
  const pointsData = useSelector((state) => state.scheduleName.pointsData);
  const currentPoint = useSelector((state) => state.scheduleName.currentPoint);
  const presentPoint = currentPoint - 1;
  const tableRows = useSelector((state) => state.rowsName.tableRows);
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
            {tableRows.map(
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
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};
