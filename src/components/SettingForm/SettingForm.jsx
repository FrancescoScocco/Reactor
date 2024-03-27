import { useContext, useState } from 'react'
import { UserContext } from '../../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes';
import classes from './SettingForm.module.css'

export default function SettingForm() {

    const { updateProfile } = useContext(UserContext);
    const navigate = useNavigate();

    const { profile } = useContext(UserContext);

    const [form, setForm] = useState({
        first_name: profile.first_name || '',
        last_name: profile.last_name || '',
        username: profile.username || ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDatiSalvati = Object.keys(form).filter(key => form[key] !== profile[key]);
        if (formDatiSalvati.length > 0) {
            await updateProfile(form);
        }
        navigate(routes.profile);
    }

    return (
        <>
            <div className="col-12 col-md-12 d-flex justify-content-center align-items-center mt-5">
                <div className={` ${classes.width_custom} d-flex flex-column`}>
                    <h2 className="text-center mb-3">Modifica Account</h2>
                    <p className={`${classes.width_custom_p} text-center mb-5`}>Utilizziamo queste informazioni per autenticare il tuo accesso e fornirti un'esperienza personalizzata.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 ">
                            <input placeholder="Nome" type="text" className="form-control" id="exampleInputtext1" aria-describedby="emailHelp" name='first_name' value={form.first_name} onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <input placeholder="Cognome" type="text" className="form-control" id="exampleInputtext" aria-describedby="emailHelp" name='last_name' value={form.last_name} onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <input placeholder="Username" type="text" className="form-control" id="exampleInputUsername" aria-describedby="emailHelp" name='username' value={form.username} onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className={`${classes.button_custom} `}>Salva modifiche</button>
                    </form>
                </div>
            </div>
        </>
    )
}
