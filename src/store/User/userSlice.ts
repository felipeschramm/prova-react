import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { AppDispatch, AppThunk } from "..";

const user = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    email: "",
    password: "",
    name: "",
  },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    register(
      state,
      action: PayloadAction<{ email: string; password: string; name: string }>
    ) {
      console.log(JSON.stringify(action.payload))
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.name = action.payload.name;
    },
  },
});

export const { login, logout, register } = user.actions;
export default user.reducer;

// function sleep(ms:number){
//     return new Promise(resolve => setTimeout(resolve, ms))
// }

// export function asyncIncrement(): AppThunk {
//   return function (dispatch: AppDispatch) {
//     await sleep(3000)
//     dispatch(<passar a funcao que quer>)
//   };
// }
