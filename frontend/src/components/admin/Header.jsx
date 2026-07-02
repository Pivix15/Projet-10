import { Link } from "react-router-dom";
import LogoHeader from '@/assets/argentBankLogo.png'

const Header = () => {
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={LogoHeader} alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="main-nav-item" to="/sign-in">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
                <button>Logout</button>
            </div>
        </nav>
    );
};

export default Header;