export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.user.name;

export const getIsRefreshing = state => state.auth.isRefreshing;

export const getError = state => state.auth.error;
