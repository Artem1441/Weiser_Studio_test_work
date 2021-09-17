import React from "react";
import classes from "./App.module.scss";
import { Header } from "./components/Header/Header";
import { Schedule } from "./components/Schedule/Schedule";
import { Table } from "./components/Table/Table";

const App = () => {
  return (
    <div className={classes.app}>
      <Header />
      <Schedule />
      <Table />
    </div>
  );
};

export default App;
