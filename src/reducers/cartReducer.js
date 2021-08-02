import PRODUCT_DATA from '../productList/product_lists.js';
import { ADD_TO_CART } from '../actions/action-types/cart-actions';

const initState = {
	items: PRODUCT_DATA,
	addedItems: [],
	total: 0,
};

const cartReducer = (state = initState, action) => {
	if (action.type === ADD_TO_CART) {
		let addedItem = state.items.find((item) => item.productId === action.id);
		let existed_item = state.addedItems.find(
			(item) => action.id === item.productId
		);

		if (existed_item) {
			addedItem.quantity += 1;
			return {
				...state,
				total: state.total + addedItem.price,
			};
		} else {
			addedItem.quantity = 1;
			let newTotal = state.total + addedItem.price;

			return {
				...state,
				addedItems: [...state.addedItems, addedItem],
				total: newTotal,
			};
		}
	} else {
		return state;
	}
};

export default cartReducer;
