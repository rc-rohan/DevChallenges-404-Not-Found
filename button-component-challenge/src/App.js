import React from "react";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import "./App.css"

const App = () => {
    return (
        <div className="wrapper">
            <Sidebar />
            <Main />
        </div>
    );
};

export default App;
