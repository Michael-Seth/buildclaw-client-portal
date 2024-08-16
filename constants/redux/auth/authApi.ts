import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpRequest } from "../../http/http";
import { DD_USER } from "../../http/config";
import { LoginDto } from "./authTypes";



//login
export const login = createAsyncThunk(
    "auth/login",
    async (data: LoginDto, { rejectWithValue, fulfillWithValue }) => {

        try {
            const result = await httpRequest({
                url: "login",
                method: "POST",
                body: data,
                needToken: false,
            });
            if (result.error) {
                return rejectWithValue(result);
            }
            if (result.status === "error") {
                return rejectWithValue(result);
            }
            if (
                result.status === "success" &&
                result.data.accessToken
            ) {
                localStorage.setItem(DD_USER, result.data.accessToken);
                return fulfillWithValue(result);
            } else {
                const wrongRole = {
                    status: "error",
                    code: 500,
                    data: {},
                    message: "User does not exist",
                };
                return rejectWithValue(wrongRole);
            }

            // return fulfillWithValue(result);
        } catch (error: any) {
            return rejectWithValue(error);
        }
    }
);



//fetch user profile
export const getUser = createAsyncThunk(
    "auth/fetchUser",
    async (id: string, { rejectWithValue, fulfillWithValue }) => {
        try {
            const result = await httpRequest({
                url: `users/${id}         `,
                method: "GET",
            });
            if (result.error) {
                return rejectWithValue(result.error.message);
            }
            if (result.status === "error") {
                return rejectWithValue(result.message);
            }
            return fulfillWithValue(result);
        } catch (error: any) {
            return rejectWithValue(error);
        }
    }
);


