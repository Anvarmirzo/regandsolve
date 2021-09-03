import React from 'react';

import GoogleIcon from '../assets/images/google.svg';
import GithubIcon from '../assets/images/github.png';
import FacebookIcon from '../assets/images/facebook.svg';

import {
	FacebookProvider,
	GithubProvider,
	GoogleProvider,
} from '../config/authMethods';

export function Login({ handleClick }) {
	return (
		<div className='container'>
			<h1 className='login__title'>Choose a login method:</h1>
			<div className='btns-list'>
				<button
					className='btn facebook__btn'
					onClick={() => handleClick(FacebookProvider)}
				>
					<img className='facebook__icon' src={FacebookIcon} alt='' />
					Facebook
				</button>
				<button
					className='btn github__btn'
					onClick={() => handleClick(GithubProvider)}
				>
					<img className='github__icon' src={GithubIcon} alt='' /> GitHub
				</button>

				<button
					className='btn google__btn'
					onClick={() => handleClick(GoogleProvider)}
				>
					<img className='google__icon' src={GoogleIcon} alt='' />
					Google
				</button>
			</div>
		</div>
	);
}
