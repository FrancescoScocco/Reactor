import { useLoaderData, useParams } from "react-router-dom";
import Header from "../components/Header/Headeer";
import List from "../components/List/List";


export default function PlatformViews() {

    const games = useLoaderData();
    // const { id } = useParams();
    console.log(games);

    return (
        <>
            <Header title={"Cross Platforms"} />
            <List games={games}/>
        </>
    )
}

export async function PlatformsLoader({ params }) {
    const KEY_API = import.meta.env.VITE_API_KEY;
    const promise = await fetch(`https://api.rawg.io/api/games?key=${KEY_API}&platforms=${params.id}`)
    const json = await promise.json();
    return json.results;
}