import useFetch from '../../hooks/useFetch'
import classes from './ButtonPC.module.css'
import GenreList from '../GenreList/GenreList';


export default function ButtonPC() {

    const KEY_API = import.meta.env.VITE_API_KEY;

    const genres = useFetch(`https://api.rawg.io/api/genres?key=${KEY_API}`);

    return (
        <>
            <div className={"mt-5 d-none d-md-block " + classes.container}>
                <h3 className={"mt-5 " + classes.title_custom}>Generi :</h3>
                <div className={classes.scroll_box}>
                    <ul>
                        <GenreList genres={genres} />
                    </ul>
                </div>
            </div>
        </>
    )
}