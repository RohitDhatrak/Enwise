import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
    Home,
    Playlists,
    WatchLater,
    History,
    Liked,
    Profile,
    Settings,
    Login,
    Signup,
    Page404,
} from "./pages";
import { BottomNav, Header, PrivateRoute } from "./components";
import { getUserFromLocalStorage } from "./utils/localStorageOperations";
import { useReducerContext } from "./context/ReducerContext";
import {
    setupAuthExceptionHandler,
    setupAuthHeaderForServiceCalls,
} from "./services/authHandlers";

function App() {
    const navigate = useNavigate();
    const { dispatch } = useReducerContext();

    const user = JSON.parse(getUserFromLocalStorage());
    useEffect(() => {
        setupAuthHeaderForServiceCalls(user?.jwt);
        setupAuthExceptionHandler(dispatch, navigate);
    }, []);

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/liked"
                    element={
                        <PrivateRoute path="/liked">
                            <Liked />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/playlists"
                    element={
                        <PrivateRoute path="/playlists">
                            <Playlists />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/watchlater"
                    element={
                        <PrivateRoute path="/watchlater">
                            <WatchLater />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/history"
                    element={
                        <PrivateRoute path="/history">
                            <History />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute path="/profile">
                            <Profile />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <PrivateRoute path="/settings">
                            <Settings />
                        </PrivateRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
            <BottomNav />
        </div>
    );
}

export default App;
