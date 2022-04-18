import React, {useEffect, useState, Fragment} from 'react';
import PriceList from "../components/Lists/PriceList";
import MyRequest from "../api/requests";

const CoinPage = () => {
    const [priceList, setPriceList] = useState([])
    const [chartList, setChartList] = useState([])
    const [coinName, setCoinName] = useState("")
    const [limit, setLimit] = useState(30);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function fetchData() {
            let coin_name = window.location.pathname.split(":")[1]
            setCoinName(coin_name)
            let new_page = await MyRequest.getCoinPage(coin_name, page, limit)
            let chart_list = await MyRequest.getCoinHistory(coin_name)
            let list = new_page.history_list
            setPriceList([...list, ...priceList])
            list = chart_list.history_list
            setChartList([...list])
        }
        fetchData()
    }, [])

    return (
        <div className="App">
            <PriceList price_list={priceList} chart_list={chartList} title={coinName}/>
        </div>
    );
};

export default CoinPage;