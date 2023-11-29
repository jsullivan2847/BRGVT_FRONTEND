import { useState } from "react";

function useLogin () {
    const loginUrl = 'https://brgvt-v2.onrender.com/login'
    const [user,setUser] = useState(null);
    const login = async (body) => {
        const email = body.email;
        const password = body.password;
        try {
          const response = await fetch(loginUrl, {
            method: 'POST',
            credentials:"include",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              password,
            }),
          });
      
          if (!response.ok) {
            throw new Error(`Login failed: ${response.status}`);
          }
      
          const data = await response.json();
          return data
        } catch (error) {
          console.error('Login error:', error.message);
          throw error;
        }
      };
      return {login,user};
}
export default useLogin;


