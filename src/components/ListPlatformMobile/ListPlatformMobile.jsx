import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import classes from './ListPlatformMobile.module.css';
import PlatformsLink from "../PlatformsLink/PlatformsLinks"


export default function ListPlatformMobile({ platforms }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleCollapseToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="col-12 col-md-12">
            <p className="d-inline-flex gap-1 ms-2">
                <button className="btn btn-lg pl-5 text-color" onClick={handleCollapseToggle}> Platforms
                    <FontAwesomeIcon icon={isCollapsed ? faChevronDown : faChevronUp}
                        className={`${classes.collapseIcon} ${!isCollapsed ? classes.open : ''}`} /></button>
            </p>
            <div className={`collapse ${!isCollapsed ? 'show' : ''}`} id="collapseExample">
                <div className={`${classes.scroll_box} ${classes.bg_custom}`}>
                    <ul className='d-flex flex-column list-unstyled '>
                        {platforms && platforms.results.map(platform => (
                            <PlatformsLink key={platform.id} platform={platform} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
