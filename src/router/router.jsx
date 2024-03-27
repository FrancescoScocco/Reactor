import { createBrowserRouter } from "react-router-dom";
import routes from "../routes/routes";
import Layout from "../components/Layout";
import Homepage, { gamesLoader } from "../views/Homepage";
import GenreViews, { gamesGenreLoader } from "../views/GenreViews";
import PlatformViews, { PlatformsLoader } from "../views/PlatformViews";
import AuthenticationLayout from "../components/AuthenticationLayout";
import SignInView from "../views/SignInView";
import LoginViews from "../views/LoginViews";
import ProfileViews from "../views/ProfileViews";
import SettingsViews from "../views/SettingsViews";
import DetailViews, { getGame } from "../views/DetailViews";


const router = createBrowserRouter([
    {
        path: routes.home,
        element: <Layout />,
        children: [
            {
                path: routes.home,
                element: <Homepage />,
                loader: gamesLoader
            },
            {
                path: routes.genre,
                element: <GenreViews />,
                loader: gamesGenreLoader
            },
            {
                path: routes.platform,
                element: <PlatformViews />,
                loader: PlatformsLoader
            },
        ],
    },
    {
        path: routes.auth,
        element: <AuthenticationLayout />,
        children: [
            {
                path: routes.signin,
                element: <SignInView />
            },
            {
                path: routes.login,
                element: <LoginViews/>
            },
            {
                path: routes.profile,
                element: <ProfileViews/>
            },
            {
                path: routes.settings,
                element: <SettingsViews/>
            }
        ]
    },
    {
        path:routes.detail,
        element: <DetailViews/>,
        loader: getGame
    }
])

export default router;