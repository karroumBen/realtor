import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
}

export const productSlice = createSlice({
  name: 'propertyList',
  initialState,
  reducers: {
    setPropertyList: (state, action) => {
      state.data = action.payload;
    },
  },
})

export const { setPropertyList } = productSlice.actions

export default productSlice.reducer