import React from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official';
import classes from "./Chart.module.css";

const Chart = (props) => {
    let options = {


        rangeSelector: {
            selected: 0
        },

        title: {
            text: 'Coin history'
        },

        tooltip: {
            style: {
                width: '200px'
            },
            valueDecimals: 4,
            shared: true
        },

        yAxis: {
            title: {
                text: 'Price'
            }
        },

        series: [{
            name: 'Price',
            data: props.chart_list,
            id: 'dataseries'

            // the event marker flags
        }, {
            type: 'flags',
            data: [],
            onSeries: 'dataseries',
            shape: 'squarepin',
            width: 30
        }]
    };

    options.series[1].data = [{
        x: Date.UTC(2020, 11, 1, 2),
        title: 'gv5evwerevferfvweffrfverwvf',
        text: 'Some event with a description'
    }]

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