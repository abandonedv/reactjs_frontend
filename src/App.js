import './App.css';
import AppRouter from "./components/Router/AppRouter";
import {BrowserRouter} from "react-router-dom";
import React from 'react'

function App() {
    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
