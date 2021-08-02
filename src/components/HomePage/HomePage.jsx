import React, { Component } from 'react';
import { connect } from 'react-redux';

import './HomePage.scss';

class HomePage extends Component {
	render() {
		return (
			<div className='homepage'>
				{this.props.items.map((item) => (
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
							<span>Add to cart</span>
						</div>
					</div>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		items: state.items,
	};
};

export default connect(mapStateToProps)(HomePage);
