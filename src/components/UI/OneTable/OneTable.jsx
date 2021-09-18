import React from "react";
import classes from "./OneTable.module.scss";
import { CONSTS } from "./../../styleConsts";
import { useSelector, useDispatch } from "react-redux";
import { dollarChangeAction } from "../../../store/scheduleReducer";

const OneTable = ({
  title,
  paramToday,
  paramYesterday,
  isChangeDollarFunction,
}) => {
  const dispatch = useDispatch();
  const dollarRate = useSelector((state) => state.scheduleName.dollarRate);
  // курс доллара
  const dollarChange = useSelector((state) => state.scheduleName.dollarChange);
  // выбран доллар или рубль

  let difference = Math.ceil((paramToday / paramYesterday) * 100 - 100);
  if ((difference === Infinity) | (String(difference) === String(NaN))) {
    difference = "";
  }
  // получение разницы 3-го и 2-го столбца в процентах

  return (
    <tr>
      <th
        className={classes.table_firstRow}
        style={{ background: CONSTS.WHITE_BACKGROUND_COLOR }}
      >
        {title}
        {isChangeDollarFunction && (
          <span onClick={() => dispatch(dollarChangeAction(!dollarChange))}>
            , {dollarChange ? CONSTS.RUBLE_MARK : CONSTS.DOLLAR_MARK}
          </span>
        )}
      </th>
      <th
        className={classes.table_secondRow}
        style={{ background: CONSTS.SECOND_ROW_BACKGROUNG }}
      >
        {dollarChange
          ? paramToday
          : Math.ceil((paramToday * 100) / dollarRate) / 100}
      </th>
      <th
        className={classes.table_thirdRow}
        style={
          difference > 0
            ? { background: CONSTS.BACKGROUND_GREEN }
            : difference < 0
            ? { background: CONSTS.BACKGROUND_RED }
            : { background: CONSTS.WHITE_BACKGROUND_COLOR }
        }
      >
        {dollarChange
          ? paramYesterday
          : !dollarChange
          ? Math.ceil((paramYesterday / dollarRate) * 100) / 100
          : ""}
        <span>{difference}%</span>
      </th>
      <th
        className={classes.table_fourthRow}
        style={
          difference > 0
            ? { background: CONSTS.BACKGROUND_GREEN }
            : difference < 0
            ? { background: CONSTS.BACKGROUND_RED }
            : { background: CONSTS.WHITE_BACKGROUND_COLOR }
        }
      >
        {dollarChange
          ? paramYesterday
          : !dollarChange
          ? Math.ceil((paramYesterday / dollarRate) * 100) / 100
          : ""}
      </th>
    </tr>
  );
};

export default OneTable;
