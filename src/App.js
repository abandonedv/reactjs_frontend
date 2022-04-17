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
    // const [priceList, setPriceList] = useState([
    //     {'coin_value': 29034.347242955657, 'coin_time': '2021-01-01-00-04-43'},
    //     {'coin_value': 29056.299305022578, 'coin_time': '2021-01-01-01-04-43'},
    //     {'coin_value': 29028.737063453482, 'coin_time': '2021-01-01-02-04-43'},
    //     {'coin_value': 28973.240973741464, 'coin_time': '2021-01-01-03-09-43'},
    //     {'coin_value': 29118.301847786293, 'coin_time': '2021-01-01-04-09-45'},
    //     {'coin_value': 29372.627782619777, 'coin_time': '2021-01-01-05-14-43'},
    //     {'coin_value': 29310.39767323012, 'coin_time': '2021-01-01-06-14-43'},
    //     {'coin_value': 29346.124466576417, 'coin_time': '2021-01-01-07-14-43'},
    //     {'coin_value': 29161.20614993785, 'coin_time': '2021-01-01-08-14-43'},
    //     {'coin_value': 29256.35649945674, 'coin_time': '2021-01-01-09-14-43'},
    //     {'coin_value': 29008.06739934158, 'coin_time': '2021-01-01-10-14-43'},
    //     {'coin_value': 29052.185158670858, 'coin_time': '2021-01-01-11-14-43'},
    //     {'coin_value': 29121.172189036777, 'coin_time': '2021-01-01-12-14-43'},
    //     {'coin_value': 29316.575195799414, 'coin_time': '2021-01-01-13-14-43'},
    //     {'coin_value': 29339.913964433108, 'coin_time': '2021-01-01-14-14-43'},
    //     {'coin_value': 29322.76622586424, 'coin_time': '2021-01-01-15-14-43'},
    //     {'coin_value': 29393.440552022825, 'coin_time': '2021-01-01-16-14-44'},
    //     {'coin_value': 29479.880151561483, 'coin_time': '2021-01-01-17-19-43'},
    //     {'coin_value': 29400.438315929703, 'coin_time': '2021-01-01-18-19-43'},
    //     {'coin_value': 29294.180876126753, 'coin_time': '2021-01-01-19-19-43'},
    //     {'coin_value': 29386.98613207476, 'coin_time': '2021-01-01-20-19-43'},
    //     {'coin_value': 29272.546580887974, 'coin_time': '2021-01-01-21-19-43'},
    //     {'coin_value': 29111.820213639778, 'coin_time': '2021-01-01-22-19-43'},
    //     {'coin_value': 29230.075065239704, 'coin_time': '2021-01-01-23-19-44'}])
    //
    //
    // const [coinList, setCoinList] = useState([])
    //
    // useEffect(async () => {
    //     let names = await MyRequest.getAllNames()
    //     setCoinList(names.all_names)
    // }, [])


    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
