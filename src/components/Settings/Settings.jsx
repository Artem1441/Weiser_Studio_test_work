import React, { useState } from "react";
import classes from "./Settings.module.scss";
import refresh from "./../../assets/refresh.svg";
import settings from "./../../assets/settings.svg";
import close from "./../../assets/close.svg";
import { AppModal } from "./../UI/AppModal/AppModal";
import { SettingsForm } from "./../SettingsForm/SettingsForm";
import { fetchDollarRate } from "./../../API/fetchDollarRate";
import { CONSTS } from "../styleConsts";

export const Settings = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className={classes.settings}>
      <AppModal visible={modal} setVisible={setModal}>
        {/* модальное окно */}
        <SettingsForm />
        {/* окно настроек */}
      </AppModal>
      <div className={classes.settings_title}>Общая статистика</div>
      <div className={classes.settings_btns}>
        <div className={classes.settings_btns_icon} onClick={fetchDollarRate}>
          {/* обновление курса доллара */}
          <img src={refresh} alt={"refresh"} width={CONSTS.HEADER_ICON_SIZE} />
        </div>

        <div
          className={classes.settings_btns_icon}
          onClick={() => setModal(!modal)}
        >
          {/* открытие модального окна с настройками */}
          <img
            src={settings}
            alt={"settings"}
            width={CONSTS.HEADER_ICON_SIZE}
          />
        </div>

        <div
          className={classes.settings_btns_icon}
          onClick={() => {
            alert("Действие при клике на крестик");
          }}
        >
          <img src={close} alt={"close"} width={CONSTS.HEADER_ICON_SIZE} />
        </div>
      </div>
    </div>
  );
};
