import React, { Component } from 'react';
import './HomePage.scss';

import PRODUCT_DATA from '../../productList/product_lists.js';

class HomePage extends Component {
	render() {
		return (
			<div className='homepage'>
				{PRODUCT_DATA.map((item) => (
					<div className='menu-item'>
						<div
							className='image'
							style={{
								backgroundImage: `url(${item.imageUrl})`,
							}}
						></div>
						<div className='collection-footer'>
							<span className='name'>{item.name}</span>
							<span className='price'>$ {item.price}</span>
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default HomePage;
