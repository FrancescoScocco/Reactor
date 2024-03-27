import LoginForm from "../components/LoginForm/LoginForm";
import LoginWelcome from "../components/LoginWelcome/LoginWelcome";

export default function LoginViews() {
    return (
        <>
            <div className="container">
                <div className="row vh-100 d-flex justify-content-center">
                    <LoginWelcome />
                    <LoginForm />
                </div>
            </div>
        </>
    )
}