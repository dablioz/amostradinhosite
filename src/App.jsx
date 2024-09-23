import { Router } from "./routes/routes";
import "./App.css";
import Navbar from "./Components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material";
function App() {
    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <Router />
        </ThemeProvider>
    );
}

export default App;
