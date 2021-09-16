import React from "react";
import classes from "./Header.module.scss";
import refresh from "./../../assets/refresh.svg";
import settings from "./../../assets/settings.svg";
import close from "./../../assets/close.svg";

export const Header = () => {
  return (
    <div>
      <div className={classes.settings}>
        <div className={classes.settings_title}>Общая статистика</div>
        <div className={classes.settings_btns}>
          <div className={classes.settings_btns_icon}>
            <img src={refresh} alt={"refresh"} width={30} />
          </div>

          <div className={classes.settings_btns_icon}>
            <img src={settings} alt={"settings"} width={30} />
          </div>

          <div className={classes.settings_btns_icon}>
            <img src={close} alt={"close"} width={30} />
          </div>
        </div>
      </div>

      <div className={classes.indicators}>
        <div className={classes.indicators_row}>
          <div className={classes.indicators_title}>Показатель</div>
          <div className={classes.indicators_value}>Выручка в <span>руб</span></div>
        </div>

        <div className={classes.indicators_row}>
          <div className={classes.indicators_title}>Текущий день</div>
          <div className={classes.indicators_value}>500</div>
        </div>

        <div className={classes.indicators_row}>
          <div className={classes.indicators_title}>Вчера</div>
          <div className={classes.indicators_value}>480</div>
        </div>

        <div className={classes.indicators_row}>
          <div className={classes.indicators_title}>Этот день недели</div>
          <div className={classes.indicators_value}>480</div>
        </div>
      </div>
    </div>
  );
};
