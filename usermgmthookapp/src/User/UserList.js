import React from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card";
import classes from "./UserList.module.css";
const UserList = (props) => {
  return (
    <Card className={classes.table}>
      <Button>
        <i class="fas fa-user-plus"></i>
      </Button>
      <br />
      <br />

      <table className={classes.users}>
        <thead>
          <tr>
            <th>Sr#</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pankaj Sharma</td>
            <td>8827611875</td>
            <td>pankajsimmc@gmail.com</td>
            <td>
              &nbsp;&nbsp;
              <i class="fas fa-pencil-alt"></i>
            </td>
            <td>
              &nbsp;&nbsp;
              <i class="fas fa-trash-alt"></i>
            </td>
          </tr>

          <tr>
            <td>1</td>
            <td>Pankaj Sharma</td>
            <td>8827611875</td>
            <td>pankajsimmc@gmail.com</td>
            <td>
              &nbsp;&nbsp;
              <i class="fas fa-pencil-alt"></i>
            </td>
            <td>
              &nbsp;&nbsp;
              <i class="fas fa-trash-alt"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};
export default UserList;
