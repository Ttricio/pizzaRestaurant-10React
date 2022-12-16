import { createSlice } from "@reduxjs/toolkit";
import { isCancel } from "axios";

const initialState = {
	user: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state, action) => {
			state.user = null;
		},
	},
});

export const {login, logout} = userSlice.actions;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
