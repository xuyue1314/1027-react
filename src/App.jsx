import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import  './App.css'
import routes from './config/routes'
export default class App extends Component {
  
  render() {
    
    return (
      <div>
        <Router>
          <Switch>
            {routes.map((route)=>{
              return <Route {...route} key={route.path}></Route>
            })}
          </Switch>
        </Router>
      </div>
    )
  }
}
