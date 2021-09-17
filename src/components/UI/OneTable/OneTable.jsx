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
  const dollarChange = useSelector((state) => state.scheduleName.dollarChange);

  let difference = Math.ceil((paramToday / paramYesterday) * 100 - 100);
  if ((difference === Infinity) | (String(difference) === String(NaN))) {
    difference = "";
  }

  return (
    <tr>
      <th className={classes.table_firstRow}>
        {title}
        {isChangeDollarFunction && (
          <span onClick={() => dispatch(dollarChangeAction(!dollarChange))}>
            {dollarChange ? CONSTS.RUBLE_MARK : CONSTS.DOLLAR_MARK}
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
            : {}
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
            : {}
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
