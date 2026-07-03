import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '@/store/authSlice';
import LogoHeader from '@/assets/argentBankLogo.png'


const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogged = useSelector((state) => state.auth.isLogged);

    const isLogout = () => {
        dispatch(logout())
        localStorage.removeItem('token')
        navigate('/sign-in')
    }

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={LogoHeader} alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {isLogged ? (
                    <button className="main-nav-item" onClick={isLogout}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </button>
                ) : (
                    <Link className="main-nav-item" to="/sign-in">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Header;