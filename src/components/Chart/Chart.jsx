import React, {useEffect} from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official';
import classes from "./Chart.module.css";

const Chart = ({new_options}) => {

    return (
        <div className={classes.myChart}>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={new_options}
            />
        </div>
    );
};

export default Chart;