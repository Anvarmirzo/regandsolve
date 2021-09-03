import React from 'react';
import { useSelector } from 'react-redux';
import { Quiz } from '.';

export function Home() {
	const data = useSelector((data) => data.data);
	return (
		<main className='container'>
			<h1 className='login__title'>Welcome {data.displayName}!</h1>
			<Quiz />
		</main>
	);
}
