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
            data: [{
                x: Date.UTC(2019, 11, 1),
                title: 'A',
                text: 'Some event with a description'
            }, {
                x: Date.UTC(2019, 11, 12),
                title: 'B',
                text: 'Some event with a description'
            }, {
                x: Date.UTC(2019, 11, 22),
                title: 'C',
                text: 'Some event with a description'
            }, {
                x: Date.UTC(2019, 11, 23),
                title: 'A',
                text: 'Some event with a description'
            }, {
                x: Date.UTC(2019, 11, 24),
                title: 'A',
                text: 'Some event with a description'
            }, {
                x: Date.UTC(2019, 11, 25),
                title: 'gv5evwerevferfvweffrfverwvf',
                text: 'Some event with a description'
            }, {
                x: Date.UTC(2019, 11, 1, 2),
                title: 'gv5evwerevferfvweffrfverwvf',
                text: 'Some event with a description'
            }, {
                x: Date.UTC(2019, 11, 1, 5),
                title: 'A',
                text: 'Some event with a description'
            }],
            onSeries: 'dataseries',
            shape: 'squarepin',
            width: 30
        }]
    };

    return (
        <div className={classes.chart}>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={options}
            />
        </div>
    );
};

export default Chart;