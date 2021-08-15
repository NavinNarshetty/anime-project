

import { createContext, useState  , useEffect, useCallback} from "react";
const AuthContext = createContext({
    token:'',
    isLoggedIn:false,
    login:()=>{},
    logout:()=>{}
})


let logoutTimer;

const calremainingTime = (expiretime)=>{
    const currentTime = new Date().getTime();
    const adjExpireTime = new Date(expiretime).getTime();

    const remainingTime = adjExpireTime - currentTime;
    return remainingTime;
}

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expireintoken');
    
    const remainingTime = calremainingTime(storedExpirationDate);
  
    if (remainingTime <= 3600) {
      localStorage.removeItem('token');
      localStorage.removeItem('expireintoken');
      return null;
    }
  
    return {
      token: storedToken,
      duration: remainingTime,
    };
  };


export const AutContextProvider = (props)=>{
    const tokenData = retrieveStoredToken();
    let initalToken;
    if(tokenData){
     initalToken = tokenData.token
    }
    const [token , setToken] = useState(initalToken);
    const isLoggedIn = !!token;

    

    const logoutHandler =useCallback(()=>{
        setToken(null);
        localStorage.removeItem('token')
        localStorage.removeItem('expireintoken');
        if(logoutTimer){
            clearTimeout(logoutTimer)
        }
    },[]);

    const loginHandler = (token,expiresinTime)=>{
        setToken(token);
        localStorage.setItem('token',token);
        localStorage.setItem('expireintoken',expiresinTime);
        const remaingTimeForToken = calremainingTime(expiresinTime);
        logoutTimer = setTimeout(logoutHandler,remaingTimeForToken);
    }

    useEffect(()=>{
        if(tokenData){
            console.log(tokenData.duration)
            logoutTimer = setTimeout(logoutHandler,tokenData.duration);
        }
    },[tokenData , logoutHandler])

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