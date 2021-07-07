import ActionTypes from "../actions/vehicle";

function reducer(state = { vehicle: "" }, action) {
  switch (action.type) {
    case ActionTypes.car:
      return { vehicle: "It is a car" };
    case ActionTypes.bike:
      return { vehicle: "It is a bike" };
    default:
      return { vehicle: "NOTHING" };
  }
}

export default reducer;
