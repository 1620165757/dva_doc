import React from 'react'
import {Input, Button} from 'antd'

export const LoginComponent = ({login}) => {

  const loginSubmit = () => {
    console.log(123);
    login("dingiie","123456")
  };

  return (
    <div>
      <div style={{marginBottom: 16}}>
        <Input addonBefore="用户名" defaultValue="mysite"/>
      </div>
      <div style={{marginBottom: 16}}>
        <Input addonBefore="密码" defaultValue="mysite"/>
      </div>
      <Button type="primary" onClick={loginSubmit}>登录</Button>
    </div>
  )
};
