import { combineReducers } from "redux";
import authslice from "./auth/authSlice";

export default combineReducers({
  auth: authslice,
});

