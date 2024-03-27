import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import GenreLink from "../GenreLink/GenreLink";
import classes from './ListFiltriMobile.module.css';

export default function ListFiltriMobile({ genres }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleCollapseToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="col-12 col-md-12">
            <p className="d-inline-flex gap-1 ms-2">
                <button className="btn btn-lg pl-5 text-color" onClick={handleCollapseToggle}> Generi 
                <FontAwesomeIcon icon={isCollapsed ? faChevronDown : faChevronUp} 
                className={`${classes.collapseIcon} ${!isCollapsed ? classes.open : ''}`} /></button>
            </p>
            <div className={`collapse ${!isCollapsed ? 'show' : ''}`} id="collapseExample">
                <div className={`${classes.scroll_box} ${classes.bg_custom}`}>
                    <ul className='d-flex flex-column list-unstyled'>
                        {genres && genres.results.map(genre => (
                            <GenreLink key={genre.slug} genre={genre} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
