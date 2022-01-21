import React from "react";
import Button from "../UI/Button/Button";
import classes from "./Navigation.module.css";
const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="./signin">Sign In</a>
        </li>
        <li>
          <a href="./signup">Sign Up</a>
        </li>
        <li>
          <Button type="button">Logout</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
