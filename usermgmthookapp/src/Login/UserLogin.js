import React from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card";
import classes from "./UserLogin.module.css";
const UserLogin = (props) => {
  return (
    <Card className={classes.login}>
      <h3>User Login</h3>
      <hr />
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Sign In
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default UserLogin;
