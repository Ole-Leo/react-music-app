import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthUserData } from '../../models/types';
import { URL } from '../../models/const';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  tagTypes: ['Auth'],
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
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
  }),
});

export const { useLoginUserMutation, useSignUpUserMutation } = authAPI;
