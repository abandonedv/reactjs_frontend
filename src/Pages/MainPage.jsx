import {useEffect, useState} from "react";
import MyRequest from "../api/requests";
import CoinList from "../components/CoinList";

function MainPage() {
    const [coinList, setCoinList] = useState([])

    useEffect( () => {
        async function fetchData() {
            let names = await MyRequest.getAllNames()
            setCoinList(names.all_names)
        }
        fetchData()
    }, [])


    return (
        <div className="App">
            <CoinList coin_list={coinList} title={"Криптовалюты"}/>
        </div>
    );
}

export default MainPage;