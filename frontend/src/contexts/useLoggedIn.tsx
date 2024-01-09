import { useContext } from "react";
import { UserContext } from "./UserContext";

// USE LOGGED IN
export const useLoggedIn = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useLoggedIn must be used within a UserProvider");
  }
  return context;
};
