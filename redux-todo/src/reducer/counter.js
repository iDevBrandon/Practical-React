import { DECREMENT, INCREMENT } from "../actions/counter";

// set initial state
const initialState = {
  count: 0,
};

// create a reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.payload,
      };

    case DECREMENT:
      return {
        count: state.count - action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
