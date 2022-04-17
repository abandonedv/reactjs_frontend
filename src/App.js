import './App.css';
import PriceItem from "./components/PriceItem";
import PriceList from "./components/PriceList";
import {useEffect, useState} from "react";
import CoinItem from "./components/CoinItem";
import CoinList from "./components/CoinList";
import MyRequest from "./api/requests";
import MainPage from "./Pages/MainPage";
import AppRouter from "./components/AppRouter";
import {AllowedUrls} from "./url/allowed_urls";
import {BrowserRouter, Link, Routes} from "react-router-dom";
import React from 'react'

function App() {
    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
