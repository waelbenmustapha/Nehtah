import { useAuth } from "../../contexts/AuthContext";
import {Navigate} from 'react-router-dom';
export const RequireAuth = ({children}) => {
    const auth= useAuth()

    if(!auth.user){
        return <Navigate to="/sign-in"/>
    }
    return children
}