import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import About from './components/About'
import Places from './components/Places'
import Events from './components/Events'
import Home from './components/Home'
import Footer from './components/Footer'  
import Contact from './components/Contact'
import FAQs from './components/FAQ'
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
            <Route path='/FAQs' component={FAQs} />
          </Switch>
          </div>
          <Footer/>
        
      </BrowserRouter>

    )
  }
}

export default App
