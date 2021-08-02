import PRODUCT_DATA from '../productList/product_lists.js';

const initState = {
	items: PRODUCT_DATA,
	addedItems: [],
	total: 0,
};

const cartReducer = (state = initState, action) => {
	return state;
};
export default cartReducer;
