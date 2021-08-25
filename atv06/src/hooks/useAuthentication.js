import React, { createContext, useEffect, useState, useContext } from "react";

const AuthenticationContext = createContext({});

export function AuthenticationProvider({ children }) {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("piw.token"));
  }, []);

  return (
    <AuthenticationContext.Provider value={{ token, setToken }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
export function useAuthentication() {
  return useContext(AuthenticationContext);
}
