import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.exemplo.com' }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: () => '/products'
    }),
    addProductToCart: builder.mutation({
      query: (product) => ({
        url: '/cart',
        method: 'POST',
        body: product
      })
    })
  })
})

export const { useFetchProductsQuery, useAddProductToCartMutation } = cartApi
