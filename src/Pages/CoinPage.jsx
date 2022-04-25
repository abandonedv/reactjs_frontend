import React, {useEffect, useState, useMemo} from 'react';
import PriceList from "../Components/Lists/PriceList";
import MyRequest from "../API/Requests";
import NewsList from "../Components/Lists/NewsList";
import MyH from "../Components/MyH/MyH";
import Chart from "../Components/Chart/Chart";
import SelectButtons from "../Components/SelectButtons/SelectButtons";
import {default_options} from "../Components/Chart/Options";
import {useContext} from "react";
import {MyContext} from "../Components/Context/Context";
import {FillOptions} from "../MyFunctions/MyFunctions";

const CoinPage = () => {
    const [priceList, setPriceList] = useState([]);
    const [newsList, setNewsList] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
    // const [chartList, setChartList] = useState([]);
    const [coinName, setCoinName] = useState("");
    const [searchNewsStr, setSearchNewsStr] = useState("");
    const [selectedList, setSelectedList] = useState(1);
    const [limit, setLimit] = useState(100);
    const [pricePage, setPricePage] = useState(1);
    const [newsPage, setNewsPage] = useState(5);
    const [newOptions, setNewOptions] = useState({});

    const {selectedNews, setSelectedNews} = useContext(MyContext);

    useEffect(() => {
        async function fetchData() {
            let coin_name = window.location.pathname.split(":")[1];
            setCoinName(coin_name);

            let chart_data = await MyRequest.getCoinHistory(coin_name);

            let chart_list = chart_data.history_list;

            let options = {...default_options};
            options.series[0].data = chart_list;
            setNewOptions({...options});

        }
        fetchData()
    }, [])

    useEffect(() => {
        setFilteredNews([...newsList]);
    }, [newsList]);


    useEffect(() => {
        async function get_page() {
            if (coinName) {
                let new_coin_page = await MyRequest.getCoinPage(coinName, pricePage, limit);
                let coin_list = new_coin_page.history_list;
                setPriceList([...coin_list]);
            }
        }
        get_page();
    }, [pricePage, coinName]);

    useEffect(() => {
        async function get_page() {
            let new_news_page = await MyRequest.getNewsPage(newsPage, limit);
            let news_list = new_news_page.news_list;
            setNewsList([...news_list]);
        }
        get_page();
    }, [newsPage]);

    const changeList = (n_list) => {
        setSelectedList(n_list);
    }

    useMemo(() => {
        setFilteredNews(newsList.filter(news => news.news_title.includes(searchNewsStr)));
    }, [searchNewsStr]);

    useEffect(() => {
        if (selectedNews[0] !== undefined) {
            let options = FillOptions(selectedNews, newOptions);
            setNewOptions({...options});
        }

    }, [selectedNews]);

    return (
        <div className="App">
            <MyH coin_name={coinName}/>
            <Chart new_options={newOptions}/>
            <SelectButtons changeList={changeList}/>
            {selectedList === 1 &&
                <NewsList news_list={filteredNews}
                          news_page={newsPage}
                          set_news_page={setNewsPage}
                          search_str={searchNewsStr}
                          set_search_str={setSearchNewsStr}
                />
            }
            {selectedList === 0 &&
                <PriceList price_list={priceList}
                           price_page={pricePage}
                           set_price_page={setPricePage}
                />
            }

        </div>
    );
};

export default CoinPage;