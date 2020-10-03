const authReducer = (
  auth = { isSignedIn: false, userId: null, userName: null },
  action
) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...auth,
        isSignedIn: true,
        userId: action.payload.userId,
        userName: action.payload.userName,
      };
    case "SIGN_OUT":
      return { ...auth, isSignedIn: false, userId: null, userName: null };
    default:
      return auth;
  }
};

export default authReducer;
