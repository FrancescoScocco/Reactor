import { Link } from "react-router-dom";
import routes from '../../routes/routes';
import classes from './SignInForm.module.css'
import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { useNavigate } from 'react-router-dom';


export default function SignInForm() {

    const {login} = useContext(UserContext)
    const navigate = useNavigate();

    const [form, setForm] = useState(
        {
            email: '',
            password: ''
        }
    );

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(form);
        navigate(routes.home)
    }


    return (
        <>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                <div className={` ${classes.width_custom} d-flex flex-column width_custom`}>
                    <h2 className="text-center mb-5">Login Account</h2>
                    <p className={`${classes.width_custom_p} text-center mb-5`}>Utilizziamo queste informazioni per autenticare il tuo accesso e fornirti un'esperienza personalizzata.</p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 mt-3">
                            <input placeholder="Inserisci Email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} name="email"/>
                        </div>
                        <div className="mb-3">
                            <input placeholder="Password" type="password" className="form-control" id="exampleInputPassword1" 
                            onChange={handleChange} name="password" />
                        </div>
                        <button type="submit" className={`${classes.button_custom} `}>Accedi</button>
                    </form>

                    <span className={`mt-5 text-center text-color ${classes.text_color}`}>Non sei ancora Registrato? <Link className={`${classes.text_custom}`} to={routes.login} >Registrati</Link> </span>
                </div>
            </div>
        </>
    )
}