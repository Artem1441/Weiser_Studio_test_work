import React from "react";
import classes from "./UI.module.scss";

const OneTable = ({
  title,
  pointToday,
  pointYesterday,
  paramToday,
  paramYesterday,
}) => {
  return (
    <tr>
      <th className={classes.table_firstRow}>{title}</th>
      <th className={classes.table_secondRow}>{paramToday}</th>
      <th className={classes.table_thirdRow}>{paramYesterday}</th>
      <th className={classes.table_fourthRow}>{paramYesterday}</th>
    </tr>
  );
};

export default OneTable;
