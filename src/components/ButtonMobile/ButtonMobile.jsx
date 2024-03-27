import React from 'react';
import classes from './ButtonMobile.module.css';
import ListFiltriMobile from '../ListFiltriMobile/ListFiltriMobile';
import useFetch from '../../hooks/useFetch';
import ListPlatformMobile from '../ListPlatformMobile/ListPlatformMobile';

export default function Button() {

    const KEY_API = import.meta.env.VITE_API_KEY;

    const genres = useFetch(`https://api.rawg.io/api/genres?key=${KEY_API}`);
    const platforms = useFetch(`https://api.rawg.io/api/platforms?key=${KEY_API}`);


    return (
        <>
            <button className={`${classes.button_custom} btn d-sm-none d-md-none d-lg-none d-xl-none`} type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">Ricerca per Filtri</button>
            <div className={`${classes.offcanvas_body} offcanvas offcanvas-start`} data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className={`${classes.offcanvas_body} offcanvas-header`}> 
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                
                <div className={classes.offcanvas_body}>
                    <div className="container">
                        <div className="row">
                            <h3 className={`${classes.margin_h3} my-4`}>Trova il tuo gioco</h3>
                            <ListFiltriMobile genres={genres}/>
                            <ListPlatformMobile platforms={platforms} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
