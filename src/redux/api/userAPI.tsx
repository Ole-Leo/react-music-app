import { authAPI } from './authAPI';
import { AuthUserData } from '../../models/types';

export const userAPI = authAPI.injectEndpoints({
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

    currentUser: build.query<AuthUserData, void>({
      query: () => 'user/me/',
    }),
  }),
});

export const {
  useLoginUserMutation,
  useSignUpUserMutation,
  useGetTokenMutation,
  useCurrentUserQuery,
} = userAPI;
