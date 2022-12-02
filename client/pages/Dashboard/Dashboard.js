import React, { useState } from "react";
import { useSelector } from "react-redux";

import { appDynamicLink, registerUser } from "../../src/constants/paths";
import Button from "../../src/components/Button/Button";
import Container from "../../src/components/Container/container";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    isAdmin: false,
  });

  const { email, isAdmin } = useSelector((state) => state.auth);

  const onChangeHandler = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = () => {
    registerNewUser(newUser.email, newUser.password, newUser.isAdmin);
  };

  const registerNewUser = async (email, password, isAdmin) => {
    fetch(`${appDynamicLink}${registerUser}`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
        isAdmin,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setNewUser({
          ...newUser,
          email: "",
          password: "",
        });
      });
  };

  return (
    <Container className={styles.container}>
      <h1 className={styles.header}>Dashboard</h1>
      {email && <h1 className={styles.header}>{email}</h1>}
      {isAdmin ? (
        <>
          <h2 className={styles.subHeader}>Register user</h2>
          <p className={styles.title}>Email</p>
          <input
            placeholder="email"
            value={newUser.email}
            className={styles.inputField}
            name="email"
            onChange={onChangeHandler}
          />
          <p className={styles.title}>Password</p>
          <input
            placeholder="password"
            value={newUser.password}
            className={styles.inputField}
            name="password"
            type="password"
            onChange={onChangeHandler}
          />
          <Button
            label="Register new user"
            className={styles.button}
            onClick={() => submitHandler()}
            disabled={!newUser.email || !newUser.password}
          />
        </>
      ) : (
        <p>You do not have the admin role. So you cannot create new users</p>
      )}
    </Container>
  );
};

export default Dashboard;
