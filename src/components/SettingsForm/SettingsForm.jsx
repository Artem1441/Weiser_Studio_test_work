import React from "react";
import classes from "./SettingsForm.module.scss";
import { useSelector } from "react-redux";
import { OneRowInSettings } from "../UI/OneRowInSettings/OneRowInSettings";

export const SettingsForm = () => {
  const tableRows = useSelector((state) => state.rowsName.tableRows);
  // получение данных таблицы из rowsReducer

  return (
    <div className={classes.block}>
      Настройки
      {tableRows.map((row, index) => (
        <OneRowInSettings row={row} key={index} />
      ))}
    </div>
  );
};
