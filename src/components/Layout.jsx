import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

export default function Layout() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-2">
                        <Sidebar/>
                    </div>
                    <div className="col-12 col-md-10">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}