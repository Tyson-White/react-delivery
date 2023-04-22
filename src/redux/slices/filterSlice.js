import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
	name: 'filter',
	initialState: {
		activeCategory: 0,
		sortType: {
			name: 'популярности',
			sort: 'rating'
		}
	},
	reducers: {
		setActiveCategory(state, action) {
			state.activeCategory = action.payload
		},
		setSortType(state, action) {
			state.sortType = action.payload
		}
	}
})

export const { setActiveCategory, setSortType } = filterSlice.actions

export default filterSlice.reducer