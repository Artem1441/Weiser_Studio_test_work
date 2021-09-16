import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPointAction } from "../../store/scheduleReducer";

export const Schedule = () => {
  const dispatch = useDispatch();
  const pointsData = useSelector((state) => state.scheduleName.pointsData);
  const data = [...pointsData];

  const options = {
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver() {
              let point = this;
              //   console.log(point.id);
              dispatch(setCurrentPointAction(point.id));
              //   console.log(point.index);
            },
          },
        },
      },
    },
    series: [{ data }],
    title: "",
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
// https://jsfiddle.net/BlackLabel/ybeptg9j/ - действие при нажатие на точку графика
