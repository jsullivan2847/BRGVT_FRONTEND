import { useState } from "react";
import { createClient } from '@supabase/supabase-js';

function useLogin() {
  const supabaseUrl = 'https://jrxlluxajfavygujjygc.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyeGxsdXhhamZhdnlndWpqeWdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzNzU0MjAsImV4cCI6MjAxMTk1MTQyMH0.PqkAMN8KFACclum_-86xMSzphxKXUSU26QL5Oi-iQFE';
  const supabase = createClient(supabaseUrl, supabaseKey);

  const login = async (body) => {
    const email = body.email;
    const password = body.password;

    try {
      const response = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      // if (error) {
      //   throw new Error(`Login failed: ${error.message}`);
      // }

      // Do something with the user object if needed
      console.log(response);

      return response;
    } catch (error) {
      // console.error('Login error:', error.message);
      // throw error;
    }
  };

  return { login };
}

export default useLogin;
