import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, refreshUser } from './operations';
import {
  signUpFulfilledReducer,
  logInFulfilledReducer,
  logInRejectedReducer,
  logOutFulfilledReducer,
  refreshUserPendingReducer,
  refreshUserFulfilledReducer,
  refreshUserRejectedReducer,
  anyPendingReducer,
  anyFulfilledReducer,
  anyRejectedReducer,
} from './authSliceReducers';



const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(signUp.fulfilled, signUpFulfilledReducer)
      .addCase(logIn.fulfilled, logInFulfilledReducer)
      .addCase(logIn.rejected, logInRejectedReducer)
      .addCase(logOut.fulfilled, logOutFulfilledReducer)
      .addCase(refreshUser.pending, refreshUserPendingReducer)
      .addCase(refreshUser.fulfilled, refreshUserFulfilledReducer)
      .addCase(refreshUser.rejected, refreshUserRejectedReducer)
      .addMatcher(
        isAnyOf(signUp.pending, logIn.pending, logOut.pending),
        anyPendingReducer
      )
      .addMatcher(
        isAnyOf(signUp.fulfilled, logIn.fulfilled),
        anyFulfilledReducer
      )
      .addMatcher(
        isAnyOf(signUp.rejected, logIn.rejected, logOut.rejected),
        anyRejectedReducer
      ),
});


export const authReducer = authSlise.reducer;
