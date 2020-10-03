export const signIn = (userId, userName) => {
  return {
    type: "SIGN_IN",
    payload: {
      userId: userId,
      userName: userName,
    },
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
