import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
	name: 'filter',
	initialState: {
		activeCategory: 0,
		sortType: {
			name: 'популярности',
			sort: 'rating'
		},
		selectedPage: 0
	},
	reducers: {
		setActiveCategory(state, action) {
			state.activeCategory = action.payload
		},
		setSortType(state, action) {
			state.sortType = action.payload
		},
		setSelectedPage(state, action) {
			state.selectedPage = action.payload
		},
		setFilters(state, action) {
			state.activeCategory = Number(action.payload.activeFilter)
			state.sortType = action.payload.sortBy
			state.selectedPage = Number(action.payload.selectedPage)
		}
	}
})

export const { setActiveCategory, setSortType, setSelectedPage, setFilters } = filterSlice.actions

export default filterSlice.reducer