import React from "react";
import classes from "./App.module.scss";
import { Header } from "./components/Header/Header";
import { Schedule } from "./components/Schedule/Schedule";

const App = () => {
  return (
    <div className={classes.app}>
      <Header />
      <Schedule />
    </div>
  );
};

export default App;
