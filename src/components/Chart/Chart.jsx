import React from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official';
import {options} from "./options";
import classes from "./Chart.module.css";

const Chart = () => {
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