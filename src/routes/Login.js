import React from "react";
import {connect} from 'dva';
import {LoginComponent} from "../components/LoginComponent";
import login from "../models/login";

const Login = ({dispatch}) => {

  const login = (userName, password) => {
    dispatch({
      type: 'login/login',
      userName: userName,
      password: password
    })
  };

  return (
    <LoginComponent login={login}/>
  )
};

export default connect(({login}) => login)(Login);
