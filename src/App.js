import './App.css';
import AppRouter from "./components/Router/AppRouter";
import {BrowserRouter} from "react-router-dom";
import React from 'react'
import NavigateBar from "./NavigateBar/NavigateBar";

function App() {
    return (
        <BrowserRouter>
            <NavigateBar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
