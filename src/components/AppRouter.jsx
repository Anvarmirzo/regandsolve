import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Home, Login } from '.';
import { HOME_ROUTE, LOGIN_ROUTE } from '../utils/consts';

export function AppRouter({ handleClick }) {
	const data = useSelector((data) => data.data);
	let dataLength = Object.keys(data).length;

	const WrapperLogin = () => <Login handleClick={handleClick} />;

	return dataLength ? (
		<Switch>
			<Route path={HOME_ROUTE} component={Home} exact />
			<Redirect to={HOME_ROUTE} />
		</Switch>
	) : (
		<Switch>
			<Route path={LOGIN_ROUTE} component={WrapperLogin} exact />
			<Redirect to={LOGIN_ROUTE} />
		</Switch>
	);
}
