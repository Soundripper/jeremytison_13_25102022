import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { login, logout } from './authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost/3001',
  login: 'include',
  prepareHeaders: (headers, {getState}) => {
    const token = getState().auth.token
    if (token) {
      headers.set("authorization", 'Bearer ${token')
    }
    return headers
  }
})

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions)

//   if (result?.error?.originalStatus === 403)
// }