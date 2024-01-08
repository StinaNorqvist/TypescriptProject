import React, { createContext, useContext, useState, ReactNode } from "react";
import { ILogin, ILoginProps } from "../interfaces/interfaces";

// USER CONTEXT
export const UserContext = createContext<ILoginProps | null>(null);

// USE LOGGED IN
export const useLoggedIn = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useLoggedIn must be used within a UserProvider");
  }
  return context;
};

// USER PROVIDER
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loggedInUser, setloggedInUser] = useState<ILogin | null>(null);

  const login = (user: ILogin) => {
    setloggedInUser(user);
  };

  const logout = () => {
    setloggedInUser(null);
  };

  console.log(loggedInUser, "USERS LOGGED IN");

  return (
    <>
      <UserContext.Provider value={{ loggedInUser, login, logout }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
