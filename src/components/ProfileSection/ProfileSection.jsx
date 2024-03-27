import { useContext, useEffect, useState } from "react";
import classes from "./ProfileSection.module.css";
import { UserContext } from "../../Contexts/UserContext";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";
import foto from "../../assets/foto.jpg";
import supabase from "../../database/supabase";

export default function ProfileSection() {

    const { profile, user } = useContext(UserContext);
    const [userFavourites, setUserFavourites] = useState([]);
    const [userReviews, setUserReviews] = useState([]);

    const getFavourites = async () => {
        let { data: favourites, error } = await supabase
            .from('favourites')
            .select()
            .eq('profile_id', profile.id);

        if (!error) {
            setUserFavourites(favourites || []);
        }
    }

    const getReviews = async () => {
        let { data: reviews, error } = await supabase
            .from('reviews')
            .select()
            .eq('profile_id', profile.id);

        if (!error) {
            setUserReviews(reviews || []);
        }
    }

    useEffect(() => {
        getFavourites();
        getReviews();
    }, []);

    return (
        <>
            <div className="col-12 col-md-6 mt-5 d-flex justify-content-center mb-3">
                {profile &&
                    <div
                        className={`${classes.card_custom}`}
                        style={{
                            backgroundImage: profile.avatar_url ? `url(${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/avatars/${profile.avatar_url})` : `url(${foto})`
                        }}
                    >
                        <div className="mt-1 text-center">
                            <p className={`${classes.p1_custom}`}>{profile.first_name} {profile.last_name}</p>
                            <p className={`${classes.p2_custom}`}>Username: {profile.username}</p>
                            <p className={`${classes.p3_custom}`}>Email: {user.email}</p>
                        </div>
                    </div>
                }
            </div>

            <div className={"col-12 col-md-6 d-flex flex-column align-items-center"}>
                <Link className={`${classes.button_custom} text-center`} to={routes.settings}>Modifica Profilo</Link>

                <div className={`col-12 col-md-12 d-flex flex-column mt-3`}>
                    <h3 className="text-center">I tuoi Preferiti</h3>
                    {userFavourites.length > 0 && (
                        <ul className={`${classes.container} ${classes.scroll_box}`}>
                            {userFavourites.map(favourite => (
                                <li className="text-color" key={favourite.id}>{favourite.game_name} <hr /></li>
                            ))}
                        </ul>
                    )}
                </div>



                <div className={`col-12 col-md-12 d-flex flex-column mt-3`}>
                    <h3 className="text-center mb-4">Le tue Recensioni</h3>
                    {userReviews.length > 0 && (
                        <ul className={`${classes.container} ${classes.scroll_box}`}>
                            {userReviews.map(review => (
                                <li className="text-color" key={review.id}>
                                    <p>{review.game_name}</p>
                                    <p>{review.description}</p>
                                    <hr />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

            </div>
        </>
    );
}
