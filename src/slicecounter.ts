import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  data: string | null;
  loading: boolean;
}

const initialCounter: CounterState = {
  value: 0,
  data: null,
  loading: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounter,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
