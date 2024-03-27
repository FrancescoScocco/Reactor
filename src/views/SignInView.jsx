import SignInForm from "../components/SignInForm/SignInForm";
import SignInWelcome from "../components/SignInWelcome/SignInWelcome";


export default function SignInView() {
    return (
        <>
            <div className="container">
                <div className="row vh-100 d-flex justify-content-center">
                        <SignInWelcome />
                        <SignInForm />
                </div>
            </div>
        </>
    )
}