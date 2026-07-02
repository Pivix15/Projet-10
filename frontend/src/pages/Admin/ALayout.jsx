import { Outlet } from "react-router-dom";
import Header from "@/components/admin/Header"
import Footer from "@/components/Footer"

const ALayout = () => {
    return (
        <div className="alayout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default ALayout;