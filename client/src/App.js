import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import About from './components/About'
import Places from './components/Places'
import Events from './components/Events'
import Home from './components/Home'
import Footer from './components/Footer'  
import Contact from './components/Contact'
class App extends Component{
  render(){
    return(
      <BrowserRouter>
        
        <div className="content-wrap">

          <Navbar />
          <Switch>
          
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/amusements' component = {Places} />
            <Route path='/events' component={Events} />
            <Route path='/contact' component={Contact} />
          </Switch>
          </div>
          <Footer/>
        
      </BrowserRouter>

    )
  }
}

export default App
