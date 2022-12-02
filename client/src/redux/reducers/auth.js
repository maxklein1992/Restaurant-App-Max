import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  token: null,
  email: null,
  isAdmin: null,
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the authentication status
    setIsAdminState(state, action) {
      state.isAdmin = action.payload;
    },
    setEmailState(state, action) {
      state.email = action.payload;
    },
    setTokenState(state, action) {
      state.token = action.payload;
    },
  },
});

export const { setIsAdminState, setEmailState, setTokenState } =
  authSlice.actions;

export const selectAuthState = (state) => state.auth;

export default authSlice.reducer;
