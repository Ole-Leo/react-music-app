import {
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
import { RootState } from '../store';
import { URL } from '../../utils/const';
import { logout } from '../features/userSlice';
import { setToken, TokenState } from '../features/tokenSlice';
import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

const baseQuery = fetchBaseQuery({
  baseUrl: URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).token.access;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
  credentials: 'include',
});

const baseQueryWithReAuth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {}
) => {
  let result = await baseQuery(args, api, extraOptions);
  const prevQueryArgs = args;
  const token: TokenState = (api.getState() as RootState).token;

  if (result.error && result.error.status === 401) {
    args = {
      url: '/user/token/refresh/',
      method: 'POST',
      body: { refresh: token.refresh },
    };

    const refreshResult = await baseQuery(args, api, extraOptions);
    const response = refreshResult.data as any;

    if (response) {
      api.dispatch(setToken({ ...response }));
      Cookies.set('access', response.access);
      result = await baseQuery(prevQueryArgs, api, extraOptions);
    } else {
      window.location.href = '/login';
      api.dispatch(logout());
    }
  }

  return result;
};

export const authAPI = createApi({
  reducerPath: 'authAPI',
  tagTypes: ['Tracks', 'User'],
  baseQuery: baseQueryWithReAuth,
  endpoints: builder => ({}),
});
