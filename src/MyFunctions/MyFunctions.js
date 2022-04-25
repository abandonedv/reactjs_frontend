export function GetArray(number) {
    let arr = []
    for (let i = number; i < number + 12; i++) {
        arr.push(i)
    }
    return arr
}

export function FillOptions(selectedNews, newOptions) {
    let options = {...newOptions}
    options.series[1].data = []
    for (let news of selectedNews) {
        let date_list = news.news_time.split("-")
        options.series[1].data.push(
            {
                x: Date.UTC(
                    date_list[0],
                    date_list[1] - 1,
                    date_list[2],
                    date_list[3],
                    date_list[4],
                    date_list[5]),
                title: news.news_title.slice(0, 4),
                text: news.news_title
            })
    }
    return options
}