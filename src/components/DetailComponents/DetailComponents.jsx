import classes from './DetailComponents.module.css';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeartIcon from '../HeartIcon/HeartIcon';
import { useContext } from 'react';
import { UserContext } from '../../Contexts/UserContext';

export default function DetailComponents({ game }) {

    const { profile } = useContext(UserContext)

    return (
        <div className="row">
            <div className="col-12 col-md-12 mt-5 text-center">
                <h2 className={`${classes.text_custom}`}>{game.name}</h2>
            </div>

            <div className="col-4 col-md-4 text-center">
                <p>{game.released}</p>
            </div>
            <div className="col-4 col-md-4 text-center">
                <p><FontAwesomeIcon icon={faStar} /> {game.rating} / 5</p>
            </div>
            <div className="col-4 col-md-4 text-center">
                {profile && <HeartIcon game={game} />}
            </div>

            <div className={`${classes.container} d-flex justify-content-center mt-4`}>
                <p className={`${classes.scroll_box} ${classes.width_custom} text-center`}>{game.description_raw}</p>
            </div>
        </div>
    );
}
