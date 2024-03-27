import useFetch from "../../hooks/useFetch";
import PlatformsList from "../PlatformsList/PlatformsList";
import classes from "./ButtonPlatformPC.module.css"


export default function ButtonPlatformPC(){

    const KEY_API = import.meta.env.VITE_API_KEY;

    const platforms = useFetch(`https://api.rawg.io/api/platforms?key=${KEY_API}`);

    return( 
        <div className={"mt-2 d-none d-md-block " + classes.container}>
                <h3 className={"mt-5 " + classes.title_custom}>Platforms :</h3>
                <div className={classes.scroll_box}>
                    <ul>
                        <PlatformsList platforms={platforms}/>
                    </ul>
                </div>
            </div>
    )
}
