import React, { useState } from "react";
import { Home } from "./pages";
import { BottomNav, Header } from "./components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <BottomNav />
            </div>
        </Router>
    );
}

export default App;
