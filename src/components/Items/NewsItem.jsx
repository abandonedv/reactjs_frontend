import React from 'react';
import classes from "./Item.module.css";
import MyButton from "../Button/MyButton";

const NewsItem = (props) => {
    return (
        <div className={classes.news_item}>
            <p><b>Заголовок:</b> {props.news.news_title}</p>
            <hr style={{marginTop: 5, marginBottom: 5}}/>
            <p><b>Содержание:</b> {props.news.news_lead}</p>
            <hr style={{marginTop: 5, marginBottom: 5}}/>
            <p><b>Время:</b> {props.news.news_time}</p>
            <MyButton style={{marginTop: 10}}>Добавить</MyButton>
        </div>
    );
};

export default NewsItem;