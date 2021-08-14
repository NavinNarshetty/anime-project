

import { createContext, useState } from "react";

const AuthContext = createContext({
    token:'',
    isLoggedIn:false,
    login:()=>{},
    logout:()=>{}
})



export const AutContextProvider = (props)=>{

    const [token , setToken] = useState('');
    const isLoggedIn = !!token;

    const loginHandler = (token)=>{
        setToken(token);
    }

    const logoutHandler =()=>{
        setToken(null);
    }

    const ContextValue = {
        token:token,
        isLoggedIn:isLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    }

    return (
        <AuthContext.Provider value={ContextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;