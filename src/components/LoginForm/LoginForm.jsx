import { useContext, useState } from 'react'
import classes from './LoginForm.module.css'
import { UserContext } from '../../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes';

export default function LoginForm() {

    const { signUp } = useContext(UserContext);
    const navigate = useNavigate();

    const [form, setForm] = useState(
        {
            email: '',
            password: '',
            options: {
                data: {
                    first_name: '',
                    last_name: '',
                    username: ''
                }
            }
        }
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUp(form);
        navigate(routes.home)
    }

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const profileHandleChange = (e) => {
        setForm((prev) => ({
            ...prev, options: {
                data: {
                    ...prev.options.data,
                    [e.target.name]: e.target.value
                }
            }
        }))
    }


    return (
        <>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                <div className={` ${classes.width_custom} d-flex flex-column width_custom`}>
                    <h2 className="text-center mb-3">Register Account</h2>
                    <p className={`${classes.width_custom_p} text-center mb-5`}>Utilizziamo queste informazioni per autenticare il tuo accesso e fornirti un'esperienza personalizzata.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 ">
                            <input placeholder="Nome" type="text" className="form-control" id="exampleInputtext1" aria-describedby="emailHelp" name='first_name' onChange={profileHandleChange} />
                        </div>
                        <div className="mb-3 mt-3">
                            <input placeholder="Cognome" type="text" className="form-control" id="exampleInputtext" aria-describedby="emailHelp" name='last_name' onChange={profileHandleChange} />
                        </div>
                        <div className="mb-3 mt-3">
                            <input placeholder="Username" type="text" className="form-control" id="exampleInputUsername" aria-describedby="emailHelp" name='username' onChange={profileHandleChange} />
                        </div>
                        <div className="mb-3 mt-3">
                            <input placeholder="Inserisci Email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} name='email' />
                        </div>
                        <div className="mb-3">
                            <input placeholder="Password" type="password" className="form-control" id="exampleInputPassword1"
                                onChange={handleChange} name='password' />
                        </div>
                        <button type="submit" className={`${classes.button_custom} `}>Registrati</button>
                    </form>
                </div>
            </div>
        </>
    )
}