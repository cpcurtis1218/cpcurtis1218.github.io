import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'

const App = () => (
  <Fragment>
    <Header />
    <Route path="/projects" component={Projects}/>
    <Route path="/about" component={About}/>
  </Fragment>
)

export default App
