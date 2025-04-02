import { createContext, useState, useContext } from "react";
import { ThemeProvider } from "styled-components";

const lightTheme = {
  background: "#fff",
  color: "#333",
  buttonBg: "#333",
  buttonColor: "#fff"
};

const darkTheme = {
  background: "#121212",
  color: "#fff",
  buttonBg: "#fff",
  buttonColor: "#333"
};

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);