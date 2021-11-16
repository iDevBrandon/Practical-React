export const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

export const getUser = () => ({
  type: GET_USER,
});

export const setUser = (user) => ({
  type: SET_USER,
  user,
});

const initialState = {
  user: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
      };
    case SET_USER:
      const { user } = action;
      return {
        ...state,
        user,
      };
    default:
      return state;
  }
};

export default reducer;