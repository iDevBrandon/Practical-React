// Define action type
export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";

// Create action creator ()
export const Increment = (value) => ({
  type: INCREMENT,
  payload: value,
});

export const Decrement = (value) => ({
  type: DECREMENT,
  payload: value,
});
