import { Router } from "./routes/routes";
import { createTheme, ThemeProvider } from "@mui/material";

import { AuthGoogleProvider } from "../src/context/authGoogle";
import "./App.css";

function App() {
    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    return (
        <div id="App">
            <AuthGoogleProvider>
                <ThemeProvider theme={darkTheme}>
                    <Router />
                </ThemeProvider>
            </AuthGoogleProvider>
        </div>
    );
}

export default App;
