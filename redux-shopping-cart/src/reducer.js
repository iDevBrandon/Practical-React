import { CLEAR_CART, DECREASE, INCREASE, REMOVE } from "./actions";

function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === DECREASE) {
    return {
      ...state,
      amount: state.amount - 1,
    };
  }

  if (action.type === INCREASE) {
    return {
      ...state,
      amount: state.amount + 1,
    };
  }

  if (action.type === REMOVE) {
    // console.log(action.payload.id);
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }

  return state;
}

export default reducer;

// switch example
// switch (action.type) {
//   case CLEAR_CART:
//     return { ...state, cart: [] };
//   default:
//     return state;
// }
