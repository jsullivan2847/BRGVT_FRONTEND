// AuthContext.js
import React, { createContext, useContext, useState,useEffect} from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const cookies = Cookies.get()
  let cookieState = null;
  if(cookies['LoggedIn']){
    cookieState = true;
  }
  else{
    cookieState = false;
  }
  const [isLoggedIn, setIsLoggedIn] = useState(cookieState);
  useEffect(()=>{
    if(!isLoggedIn && cookies['LoggedIn']){
      setIsLoggedIn(true)
    }
    else if(isLoggedIn && !cookies['LoggedIn']){
      console.log('something else')
      setIsLoggedIn(false)
    }
  },[])
  

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  let context = useContext(AuthContext)
  return context.isLoggedIn;
};
