import React, {useEffect, useState, Fragment, useMemo} from 'react';
import PriceList from "../components/Lists/PriceList";
import MyRequest from "../api/requests";
import NewsList from "../components/Lists/NewsList";
import MyH from "../components/MyH/MyH";
import Chart from "../components/Chart/Chart";
import SelectButtons from "../components/SelectButtons/SelectButtons";
import SearchInput from "../components/SearchInput/SearchInput";

const CoinPage = () => {
    const [priceList, setPriceList] = useState([])
    const [newsList, setNewsList] = useState([])
    const [filteredNews, setFilteredNews] = useState([])
    const [selectedNews, setSelectedNews] = useState({})
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

    useEffect(() => {
        setFilteredNews([...newsList])
    }, [newsList])

    const changeList = (n_list) => {
        setSelectedList(n_list)
    }

    useMemo(() => {
        setFilteredNews(newsList.filter(news => news.news_title.includes(searchStr)))
    }, [searchStr])

    return (
        <div className="App">
            <MyH coin_name={coinName}/>
            <Chart
                chart_list={chartList}
                selected_news={selectedNews}
                set_selected_news={setSelectedNews}
            />
            <SelectButtons changeList={changeList}/>
            <SearchInput search_str={searchStr} set_search_str={setSearchStr}/>
            {selectedList
                ?
                <NewsList
                    news_list={filteredNews}
                    selected_news={{value: selectedNews, set_news: setSelectedNews}}
                />
                :
                <PriceList price_list={priceList}/>
            }
        </div>
    );
};

export default CoinPage;