import {useEffect, useState} from "react";
import MyRequest from "../API/Requests";
import CoinList from "../Components/Lists/CoinList";

function MainPage() {
    const [coinList, setCoinList] = useState([]);

    // хук используемый для хранения подгруженного списка криптовалют
    useEffect( () => {
        async function fetchData() {
            let names = await MyRequest.getAllNames();
            setCoinList(names.all_names);
        }
        fetchData();
    }, [])


    return (
        <div className="App">
            <CoinList coin_list={coinList} title={"Криптовалюты"}/>
        </div>
    );
}

export default MainPage;