import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Response {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.ir",
  }),
  endpoints: (builder) => ({
    getPostsList: builder.query<Response[], void>({
      query: () => `/posts`,
    }),
    getPostById: builder.query<Response, { id: number | string }>({
      query: ({ id }) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
});

export const { useGetPostsListQuery, useGetPostByIdQuery } = postsApi;
