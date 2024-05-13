// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://northwind.vercel.app/api/products",
  }),
  endpoints: (builder) => ({
    getProductById: builder.query({
      query: (id) => `/${id}`,
    }),
    getAllProduct: builder.query({
      query: () => `/`,
    }),
    deleteProductById: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
    postProduct: builder.mutation({
      query: ({ obj }) => ({
        url: `/`,
        method: "POST",
        body: obj,
      }),
    }),
    pacthProductById: builder.mutation({
      query: (id, { obj }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: obj,
      }),
    }),
    putProductById: builder.mutation({
      query: (id, { obj }) => ({
        url: `/${id}`,
        method: "PUT",
        body: obj,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductByIdQuery,
  useGetAllProductQuery,
  useDeleteProductByIdMutation,
  usePostProductMutation,
} = productsApi;
