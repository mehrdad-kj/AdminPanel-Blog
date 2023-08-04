import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPostsList: builder.query({
      query: () => `/posts`,
      transformResponse: (response: { data: any }) => response.data,
    }),
  }),
});

export const { useGetPostsListQuery } = postsApi;
