import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    greetingstore: [],
    status: "idle",
    error: null,
}

const BASE_URL = "http://localhost:3000/";

export const fetchGreeting = createAsyncThunk (
    "greetings/fechgreetings",
    async () => {
        const response = await axios.get(BASE_URL)
        return response.data
    }
)

const greetingSlice = createSlice ({
     name: "greetings",
     initialState,
     reducers: {},
     extraReducers: (builder) => {
        builder.addCase(fetchGreeting.pending, (state) => {
            state.status = "Loading"
        })
        builder.addCase(fetchGreeting.fulfilled, (state, action) => {
            state.status = "succeded";
            state.greetingstore = state.greetingstore.concat(action.payload)
        })
        builder.addCase(fetchGreeting.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message
        })
     }
})

export default greetingSlice.reducer