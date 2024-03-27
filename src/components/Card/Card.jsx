import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import classes from './Card.module.css'
import { Link } from 'react-router-dom';
import routes from '../../routes/routes';


export default function Card({ game }) {

    const cardStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${game.background_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
    };

    return (
        <div className="col col-12 col-md-4 my-3">

            <Link to={`/detail/${game.id}`} className={`${classes.txt_decoration}`}>
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={cardStyle}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1 " >
                        <div className="overlay"></div>
                        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-white">{game.name}</h3>
                        <ul className="d-flex list-unstyled mt-auto text-white">
                            <li className={"d-flex align-items-center me-3 " + classes.width_custom}>
                                <svg className="bi me-2" width="1em" height="1em"> 
                                <FontAwesomeIcon icon={faStar} />
                                <use xlinkHref="#geo-fill"></use></svg>
                                <small className=''>{game.rating} / 5</small>
                            </li>
                            <div>
                                <div>
                                    <ul className={classes.platform_list}>
                                        {game.platforms.map((platform, id) => (
                                            <li key={id} className={classes.platform_item}>
                                                <small>{platform.platform.name}</small>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </Link>
        </div>
    );
}
