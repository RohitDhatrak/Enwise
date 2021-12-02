import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useReducerContext } from "../../context/ReducerContext";
import { Children } from "../../types/types";

export function PrivateRoute({
    children,
    path,
}: {
    children: React.ReactElement;
    path: string;
}) {
    const { user } = useReducerContext();
    return user?.id ? (
        children
    ) : (
        <Navigate replace to="/login" state={{ previousPath: `${path}` }} />
    );
}
