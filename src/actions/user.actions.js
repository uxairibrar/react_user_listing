const setUser = (users) => {
  return {
    type: 'SET_USERS',
    payload: users,
  };
};

export default { setUser };
