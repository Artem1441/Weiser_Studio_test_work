import React from "react";
import classes from "./SettingsForm.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { OneRowInSettings } from "../UI/OneRowInSettings/OneRowInSettings";

export const SettingsForm = () => {
  const dispatch = useDispatch();
  const tableRows = useSelector((state) => state.rowsName.tableRows);

  return (
    <div className={classes.block}>
      Настройки
      {tableRows.map((row, index) => (
        <OneRowInSettings row={row} key={index}/>
      ))}
    </div>
  );
};
