import React from "react";
import Card from "../UI/Card";
import classes from "./Dashboard.module.css";
const Dashboard = (props) => {
  return (
    <Card className={classes.dashboard}>
      <h2>Welcome on Dashboard</h2>
    </Card>
  );
};
export default Dashboard;
