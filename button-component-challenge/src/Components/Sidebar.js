import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import {SidebarTheme} from "../AppTheme";

const Sidebar = () => {
    const theme = useContext(ThemeContext)[0]
    const currentTheme = SidebarTheme[theme];
    return (
        <aside className="sidebar" style={currentTheme}>
            <header>
                <h4>
                    <span className="primary-text">Dev</span>challenges.io
                </h4>
            </header>

            <section className="navigation-links">
                <a href="#">Colors</a>
                <a href="#">Typograph</a>
                <a href="#">Spaces</a>
                <a href="#">Buttons</a>
                <a href="#" className="selected" style={{color:`${currentTheme.selectedColor}`}}>
                    Inputs
                </a>
                <a href="#">Grid</a>
            </section>
        </aside>
    );
};

export default Sidebar;
