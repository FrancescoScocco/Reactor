import { Link } from "react-router-dom";
import routes from '../../routes/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import SearchBar from "../SearchBar/SearchBar";
import classes from "./Navbar.module.css"
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

export default function Navbar() {

    const { profile, signOut } = useContext(UserContext);

    return (
        <>
            <nav className="navbar navbar-expand-md mt-3">
                <div className="container">
                    <Link className="text-color-logo " to={routes.home}>R e a c t o r</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faList} size="lg" style={{ color: "#ffffff", }} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className={`${classes.margin} nav-link text-color`} to={routes.home} aria-current="page" href="#">Home</Link>
                            </li>
                            {!profile
                                &&
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link text-color" to={routes.signin} href="#">Accedi</Link>
                                    </li>
                                </>
                                ||
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link text-color" href="#" to={routes.profile}>Ciao {profile.username}</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-color" href="#" onClick={() => signOut()}>Logout</Link>
                                    </li>
                                </>

                            }
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container">
                <div className="row">
                    <SearchBar />
                </div>
            </div>
        </>
    );
}
