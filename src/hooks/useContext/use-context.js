import { useState } from "react";
import { Login } from "./login";
import { User } from "./user";

export const UseConext = () => {
  const [username, setUsername] = useState("Default");

  return (
    <>
      <Login setUsername={setUsername} />
      <User username={username} />
    </>
  );
};
