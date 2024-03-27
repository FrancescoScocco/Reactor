import AvatarForm from "../components/AvatarForm/AvatarForm";
import SettingForm from "../components/SettingForm/SettingForm";

export default function SettingsViews() {
    return (
        <>
            <div className="container">
                <div className="row  d-flex justify-content-center">
                    <div className="col-12 col-md-6">
                        <SettingForm />
                    </div>
                    <div className="col-12 col-md-6">
                        <AvatarForm />
                    </div>
                </div>
            </div>
        </>
    )
}