import React, { useEffect } from 'react';
import {Route, Switch, useHistory} from 'react-router-dom'
import './App.css';

import Header from './components/header'
import NavBar from './components/Nav'
import Projects from './components/Pojects'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  const history = useHistory()

  useEffect(() => {
    history.push('/projects')
  }, [])

  return (
			<div id="container">
          <Header />
          <NavBar/>
          <Switch>
            <Route exact path='/projects'>
                <Projects/>
            </Route>
            <Route exact path='/contact'>
                <Contact/>
            </Route>
          </Switch>
		    	<Footer/>
			</div>
  );
}

export default App;
