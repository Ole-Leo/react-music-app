import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthUserData } from '../../models/types';
import { URL } from '../../utils/const';
import { RootState } from '../store';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  tagTypes: ['Auth', 'User'],

  baseQuery: fetchBaseQuery({
    credentials: 'include',
    baseUrl: URL,

    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).token.access;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: build => ({
    loginUser: build.mutation({
      query: (body: AuthUserData) => ({
        url: 'user/login/',
        method: 'POST',
        body,
      }),
    }),

    signUpUser: build.mutation({
      query: (body: AuthUserData) => ({
        url: 'user/signup/',
        method: 'POST',
        body,
      }),
    }),

    getToken: build.mutation({
      query: (body: AuthUserData) => ({
        url: 'user/token/',
        method: 'POST',
        body,
      }),
    }),

    refreshToken: build.mutation({
      query: (body: string) => ({
        url: 'user/token/refresh',
        method: 'POST',
        body,
      }),
    }),

    currentUser: build.query<AuthUserData, void>({
      query: () => 'user/me/',
      providesTags: ['User'],
    }),
  }),
});

export const {
  useLoginUserMutation,
  useSignUpUserMutation,
  useGetTokenMutation,
  useRefreshTokenMutation,
  useCurrentUserQuery,
} = authAPI;
