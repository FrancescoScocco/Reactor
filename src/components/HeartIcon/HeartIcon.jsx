import { useContext, useEffect, useState, } from "react"
import { UserContext } from "../../Contexts/UserContext";
import supabase from "../../database/supabase";


export default function HeartIcon({ game }) {

    const [favourite, setFavoruite] = useState(false);
    const { profile } = useContext(UserContext);

    const getFavourite = async () => {

        let { data: favourites, error } = await supabase
            .from('favourites')
            .select()
            .eq('profile_id', profile.id)
            .eq('game_id', game.id)

        if(favourites.length > 0){
            setFavoruite(true);
        }else{
            setFavoruite(false);
        }
    }

    useEffect(
        () => {
            getFavourite();
        }, []
    )


    const handleClick = async () => {
        setFavoruite((prev) => !prev);

        if (!favourite) {
            const { data, error } = await supabase
                .from('favourites')
                .insert([
                    { profile_id: profile.id, game_id: game.id, game_name: game.name },
                ])
                .select()

        } else {
            const { error } = await supabase
                .from('favourites')
                .delete()
                .eq('profile_id', profile.id)
                .eq('game_id', game.id)

        }
    }

    return (
        <>
            <i onClick={handleClick} className={`${favourite ? 'fa-solid fa-2x' : 'fa-regular fa-2x'} text-color fa-regular fa-heart`}></i>
        </>
    )
}