export const default_options = {

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

    rangeSelector: {

        buttons: [{
            type: 'hour',
            count: 12,
            text: '12h'
        }, {
            type: 'day',
            count: 1,
            text: '1d'
        }, {
            type: 'day',
            count: 3,
            text: '3d'
        }, {
            type: 'week',
            count: 1,
            text: '1w'
        }, {
            type: 'month',
            count: 1,
            text: '1m'
        }, {
            type: 'month',
            count: 6,
            text: '6m'
        }, {
            type: 'year',
            count: 1,
            text: '1y'
        }, {
            type: 'all',
            text: 'All'
        }],
        selected: 3
    },

    yAxis: {
        title: {
            text: 'Price'
        }
    },

    series: [{
        name: 'Price',
        data: [],
        id: 'dataseries'

        // the event marker flags
    }, {
        type: 'flags',
        data: [],
        onSeries: 'dataseries',
        shape: 'squarepin'
    }]
}
