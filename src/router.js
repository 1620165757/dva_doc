import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from "./routes/Products";
import Login from "./routes/Login";

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        {/*<Route path="/" exact component={IndexPage} />*/}
        <Route path="/" exact component={Login}/>
        <Route path="/Products" exact component={Products}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
