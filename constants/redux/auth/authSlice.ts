import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TUser } from "./authTypes";
import { getUser, login } from "./authApi";

type TAuthState = {
  userDetails?: TUser | null;
  token?: string;
  loading: boolean;
  error: string;
  successMsg?: string;
  resetRequestSuccess?: boolean;
  passwordResetSuccess?: boolean;
  isLoggedIn: boolean;
};

const initialState: TAuthState = {
  userDetails: null,
  token: "",
  loading: false,
  isLoggedIn: false,
  error: "",
  successMsg: "",
  resetRequestSuccess: false,
  passwordResetSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(login.pending, (state: TAuthState) => {
      state.loading = true
    })

    builder.addCase(login.fulfilled, (state: TAuthState, { payload }: PayloadAction<any>) => {
      state.loading = false,
        state.userDetails = payload.user
    })

    builder.addCase(login.rejected, (state: TAuthState, { payload }: PayloadAction<any>) => {
      state.loading = false,
        state.error = payload
    })


    //fetch
    builder.addCase(getUser.pending, (state: TAuthState) => {
      state.loading = true
    })

    builder.addCase(getUser.fulfilled, (state: TAuthState, { payload }: PayloadAction<any>) => {
      state.loading = false,
        state.userDetails = payload.user
    })

    builder.addCase(getUser.rejected, (state: TAuthState, { payload }: PayloadAction<any>) => {
      state.loading = false,
        state.error = payload
    })
  },
});

// export const {};

export default authSlice.reducer;
