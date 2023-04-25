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
			if (state.cartList.find(obj => obj.productName === action.payload.productName)) {
				state.cartList[index].countOnCart += 1
			} else {
				state.cartList.push({...action.payload, countOnCart: 1})
			}
			
			state.productsCount += 1
			state.totalPrice = 0
			state.cartList.forEach(obj => state.totalPrice +=  obj.productPrice * obj.countOnCart)
			state.cartList[index] = {...state.cartList[index], productSize: action.payload.productSize}
		},
		clearCart(state) {
			state.productsCount = 0
			state.totalPrice = 0
			state.cartList = []
		},
		removeCartItem(state, action) {
			state.cartList = state.cartList.filter(obj => obj.productName !== action.payload.productName)
			state.productsCount -= action.payload.countOnCart
			state.totalPrice -= action.payload.productPrice * action.payload.countOnCart
		},
		removeOneItem(state, action) {
			const index = state.cartList.findIndex((i) => i.productName == action.payload.productName)		
			if (state.cartList[index].countOnCart > 1) {
				state.cartList[index].countOnCart -= 1
				state.totalPrice -= action.payload.productPrice
			} else {
					state.cartList = state.cartList.filter(obj => obj.productName !== action.payload.productName)
					state.totalPrice -= action.payload.productPrice * action.payload.countOnCart
	
			}
			state.productsCount -= 1
		}
	}
})

export const { setProductsList, setCartItems, clearCart, setCount, removeCartItem, removeOneItem } = productsSlice.actions

export default productsSlice.reducer