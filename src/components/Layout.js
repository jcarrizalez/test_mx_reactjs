import React from "react";

import Menu from './Menu';
import Header from './Header';
import Loading from './Loading';
import { Router } from './Router';

export default function Layout(props) {
  return(
    <div className="layout">
      <Header {...props} />
      <main role="main">
        <div className="container-fluid">
              <div className="row">
                  <div className="col-12">
                    {
                      //no me da tiempo de terminar esto, los errores quedan en errors de redux
                      //error?<div className="alert alert-danger">{error}</div>:null
                    }
                    <Menu match={props.match}/>
                    <Router.Layout {...props}/>
                    <Loading />
                  </div>
              </div>    
          </div>
      </main>
    </div>
  )
}  
