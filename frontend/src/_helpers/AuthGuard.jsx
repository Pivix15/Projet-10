import { useSelector } from "react-redux"; // lire les données dans le store
import { Navigate } from "react-router-dom";

const AuthGuard = ({children}) => {
    const { isLogged } = useSelector(state => state.auth)

    if(!isLogged) {
        return <Navigate to='/sign-in'/>
    }

    return children
};

export default AuthGuard;