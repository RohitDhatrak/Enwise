import axios from "axios";
import { Action } from "../types/types";

export function setupAuthHeaderForServiceCalls(
    token: string | undefined
): void {
    if (token) {
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}

export function setupAuthExceptionHandler(
    dispatch: (action: Action) => void,
    navigate: (to: string, options: Object) => void
): void {
    const UNAUTHORIZED = 401;
    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error?.response?.status === UNAUTHORIZED) {
                // logic to logout the user
                dispatch({ type: "DELETE_USER_SESSION" });
                navigate("login", { state: { previousPath: "/" } });
            }
            return Promise.reject(error);
        }
    );
}
