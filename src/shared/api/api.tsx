import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICurrencies } from '.';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coinbase.com',
    headers: {
      'Content-Type': 'application/json',
    },
  }),
  endpoints: (builder) => ({
    getCurrencies: builder.query<ICurrencies, void>({
      query: () => '/v2/currencies',
    }),
  }),
});

export const { useGetCurrenciesQuery } = api;
