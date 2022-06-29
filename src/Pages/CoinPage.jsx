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
    // коллекция хранящая цены полученные через request
    const [priceList, setPriceList] = useState([]);

    // коллекция хранящая новости полученные через request
    const [newsList, setNewsList] = useState([]);

    // коллекция хранящая отфильтрованные новости
    const [filteredNews, setFilteredNews] = useState([]);
    // const [chartList, setChartList] = useState([]);

    // строка хранящая имя криптовалюты
    const [coinName, setCoinName] = useState("");

    // строка хранящая введенную строку через input
    const [searchNewsStr, setSearchNewsStr] = useState("");

    // число используемое для условного рендеринга
    const [selectedList, setSelectedList] = useState(1);

    // число используемое для установки лимита запрашиваемы данных
    const [limit, setLimit] = useState(100);

    // число используемое для установки номера страницы списка цен
    const [pricePage, setPricePage] = useState(1);

    // число используемое для установки номера страницы списка новостей
    const [newsPage, setNewsPage] = useState(1);

    // объект используемый для хранения выбранных новостей, отображенных на графике
    const [newOptions, setNewOptions] = useState({});

    // коллекция хранящая выбранные новости
    const {selectedNews, setSelectedNews} = useContext(MyContext);

    // хук используемый для хранения подгруженных данных на график при загрузке страницы
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

    // хук используемый для хранения подгруженных цен при загрузке страницы
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

    // хук используемый для хранения подгруженных новостей при загрузке страницы
    useEffect(() => {
        async function get_page() {
            let new_news_page = await MyRequest.getNewsPage(newsPage, limit);
            let news_list = new_news_page.news_list;
            setNewsList([...news_list]);
        }
        get_page();
    }, [newsPage]);


    // хук используемый для хранения списка новостей котрорый будет отображен непосредственно на странице
    useEffect(() => {
        setFilteredNews([...newsList]);
    }, [newsList]);

    // callback - функция
    const changeList = (n_list) => {
        setSelectedList(n_list);
    }

    // хук используемый для кеширования данных о новостях
    useMemo(() => {
        setFilteredNews(newsList.filter(news => news.news_title.includes(searchNewsStr)));
    }, [searchNewsStr]);

    // хук используемый для хранения новостей отображаемых на графике
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