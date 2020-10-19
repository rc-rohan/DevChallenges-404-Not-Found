import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);
    return (
        <div
            className="themeToggler"
            onClick={() =>
                setThemeMode(themeMode === "light" ? "dark" : "light")
            }

            // &#x1F319; : crescent moon
            // &#x1F31E;: sun with face
        >
            {themeMode === "light" ? (
                <span className="darkTheme-icon">&#x1F319;</span>
            ) : (
                <span className="lightTheme-icon">&#x1F31E;</span>
            )}
        </div>
    );
};

export default ThemeToggler;
