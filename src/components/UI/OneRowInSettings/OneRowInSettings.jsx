import React from "react";
import { refreshRowAction } from "../../../store/rowsReducer";
import { CONSTS } from "../../styleConsts";
import classes from "./OneRowInSettings.module.scss";
import { useSelector, useDispatch } from "react-redux";

export const OneRowInSettings = ({ row }) => {
  const dispatch = useDispatch();
  const tableRows = useSelector((state) => state.rowsName.tableRows);
  // получение данных таблицы из rowsReducer

  const refreshShowing = (id) => {
    let copyTableRows = [];
    // создаю новый массив, чтобы не менять старый, а просто сохранить новый (более простая логика)
    tableRows.map((row) => {
      if (row.id === id) row.isShow = !row.isShow;
      copyTableRows.push(row);
      localStorage.setItem(`row${row.id}`, row.isShow);
      // сохранение данных о показе/непоказе столбика снизу (посмотри localStorage после изменения)
    });
    // создание нового массива уже с исправленным значением выбора "Убрать" или "Показать"
    localStorage.setItem(`rows`, true);
    // сохранение в localStorage, что уже есть данные в таблице для получения в след раз
    dispatch(refreshRowAction(copyTableRows));
    // сохранение нового массива вместо старого
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
          {window.innerWidth > 400 ? "Убрать" : "-"}
        </button>
      ) : (
        <button
          onClick={() => refreshShowing(row.id)}
          className={classes.block_btn}
          style={{ background: CONSTS.BACKGROUND_GREEN }}
        >
          {window.innerWidth > 400 ? "Показать" : "+"}
        </button>
      )}
    </div>
  );
};
