import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    username: '',
    accessToken: null,
    isAuthenticated: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {...state, ...action.payload};
    },
    resetUser: (state, action) => {
      return initialState;
    }
  },
})

export const { setUser, resetUser } = authSlice.actions

export default authSlice.reducer