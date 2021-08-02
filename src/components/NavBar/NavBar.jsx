import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './NavBar.scss';

const NavBar = () => (
	<div className='header'>
		<Link className='logo-container' to='/'>
			<Logo className='logo' />
		</Link>
		<div className='options'>
			<Link className='option' to='/'>
				HOME
			</Link>
			<Link className='option' to='/myfav'>
				MY FAV
			</Link>
			<Link className='option' to='/cart'>
				CART
			</Link>
			<Link className='option' to='/profile'>
				PROFILE
			</Link>
		</div>
	</div>
);

export default NavBar;
