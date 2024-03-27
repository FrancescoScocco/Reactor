import classes from "./SignInWelcome.module.css"

export default function SignInWelcome() {
    return (
        <>
            <div className={`${classes.bg_sfondo} col-12 col-md-6 d-flex justify-content-center align-items-center`}>
                <div className="d-flex flex-column text-center">
                    <h6 className="">Fai il login per accedere alla dashboard !</h6>
                    <h1 className= {`${classes.h1_bold} display-1 mb-5 `} >BENTORNATO</h1>
                    <p className="">Entra nel nostro mondo esclusivo! Unisciti a una community dinamica e scopri offerte speciali e contenuti unici.</p>
                </div>
            </div>
        </>
    )
}