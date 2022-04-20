import React, {useEffect, useState, Fragment, useMemo} from 'react';
import PriceList from "../components/Lists/PriceList";
import MyRequest from "../api/requests";
import NewsList from "../components/Lists/NewsList";
import MyH from "../components/MyH/MyH";
import Chart from "../components/Chart/Chart";
import SelectButtons from "../components/SelectButtons/SelectButtons";
import SearchInput from "../components/SearchInput/SearchInput";
import {default_options} from "../components/Chart/options";
import {useContext} from "react";
import {MyContext} from "../components/Context/Context";
import SelectPage from "../components/SelectPage/SelectPage";

const CoinPage = () => {
    const [priceList, setPriceList] = useState([]);
    const [newsList, setNewsList] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
    const [chartList, setChartList] = useState([]);
    const [coinName, setCoinName] = useState("");
    const [searchStr, setSearchStr] = useState("");
    const [selectedList, setSelectedList] = useState(1);
    const [limit, setLimit] = useState(80);
    const [pricePage, setPricePage] = useState(1);
    const [newsPage, setNewsPage] = useState(300);
    const [newOptions, setNewOptions] = useState({});

    const {selectedNews, setSelectedNews} = useContext(MyContext)

    useEffect(() => {
        async function fetchData() {
            let coin_name = window.location.pathname.split(":")[1];
            setCoinName(coin_name);
            let new_coin_page = await MyRequest.getCoinPage(coin_name, pricePage, limit);
            let chart_data = await MyRequest.getCoinHistory(coin_name);
            let new_news_page = await MyRequest.getNewsPage(newsPage, limit);

            let coin_list = new_coin_page.history_list;
            setPriceList([...coin_list, ...priceList]);

            let chart_list = chart_data.history_list;
            setChartList([...chart_list]);

            let news_list = new_news_page.news_list;
            setNewsList([...news_list, ...newsList]);

            let options = {...default_options}
            options.series[0].data = chart_list
            setNewOptions({...options})

        }
        fetchData()
    }, [])

    useEffect(() => {
        setFilteredNews([...newsList])
    }, [newsList])

    useEffect(() => {
        async function get_page() {
            let new_news_page = await MyRequest.getNewsPage(newsPage, limit);
            let news_list = new_news_page.news_list;
            setNewsList([...news_list]);
        }
        get_page()
    }, [newsPage])

    const changeList = (n_list) => {
        setSelectedList(n_list)
    }

    useMemo(() => {
        setFilteredNews(newsList.filter(news => news.news_title.includes(searchStr)))
    }, [searchStr])

    useEffect(() => {
        let options = {...newOptions}
        if (selectedNews[0] !== undefined) {
            options.series[1].data = []
            for (let news of selectedNews) {
                let date_list = news.news_time.split("-")
                options.series[1].data.push(
                    {
                        x: Date.UTC(
                            date_list[0],
                            date_list[1],
                            date_list[2],
                            date_list[3],
                            date_list[4],
                            date_list[5]),
                        title: news.news_title.slice(0, 4),
                        text: news.news_title
                    })
            }
            setNewOptions({...options})
        }

    }, [selectedNews])

    return (
        <div className="App">
            <MyH coin_name={coinName}/>
            <Chart new_options={newOptions}/>
            <SelectButtons changeList={changeList}/>
            <SearchInput search_str={searchStr} set_search_str={setSearchStr}/>
            {selectedList
                ?
                <NewsList news_list={filteredNews}/>
                :
                <PriceList price_list={priceList}/>
            }
            <SelectPage set_news_page={setNewsPage}/>

        </div>
    );
};

export default CoinPage;