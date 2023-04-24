import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		productsList: [],
		cartList: [],
		totalPrice: 0,
		productsCount: 0
	},
	reducers: {
		setProductsList(state, action) {
			state.productsList = [...action.payload]
		},
		setCartItems(state, action) {
			const index = state.cartList.findIndex((i) => i.productName == action.payload.productName)
			console.log(state.writable)
			if (state.cartList.find(obj => obj.productName === action.payload.productName)) {
				state.cartList[index].countOnCart += 1
			} else {
				state.cartList.push({...action.payload, countOnCart: 1})
			}
			state.productsCount += 1
			state.totalPrice = 0
			state.cartList.forEach(obj => state.totalPrice +=  obj.productPrice * (obj.countOnCart + 1))
		},
		setCount(state, action) {
			state.
			state.cartList[action.payload.index].countOnCart = action.payload.count
		},
		clearCart(state) {
			state.productsCount = 0
			state.totalPrice = 0
			state.cartList = []
		}
	}
})

export const { setProductsList, setCartItems, clearCart, setCount } = productsSlice.actions

export default productsSlice.reducer