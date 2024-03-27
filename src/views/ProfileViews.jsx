import { useContext } from "react";
import ProfileSection from "../components/ProfileSection/ProfileSection";
import { UserContext } from "../Contexts/UserContext";


export default function ProfileViews() {

    const {profile} = useContext(UserContext)

    return (
        <>
        <div className="container">
            <div className="row vh-100 d-flex justify-content-center ">
                    {profile && <ProfileSection/>}
            </div>
        </div>
        </>
    )
}