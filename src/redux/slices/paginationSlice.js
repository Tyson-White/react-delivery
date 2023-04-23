import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
	name: 'pagination',
	initialState: {
		selectedPage: 0
	},
	reducers: {
		setSelectedPage(state, action) {
			state.selectedPage = action.payload
		},
		setNextPage(state) {
			state.selectedPage += 1
		},
		setBackPage(state) {
			if (state.selectedPage > 0) {
				state.selectedPage -= 1
			}	
		}
	}
})

export const { setSelectedPage, setNextPage, setBackPage } = paginationSlice.actions

export default paginationSlice.reducer