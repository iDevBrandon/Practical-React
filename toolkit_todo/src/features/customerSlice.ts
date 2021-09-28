import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
  value: Customer[];
}

interface AddToCustomerPayload {
  food: string;
  id: string;
}

interface Customer {
  id: string;
  name: string;
  foods: string[];
}
const initialState: CustomerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (state, action: PayloadAction<AddToCustomerPayload>) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.foods.push(action.payload.food);
        }
      });
    },
  },
});

export const { addCustomer, addFoodToCustomer } = customerSlice.actions;
export default customerSlice.reducer;
