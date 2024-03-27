import classes from './SearchBar.module.css';

export default function SearchBar() {
    return (
        <>
            <div className="col-12 col-md-12 mt-2">
                <input className={"mx-auto " + classes.search_bar} type="search" placeholder="Cerca il tuo gioco" aria-label="Search" />
            </div>
        </>
    )

}
