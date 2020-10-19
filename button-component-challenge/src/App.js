import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import "./App.css";
import ThemeToggler from "./Components/ThemeToggler";
import ThemeContext from "./Context/ThemeContext";

const App = () => {
    const themeHook = useState("light");
    return (
        <ThemeContext.Provider value={themeHook}>
            <div className="wrapper">
                <ThemeToggler />
                <Sidebar />
                <Main />
            </div>
        </ThemeContext.Provider>
    );
};

export default App;
