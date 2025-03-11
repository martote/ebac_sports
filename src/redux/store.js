import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import { cartApi } from './cartApi'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [cartApi.reducerPath]: cartApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartApi.middleware)
})

export default store
