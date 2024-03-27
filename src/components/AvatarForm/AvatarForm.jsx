import { useContext, useEffect, useState } from "react"
import classes from "./AvatarForm.module.css"
import { UserContext } from "../../Contexts/UserContext";
import supabase from "../../database/supabase";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes";

export default function AvatarForm() {

    const [file, setFile] = useState();
    const [preview, setPreview] = useState();
    // const [updated, setUpdated] = useState(false);
    const navigate = useNavigate();

    const { profile, getUser } = useContext(UserContext);

    const handleChange = (e) => {
        setFile(() => e.target.files[0]);
    }

    useEffect(() => {
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
        }
    }, [file]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fileExt = file.name.split('.').pop();
        const fileName = `${profile.id}${Math.random()}.${fileExt}`;
        await supabase.storage.from('avatars').upload(fileName, file);

        await supabase
            .from('profiles')
            .upsert({ id: profile.id, avatar_url: fileName })
            .select();
        await getUser();

        // setUpdated(true);
        navigate(routes.profile);
    }

    return (
        <>
            <div className="col-12-col-md-6 mt-5">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input onChange={handleChange} type="file" className="form-control" id="exampleInputtext1" aria-describedby="emailHelp" name='first_name' />
                    </div>
                    <button type="submit" className={`${classes.button_custom}`}>Conferma Foto</button>
                </form>
            </div>
            {/* {updated &&
                <div className="d-flex justify-content-center text-center">
                    <p className={` ${classes.txt_custom} `}>Immagine caricata, torna al profilo per visualizzarla</p>
                </div>} */}
            <img className="mt-3" src={preview} alt="" />
        </>
    )
}
