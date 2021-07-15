import { configureStore } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
import userReducer from "./User/userSlice";
import gamesReducer from "./Games/gamesSlice";
import cartReducer from './Cart/cartSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    games: gamesReducer,
    cart: cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;
// export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
// export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
