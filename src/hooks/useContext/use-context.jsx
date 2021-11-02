import { createContext, useState } from "react";
import { Login } from "./login";
import { User } from "./user";

export const UserContext = createContext(null);

export const UseConext = () => {
  const [username, setUsername] = useState("Default");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <Login />
      <User />
    </UserContext.Provider>
  );
};
