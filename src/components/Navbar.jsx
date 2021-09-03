import React from 'react';
import { useSelector } from 'react-redux';

export function Navbar() {
	const { displayName, photoURL } = useSelector((data) => data.data);

	return (
		<nav className='nav'>
			<div className='container'>
				<div className='nav__container'>
					<span className='nav__title nav__logo'>Qiuz app</span>
					{photoURL && displayName && (
						<div className='nav__user'>
							<img className='nav__img' src={photoURL} alt={displayName} />
							<span className='nav__title'>{displayName}</span>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}
