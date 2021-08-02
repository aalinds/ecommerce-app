import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartActions';

import './HomePage.scss';

class HomePage extends Component {
	handleClick = (id) => {
		this.props.addToCart(id);
	};

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
							<span
								onClick={() => {
									this.handleClick(item.productId);
								}}
							>
								Add to cart
							</span>
						</div>
					</div>
				))}
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (id) => {
			dispatch(addToCart(id));
		},
	};
};
const mapStateToProps = (state) => {
	return {
		items: state.items,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
