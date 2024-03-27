import classes from './LoginWelcome.module.css'

export default function LoginWelcome() {
    return (
        <>
            <div className={`${classes.bg_sfondo} col-12 col-md-6 d-flex justify-content-center align-items-center`}>
                <div className="d-flex flex-column text-center">
                    <h6 className="">Registrati per accedere a tutti vantaggi riservati ai nostri membri ! </h6>
                    <h1 className={`${classes.h1_bold} display-1 mb-5 `} >BENVENUTO</h1>
                    <p className="">Le informazioni personali che ci fornisci durante il processo di registrazione vengono utilizzate esclusivamente per fornire il servizio richiesto. Non condivideremo queste informazioni con terze parti senza il tuo consenso esplicito.</p>
                </div>
            </div>
        </>
    )
}
