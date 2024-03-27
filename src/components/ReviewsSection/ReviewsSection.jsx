import { useContext, useEffect, useState } from "react";
import supabase from "../../database/supabase";
import classes from "./ReviewsSection.module.css";
import { UserContext } from "../../Contexts/UserContext";
import LiveChat from "../LiveChat/LiveChat";

export default function ReviewsSection({ game }) {

    const { profile } = useContext(UserContext);
    const [description, setDescription] = useState("");
    const [reviews, setReviews] = useState([]);

    const handleChange = (e) => {
        setDescription(e.target.value);
    }

    const handleClick = async () => {
        const { data, error } = await supabase
            .from('reviews')
            .insert([
                { profile_id: profile.id, game_id: game.id, game_name: game.name, description },
            ])
            .select();

        if (!error) {
            setDescription(""); 
            getReviews();
        }
    }

    const getReviews = async () => {
        let { data: reviews, error } = await supabase
            .from('reviews')
            .select('*, profile: profiles(username, avatar_url)')
            .eq('game_id', game.id);

        if (!error) {
            setReviews(reviews || []);
        }
    }

    useEffect(() => {
        getReviews();
    }, []);

    return (
        <div className="row justify-content-center mt-5">
            <div className={`col-12 col-md-5 mb-4 ${classes.container}`}>
                <h6 className="text-center">Facci sapere che ne pensi...</h6>
                <div className={`${classes.review_section} ${classes.scroll_box1}`}>
                    {reviews.map((review) => (
                        <div key={review.id}>
                            <div className="d-flex">
                                <p>{review.profile.username}</p>
                                {review.profile.avatar_url && (
                                    <img src={`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/avatars/${review.profile.avatar_url}`} className={`rounded-circle ${classes.img_custom}`} alt="" />
                                )}
                            </div>
                            <p>{review.description}</p>
                            <hr className="text-color" />
                        </div>
                    ))}
                </div>
                <input
                    value={description}
                    onChange={handleChange}
                    placeholder="Lascia una Recensione"
                    type="text"
                    className={`${classes.review_input}`}
                />
                <button onClick={handleClick} className={`btn ${classes.review_btn}`}>Invia</button>
            </div>
            <LiveChat game={game} />
        </div>
    );
}
