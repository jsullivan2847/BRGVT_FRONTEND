import React from 'react'
import EditButton from '../../components/Edit Button/EditButton'
import LoginModal from '../../components/LoginModal/LoginModal'
import { useAuth } from '../../Context/AuthContext';
import { useState } from 'react';

export default function LoginPage() {
  const [loggingIn,setLoggingIn] = useState(false);
  console.log(useAuth());
  const loggedIn = false;
  return (
    <div className='App'>
        {!useAuth() ? <EditButton text={"Login"} handleButtonClick={() => setLoggingIn(prevState => !prevState) }/>
        : <h1>You're already logged In...</h1>}
        <LoginModal
        active={loggingIn}
        close={() => setLoggingIn(prevState => !prevState)}
        />
    </div>
   
  )
}
