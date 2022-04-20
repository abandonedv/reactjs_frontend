import React, {useEffect} from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official';
import classes from "./Chart.module.css";
import {default_options} from "./options";

const Chart = ({chart_list, selected_news, set_selected_news}) => {
    let options = {...default_options};
    options.series[0].data = [...chart_list]
    //
    // useEffect(() => {
    //     if (!selected_news) {
    //             let date_list = selected_news.news_time.split("-")
    //             options.series[1].data.push(
    //                 {
    //                     x: Date.UTC(
    //                         2021,
    //                         date_list[1],
    //                         date_list[2],
    //                         date_list[3],
    //                         date_list[4],
    //                         date_list[5]),
    //                     title: selected_news.news_title.slice(0, 10) + "...",
    //                     text: selected_news.news_title
    //                 })
    //         }
    //         set_selected_news([])
    //         console.log(options.series[1].data)
    //         console.log("...")
    //         console.log(selected_news)
    // }, [selected_news])

    return (
        <div className={classes.myChart}>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={options}
            />
        </div>
    );
};

export default Chart;