import React, {useEffect} from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official';
import classes from "./Chart.module.css";
import {default_options} from "./options";
import {useContext} from "react";
import {MyContext} from "../Context/Context";

const Chart = ({chart_list}) => {
    const {selectedNews, setSelectedNews} = useContext(MyContext)
    let options = {...default_options};
    options.series[0].data = [...chart_list]

    useEffect(() => {
        console.log(selectedNews == false)
        if (selectedNews != false)
        {
                console.log(selectedNews[0])
                let date_list = selectedNews[0].news_time.split("-")
                options.series[1].data.push(
                    {
                        x: Date.UTC(
                            date_list[0],
                            date_list[1],
                            date_list[2],
                            date_list[3],
                            date_list[4],
                            date_list[5]),
                        title: selectedNews[0].news_title.slice(0, 10) + "...",
                        text: selectedNews[0].news_title
                    })
                console.log(options.series[1].data)
                console.log("...")
                console.log(selectedNews)
        }

        }, [selectedNews]
    )

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