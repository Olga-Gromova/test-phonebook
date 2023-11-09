export const signUpFulfilledReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
};

export const logInFulfilledReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
};

export const logInRejectedReducer = state => {
  state.isLoggedIn = false;
};

export const logOutFulfilledReducer = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
};

export const refreshUserPendingReducer = state => {
  state.isRefreshing = true;
};

export const refreshUserFulfilledReducer = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const refreshUserRejectedReducer = state => {
  state.isRefreshing = false;
};

export const anyPendingReducer = state => {
  state.error = null;
  state.isLoading = true;
};

export const anyFulfilledReducer = state => {
  state.isLoggedIn = true;
  state.isLoading = false;
};

export const anyRejectedReducer = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};
