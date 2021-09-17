import React from "react";
import classes from "./Settings.module.scss";
import refresh from "./../../assets/refresh.svg";
import settings from "./../../assets/settings.svg";
import close from "./../../assets/close.svg";

const Settings = () => {
  return (
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
  );
};

export default Settings;
