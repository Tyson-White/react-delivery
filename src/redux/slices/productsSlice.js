import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		productsList: [],
		cartList: [],
		totalPrice: 0
	},
	reducers: {
		setProductsList(state, action) {
			state.productsList = [...action.payload]
		},
		setCartItems(state, action) {
			state.cartList.push(action.payload)

			state.totalPrice = 0
			state.cartList.forEach(obj => state.totalPrice += obj.productPrice)

		},
		clearCart(state) {
			state.totalPrice = 0
			state.cartList = []
		}
	}
})

export const { setProductsList, setCartItems, clearCart } = productsSlice.actions

export default productsSlice.reducer