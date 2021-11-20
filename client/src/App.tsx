import React, { useState } from "react";
import { Home, Playlists, WatchLater, History, Favourite } from "./pages";
import { BottomNav, Header } from "./components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favourite" element={<Favourite />} />
                    <Route path="/playlists" element={<Playlists />} />
                    <Route path="/watchlater" element={<WatchLater />} />
                    <Route path="/history" element={<History />} />
                </Routes>
                <BottomNav />
            </div>
        </Router>
    );
}

export default App;
