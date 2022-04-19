import React, {useEffect, useState, Fragment} from 'react';
import PriceList from "../components/Lists/PriceList";
import MyRequest from "../api/requests";
import NewsList from "../components/Lists/NewsList";
import MyH from "../components/MyH/MyH";
import Chart from "../components/Chart/Chart";
import SelectButtons from "../components/SelectButtons/SelectButtons";
import CoinList from "../components/Lists/CoinList";
import coinList from "../components/Lists/CoinList";
import SearchInput from "../components/SearchInput/SearchInput";

const CoinPage = () => {
    const [priceList, setPriceList] = useState([])
    const [newsList, setNewsList] = useState([])
    const [chartList, setChartList] = useState([])
    const [coinName, setCoinName] = useState("")
    const [searchStr, setSearchStr] = useState("")
    const [selectedList, setSelectedList] = useState(1)
    const [limit, setLimit] = useState(30);
    const [pricePage, setPricePage] = useState(1);
    const [newsPage, setNewsPage] = useState(1);

    useEffect(() => {
        async function fetchData() {
            let coin_name = window.location.pathname.split(":")[1]
            setCoinName(coin_name)
            let new_coin_page = await MyRequest.getCoinPage(coin_name, pricePage, limit)
            let chart_data = await MyRequest.getCoinHistory(coin_name)
            let new_news_page = await MyRequest.getNewsPage(newsPage, limit)
            let coin_list = new_coin_page.history_list
            setPriceList([...coin_list, ...priceList])
            let chart_list = chart_data.history_list
            setChartList([...chart_list])
            let news_list = new_news_page.news_list
            setNewsList([...news_list, ...newsList])
        }
        fetchData()
    }, [])

    const changeList = (n_list) => {
        setSelectedList(n_list)
    }

    return (
        <div className="App">
            <MyH coin_name={coinName}/>
            <Chart chart_list={chartList}/>
            <SelectButtons changeList={changeList}/>
            <SearchInput/>
            {selectedList
                ?
                <NewsList news_list={newsList}/>
                :
                <PriceList price_list={priceList}/>
            }
        </div>
    );
};

export default CoinPage;