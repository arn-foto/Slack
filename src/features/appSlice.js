import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
	name: "app",
	initialState: {
		roomId: null,
	},
	reducers: {
		enterRoom: (state, action) => {
			state.roomId = action.payload.roomId;
		},
	},
});

export const { enterRoom } = appSlice.actions;

export const selectCount = (state) => state.counter.value;

export default appSlice.reducer;
