import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import MainLayout from './layouts/MainLayout'
import MovieListContainer from './containers/MovieListContainer'
import MovieDetailsContainer from './containers/MovieDetailsContainer'
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from 'react-router'

class AppRoute extends Component {
  render() {
    return (
    	<MainLayout>
			<Router>
				<Switch>
			    	<Route exact path="/" component={MovieListContainer} />
			    	<Route path="/:id" component={MovieDetailsContainer} />
				</Switch>
			</Router>
		</MainLayout>
    )
  }
}

export default AppRoute
