import { Router } from "./routes/routes";
import { createTheme, ThemeProvider } from "@mui/material";

import "./App.css";

function App() {
    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    return (
        <div id="App">
            <ThemeProvider theme={darkTheme}>
                <Router />
            </ThemeProvider>
        </div>
    );
}

export default App;
