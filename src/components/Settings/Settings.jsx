import React, { useState } from "react";
import classes from "./Settings.module.scss";
import refresh from "./../../assets/refresh.svg";
import settings from "./../../assets/settings.svg";
import close from "./../../assets/close.svg";
import { AppModal } from "./../UI/AppModal/AppModal";
import { SettingsForm } from "./../SettingsForm/SettingsForm";

export const Settings = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className={classes.settings}>
      <AppModal visible={modal} setVisible={setModal}>
        <SettingsForm />
      </AppModal>
      <div className={classes.settings_title}>Общая статистика</div>
      <div className={classes.settings_btns}>
        <div className={classes.settings_btns_icon}>
          <img src={refresh} alt={"refresh"} width={30} />
        </div>

        <div
          className={classes.settings_btns_icon}
          onClick={() => setModal(!modal)}
        >
          <img src={settings} alt={"settings"} width={30} />
        </div>

        <div className={classes.settings_btns_icon}>
          <img src={close} alt={"close"} width={30} />
        </div>
      </div>
    </div>
  );
};
