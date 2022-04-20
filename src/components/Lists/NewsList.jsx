import React from 'react';
import Chart from "../Chart/Chart";
import PriceItem from "../Items/PriceItem";
import NewsItem from "../Items/NewsItem";

const NewsList = ({news_list, selected_news}) => {
    return (
        <div>
            {news_list.map((item) =>
                <NewsItem
                    news={item}
                    key={item.news_time}
                    selected_news={selected_news}
                />
            )}
        </div>
    );
};

export default NewsList;