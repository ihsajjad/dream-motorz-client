import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Spinner from "../shared/spinner/Spinner";


const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();
    console.log(location)

    if(loading){
        return <Spinner  />
    }

    if(user){
        return children;
    }
    return (
       <Navigate to='/login' state={{from: location}} replace/>
    );
};

export default PrivetRoute;