import React, { useState } from "react";
import { Home } from "./pages";
import { BottomNav, Header } from "./components";

function App() {
    const [isDarkModeEnabled, toggleDarkMode] = useState(false);

    return (
        <div
            className={isDarkModeEnabled === true ? "dark-mode" : "light-mode"}
        >
            <Header />
            <Home />
            <BottomNav />
        </div>
    );
}

export default App;
