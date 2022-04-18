import React, {useEffect, useState, Fragment} from 'react';
import PriceList from "../components/Lists/PriceList";
import MyRequest from "../api/requests";
import NewsList from "../components/Lists/NewsList";

const CoinPage = () => {
    const [priceList, setPriceList] = useState([])
    const [newsList, setNewsList] = useState([])
    const [chartList, setChartList] = useState([])
    const [coinName, setCoinName] = useState("")
    const [limit, setLimit] = useState(30);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function fetchData() {
            let coin_name = window.location.pathname.split(":")[1]
            setCoinName(coin_name)
            // let new_coin_page = await MyRequest.getCoinPage(coin_name, page, limit)
            let chart_data = await MyRequest.getCoinHistory(coin_name)
            let new_news_page = await MyRequest.getNewsPage(page, limit)
            // let coin_list = new_coin_page.history_list
            // setPriceList([...coin_list, ...priceList])
            let chart_list = chart_data.history_list
            setChartList([...chart_list])
            let news_list = new_news_page.news_list
            setNewsList([...news_list, ...newsList])

        }
        fetchData()
    }, [])

    return (
        <div className="App">
            <NewsList news_list={newsList} chart_list={chartList} title={coinName}/>
        </div>
    );
};

export default CoinPage;