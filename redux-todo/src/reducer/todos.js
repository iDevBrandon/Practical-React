function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.payload]);
    default:
      return state;
  }
}

export default todos;
