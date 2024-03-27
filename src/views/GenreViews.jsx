import { useLoaderData, useParams } from "react-router-dom";
import Header from "../components/Header/Headeer";
import List from "../components/List/List";

export default function GenreViews() {

    const games = useLoaderData();
    const { slug } = useParams();

    return (
        <>
            <Header title={`Genere: ${slug}`} />
            <List games={games} />
        </>
    )
}

export async function gamesGenreLoader({ params }) {
    const KEY_API = import.meta.env.VITE_API_KEY;
    const promise = await fetch(`https://api.rawg.io/api/games?key=${KEY_API}&genres=${params.slug}`)
    const json = await promise.json();
    return json.results;
}