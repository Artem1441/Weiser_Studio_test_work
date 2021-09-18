import React from "react";
import { refreshRowAction } from "../../../store/rowsReducer";
import { CONSTS } from "../../styleConsts";
import classes from "./OneRowInSettings.module.scss";
import { useSelector, useDispatch } from "react-redux";

export const OneRowInSettings = ({ row }) => {
  const dispatch = useDispatch();
  const tableRows = useSelector((state) => state.rowsName.tableRows);

  const refreshShowing = (id) => {
    let copyTableRows = [];
    tableRows.map((row) => {
      if (row.id === id) row.isShow = !row.isShow;
      copyTableRows.push(row);
      localStorage.setItem(`row${row.id}`, row.isShow);
    });
    localStorage.setItem(`rows`, true);
    dispatch(refreshRowAction(copyTableRows));
  };

  return (
    <div className={classes.block}>
      <div className={classes.block_title}>{row.title}</div>
      {row.isShow ? (
        <button
          onClick={() => refreshShowing(row.id)}
          className={classes.block_btn}
          style={{ background: CONSTS.BACKGROUND_RED }}
        >
          Убрать
        </button>
      ) : (
        <button
          onClick={() => refreshShowing(row.id)}
          className={classes.block_btn}
          style={{ background: CONSTS.BACKGROUND_GREEN }}
        >
          Показать
        </button>
      )}
    </div>
  );
};
