import './App.css';
import AppRouter from "./Components/Router/AppRouter";
import {BrowserRouter} from "react-router-dom";
import React from 'react'
import NavigateBar from "./NavigateBar/NavigateBar";
import {MyContext} from "./Components/Context/Context";
import {useState} from "react";

function App() {
    const [selectedNews, setSelectedNews] = useState([])
    return (
        <MyContext.Provider value = {{
            selectedNews,
            setSelectedNews
        }}>
            <BrowserRouter>
                <NavigateBar/>
                <AppRouter/>
            </BrowserRouter>
        </MyContext.Provider>
    );
}

export default App;
