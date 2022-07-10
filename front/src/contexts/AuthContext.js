import { createContext, useContext, useState } from "react";
const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(localStorage.getItem("token"));
    const [loading,setLoadingg]=useState(false);
    const setLoading = (value)=>{
        (setTimeout(function() {setLoadingg(value) }, value===false?300:0));

    }
    const login =(user)=>{
        localStorage.setItem("token",user)
        setUser(user);
    }

    const logout = () =>{
        setUser(null);
        localStorage.removeItem("token")

    }

    return (<AuthContext.Provider value={{user,login,logout,loading,setLoading}}>
        {children}
    </AuthContext.Provider>)
}

export const useAuth =() => {
    return useContext(AuthContext);
}