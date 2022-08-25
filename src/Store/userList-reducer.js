import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUserList = createAsyncThunk(
  'userList/fetchUserList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userListSlice = createSlice({
  name: 'userList',
  initialState: {
    users: [],
    status: null,
    error: null,
  },
  extraReducers: {
    [fetchUserList.pending]: (state) => {
      state.status = 'Loading';
      state.error = null;
    },
    [fetchUserList.fulfilled]: (state, action) => {
      state.status = 'Resolved';
      state.users = action.payload;
    },
    [fetchUserList.rejected]: (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
    },
  },
});

export default userListSlice.reducer;
