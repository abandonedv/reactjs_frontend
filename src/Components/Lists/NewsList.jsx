import React from 'react';
import NewsItem from "../Items/NewsItem";
import SelectPage from "../SelectPage/SelectPage";
import SearchInput from "../SearchInput/SearchInput";

const NewsList = ({news_list, news_page, set_news_page, search_str, set_search_str}) => {
    return (
        <div>
            <SelectPage page={news_page} set_page={set_news_page}/>
            <SearchInput search_str={search_str} set_search_str={set_search_str}/>
            {news_list.map((item) =>
                <NewsItem
                    news={item}
                    key={item.news_time}
                />
            )}
            <SelectPage page={news_page} set_page={set_news_page}/>
        </div>
    );
};

export default NewsList;