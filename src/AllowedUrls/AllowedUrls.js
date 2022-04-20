import MainPage from "../Pages/MainPage";
import CoinPage from "../Pages/CoinPage";


export const AllowedUrls = [
    {path: "/", element: <MainPage/>, exact: true},
    {path: "/coin:coin_name", element: <CoinPage/>, exact: true}
]
