import React, { useState } from "react";
import {
    Home,
    Playlists,
    WatchLater,
    History,
    Liked,
    Profile,
    Settings,
} from "./pages";
import { BottomNav, Header } from "./components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/liked" element={<Liked />} />
                    <Route path="/playlists" element={<Playlists />} />
                    <Route path="/watchlater" element={<WatchLater />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
                <BottomNav />
            </div>
        </Router>
    );
}

export default App;
