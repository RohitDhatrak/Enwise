import React, { useContext, createContext, useReducer } from "react";
import { reducer, initialState } from "../Reducer/reducer";
import { ReducerContextTypes, Children } from "../types/types";

const ReducerContext = createContext<ReducerContextTypes>(
    {} as ReducerContextTypes
);

export function ReducerContextProvider({ children }: Children) {
    const [{ videos, user, playlists, likes, watchLater, history }, dispatch] =
        useReducer(reducer, initialState);
    const data: ReducerContextTypes = {
        videos,
        user,
        playlists,
        likes,
        watchLater,
        history,
        dispatch,
    };
    return (
        <ReducerContext.Provider value={data}>
            {children}
        </ReducerContext.Provider>
    );
}

export function useReducerContext() {
    return useContext(ReducerContext);
}
