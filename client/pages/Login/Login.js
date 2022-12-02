import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  setTokenState,
  setEmailState,
  setIsAdminState,
} from "../../src/redux/reducers/auth";
import Button from "../../src/components/Button/Button";
import Container from "../../src/components/Container/container";
import styles from "./Login.module.scss";
import { appDynamicLink, authLogin } from "../../src/constants/paths";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const fetchToken = async () => {
    const token = await localStorage.getItem("token");
    dispatch(setTokenState(token));
  };

  const onChangeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = () => {
    handleLogin(user.email, user.password);
  };

  const handleLogin = async (email, password) => {
    await fetch(`${appDynamicLink}${authLogin}`, {
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
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const email = data.data.email;
        const isAdmin = data.data.isAdmin;
        dispatch(setIsAdminState(isAdmin));
        dispatch(setEmailState(email));
        const token = data.data._id;
        localStorage.setItem("token", token);
        setUser({
          email: "",
          password: "",
        });
      });
    setTimeout(() => {
      fetchToken();
    }, 1000);
  };

  return (
    <Container className={styles.container}>
      <h1 className={styles.header}>Login</h1>
      <p className={styles.title}>Email</p>
      <input
        placeholder="email"
        value={user.email}
        className={styles.inputField}
        name="email"
        onChange={onChangeHandler}
      />
      <p className={styles.title}>Password</p>
      <input
        placeholder="password"
        value={user.password}
        className={styles.inputField}
        name="password"
        type="password"
        onChange={onChangeHandler}
      />
      <Button
        label="Login"
        className={styles.button}
        onClick={() => submitHandler()}
        disabled={!user.email || !user.password}
      />
    </Container>
  );
};

export default Login;
