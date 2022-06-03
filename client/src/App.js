import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import About from './components/About'
import Places from './components/Places'
import Events from './components/Events'
class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/places' component = {Places} />
            <Route path='/events' component={Events} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
