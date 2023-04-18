import React, { useState } from "react";

import Modal from "../UI/Modal";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

function AddUser(props) {
  // state
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  // event handler
  function addUserHandler(event) {
    event.preventDefault();

    // validation
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "유효하지 않은 입력",
        message: "정확한 이름과 나이를 입력해주세요.",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "유효하지 않은 입력",
        message: "정확한 나이를 입력해주세요(1 이상의 숫자).",
      });
      return;
    }

    // update users state
    props.onAddUser(userName, userAge);

    // reset
    setUserName("");
    setUserAge("");
  }

  function userNameChangeHandler(event) {
    setUserName(event.target.value);
  }

  function userAgeChangeHandler(event) {
    setUserAge(event.target.value);
  }

  function confirmHandler() {
    setError(null);
  }

  return (
    <div>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={confirmHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">유저 이름</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="userAge">나이</label>
          <input
            id="userAge"
            type="number"
            value={userAge}
            onChange={userAgeChangeHandler}
          />
          <Button type="submit">추가</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
