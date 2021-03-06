import axios from "axios";

export default class MyRequest {

    static async getAllNames() {
        const response = await axios.get("http://0.0.0.0/");
        return response.data;
    }

    static async getCoinPage(coin_name, page, n_rows) {

        const params = {
            coin_name: coin_name,
            page: page,
            n_rows: n_rows
        };

        const response = await axios.get("http://0.0.0.0/coin_page", {params});
        return response.data;
    }

    static async getNewsPage(page, n_rows) {

        const params = {
            page: page,
            n_rows: n_rows
        };

        const response = await axios.get("http://0.0.0.0/news_page", {params});
        return response.data;
    }

    static async getCoinHistory(coin_name) {

        const response = await axios.get("http://0.0.0.0/all_hist/" + coin_name);
        return response.data;
    }
}

