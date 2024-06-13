import { Outlet } from "react-router-dom";
import Navbar from "../assets/components/Navbar";
import TopNavigationMenu from "../assets/components/TopNavigationMenu";
import Footer from "../assets/components/Footer";

const Root = () => {
    return (
        <div>
            <TopNavigationMenu />
            <Navbar />
            <Outlet />
            <Footer />

        </div>
    );
};

export default Root;