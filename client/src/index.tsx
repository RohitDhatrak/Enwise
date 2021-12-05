import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ReducerContextProvider } from "./context/ReducerContext";
import { AppContextProvider } from "./context/AppContext";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ReducerContextProvider>
                <AppContextProvider>
                    <App />
                </AppContextProvider>
            </ReducerContextProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
