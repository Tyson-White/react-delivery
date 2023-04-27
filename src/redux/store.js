import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import productsSlice from './slices/productsSlice'
import UserSlice from './slices/UserSlice'
export const store = configureStore({
  reducer: {
		filter: filterSlice,
		products: productsSlice,
		user: UserSlice
	}
})


