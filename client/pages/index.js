import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectAuthState } from "../src/redux/reducers/auth";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";

const Home = () => {
  const authState = useSelector(selectAuthState);
  const storeToken = authState.token;

  return storeToken ? <Dashboard /> : <Login />;
};

export default Home;
