import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import SearchPage from './SearchPage';
import PageInner from './PageInner';
import ContactPage from './ContactPage';


class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route path="/" exact render={props => <HomePage {...props} />} />
				{/*<Route exact path='/' component={HomePage} />*/}
				<Route path='/search' component={SearchPage} />
				<Route path='/doctor/:itemId' render={ ({ match }) => <PageInner { ...match.params }/> } />
				<Route path='/clinic/:itemId' render={ ({ match }) => <PageInner { ...match.params }/> } />
				<Route path='/contact' component={ContactPage} />
				<Route render={function () {
					return <p className="notFound">404</p>
				}} />
			</Switch>
		);
	}
}

export default Routes;