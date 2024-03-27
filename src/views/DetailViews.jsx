import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import DetailComponents from "../components/DetailComponents/DetailComponents";
import ReviewsSection from "../components/ReviewsSection/ReviewsSection";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

export default function DetailViews() {

    const game = useLoaderData();
    const { profile } = useContext(UserContext);

    return (
        <>
            <Navbar />
            <div className="container mt-3" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${game.background_image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                borderRadius: '25px'
            }}>
                <DetailComponents game={game} />
                {profile && <ReviewsSection game={game} />}
            </div>
        </>
    )
}

export async function getGame({ params }) {
    const KEY_API = import.meta.env.VITE_API_KEY;
    const promise = await fetch(`https://api.rawg.io/api/games/${params.id}?key=${KEY_API}`)
    const json = await promise.json();
    return json;
}