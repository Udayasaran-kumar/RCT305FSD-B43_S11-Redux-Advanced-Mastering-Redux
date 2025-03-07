import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API URL
const API_URL = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee";

// Async thunk to fetch coffee data with sorting
export const fetchCoffees = createAsyncThunk(
  "coffee/fetchCoffees",
  async (sortOrder = "name") => {
    const response = await fetch(`${API_URL}?sort=${sortOrder}`);
    const data = await response.json();
    return data.data; // Assuming data is inside `data.data`
  }
);

const coffeeSlice = createSlice({
  name: "coffee",
  initialState: {
    coffees: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoffees.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCoffees.fulfilled, (state, action) => {
        state.loading = false;
        state.coffees = action.payload;
      })
      .addCase(fetchCoffees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default coffeeSlice.reducer;
