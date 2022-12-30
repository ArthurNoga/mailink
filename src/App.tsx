import React, {useState} from 'react';

import './App.css';
import Layout from "./Layout/Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Domain from "./Pages/Domain";
import Ips from "./Pages/Ips";
import Faq from "./Pages/Faq";
import {ThemeProvider} from "@emotion/react";
import {createTheme} from "@mui/material";
import {orange} from "@mui/material/colors";

const themeDark = createTheme({palette: {primary:orange,mode: "dark"},});
const themeLight = createTheme({palette: {mode: "light"}})

function App() {
    const [theme, setTheme] = useState(true)

    const toogleTheme = () => {
        setTheme(!theme)
    }
    return (
        <ThemeProvider  theme={theme==false?themeDark:themeLight}>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout toggleTheme={toogleTheme}/>}>
                        <Route path="/" element={<Domain/>}/>
                        <Route path="/domain" element={<Domain/>}/>
                        <Route path="/ip" element={<Ips/>}/>
                        <Route path="/faq" element={<Faq/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>

    );
}

export default App;
