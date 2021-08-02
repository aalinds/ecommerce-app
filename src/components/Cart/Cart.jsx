import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class Cart extends Component {
	render() {
		let addedItems = this.props.items.length ? (
			this.props.items.map((item) => {
				return (
					<li key={item.productId}>
						<div>
							<div
								style={{
									backgroundImage: `url(${item.imageUrl})`,
									height: '50px',
									width: '50px',
									backgroundColor: 'red',
								}}
							></div>
						</div>

						<div>
							<span>{item.name}</span>
							<p>{item.desc}</p>
							<p>
								<b>Price: {item.price}$</b>
							</p>
							<p>
								<b>Quantity: {item.quantity}</b>
							</p>
							<div>
								<Link to='/cart'>
									<i>^</i>
								</Link>
								<Link to='/cart'>
									<i>arrow_drop_down</i>
								</Link>
							</div>
							<button>Remove</button>
						</div>
					</li>
				);
			})
		) : (
			<p>Nothing.</p>
		);
		return (
			<div>
				<div>
					<h5>You have ordered:</h5>
					<ul>{addedItems}</ul>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		items: state.addedItems,
	};
};

export default connect(mapStateToProps)(Cart);
