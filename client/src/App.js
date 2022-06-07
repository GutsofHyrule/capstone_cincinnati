import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import About from './components/About'
import Places from './components/Places'
import Events from './components/Events'
import Home from './components/Home'
<<<<<<< HEAD
// import Contact from './components/Contact'
=======
import Contact from './components/Contact'
>>>>>>> 1910c36ec768f4aad85755a07b9d63c19aeafe5b
class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/places' component = {Places} />
            <Route path='/events' component={Events} />
            {/* <Route path='/contact' component={Contact} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
