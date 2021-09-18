import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPointAction } from "../../store/scheduleReducer";

export const Schedule = () => {
  const dispatch = useDispatch();
  const pointsData = useSelector((state) => state.scheduleName.pointsData);
  // получение данных по каждой точке, которые потом будут храниться на серваке и подгружаться с бека
  const data = [...pointsData];
  // здесь костыль, т.к. React запрещает в series пробрасывать данные из Redux сраззу, поэтому копируем массив и баг уходит

  const options = {
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver() {
              // исп. click при необходимости не наводить, а кликать на точки графика
              let point = this;
              dispatch(setCurrentPointAction(point.id));
              // point.index - получение номер точки по индексу показа
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
