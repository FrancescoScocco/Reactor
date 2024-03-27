import { useLoaderData } from "react-router-dom";
import Header from "../components/Header/Headeer";
import List from "../components/List/List";

export default function Homepage() {

    const games = useLoaderData();

    return (
        <>
            <Header />
            <List games={games} />
        </>

    )
}

export async function gamesLoader() {
    const KEY_API = import.meta.env.VITE_API_KEY;
    const promise = await fetch(`https://api.rawg.io/api/games?key=${KEY_API}&dates=2022-01-01,2022-12-30&page_size=10`)
    const json = await promise.json();
    return json.results;
}





