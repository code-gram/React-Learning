import React from "react";
import classes from "./UserRegistration.module.css";
import Button from "../UI/Button/Button";
import Card from "../UI/Card";
const UserRegisteration = (props) => {
  return (
    <Card className={classes.register}>
      <h3>User Registration</h3>
      <hr />
      <form>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="type" id="name" placeholder="Enter Name" />
        </div>
        <div className={classes.control}>
          <label htmlFor="contact">Contact</label>
          <input type="number" id="contact" placeholder="Enter Contact" />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter Email" />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter Password" />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Register
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default UserRegisteration;
