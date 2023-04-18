import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

function AddUser(props) {
  function addUserHandler(event) {
    event.preventDefault();
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">유저 이름</label>
        <input id="username" type="text" />
        <label htmlFor="age">나이</label>
        <input id="age" type="number" />
        <Button type="submit">추가</Button>
      </form>
    </Card>
  )
}

export default AddUser;