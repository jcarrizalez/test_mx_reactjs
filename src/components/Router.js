import React from "react";
import { Router as ReactRouter, Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import UserRepository from './UserRepository'
import DetailRepository from './DetailRepository'

import Layout from './Layout';
import { redux } from '../services';

const _Layout = ({history}) =>
  <Switch>
    <Route path="/search" exact render={ prop => <UserRepository {...prop} /> } />
    <Route path="/detail/:username/:repository" render={ prop => <DetailRepository {...prop} /> } />
    <Redirect from="/*" to="/search" /> 
  </Switch>

/**
* Router principal, uso 2 router ya que si se quiere cambiar de plantilla no se cambia el codigo actual
*/
function _Index() {
  
  const history = createBrowserHistory();

  //Load store de redux
  redux.store({
    username:process.env['REACT_APP_USERNAME'],
    text_search:'',
    input_search:'username',
    repositories:[],
  });

  return(
    <ReactRouter history={history}>
      <BrowserRouter>
        <Switch>
          <Redirect from="/" exact to="/search" /> 
          <Route path="/*" render={ prop => <Layout {...prop} /> } />
        </Switch>
      </BrowserRouter>
    </ReactRouter>
  )
}

export const Router = {
  Layout:_Layout,
  Index:_Index
}