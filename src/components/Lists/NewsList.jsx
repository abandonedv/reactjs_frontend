import React from 'react';
import NewsItem from "../Items/NewsItem";

const NewsList = ({news_list}) => {
    return (
        <div>
            {news_list.map((item) =>
                <NewsItem
                    news={item}
                    key={item.news_time}
                />
            )}
        </div>
    );
};

export default NewsList;