import { Outlet } from "react-router-dom"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = () => {
    return (
        <div className="layout"> {/* ne sert peut être a rien */}
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;