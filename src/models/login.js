export default {
  namespace: 'login',
  state: [],
  reducers: {
    'login'(state, {userName: userName, password: password}) {
      console.log('userName:' + userName + 'password:' + password + '     登录成功！！！')
    }
  }
}
