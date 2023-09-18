import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { convertDataToPagination } from "../objects/coverDataToPagination";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Response {
  numFound: number;
  start: number;
  posts: Post[];
}

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.ir",
  }),
  endpoints: (builder) => ({
    getPostsList: builder.query<Response, void>({
      query: () => `/posts`,
      transformResponse: (res: Post[]) => convertDataToPagination(res),
    }),
    getPostById: builder.query<Response, { id: number | string }>({
      query: ({ id }) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
});

export const { useGetPostsListQuery, useGetPostByIdQuery } = postsApi;
