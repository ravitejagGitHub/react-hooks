import { useContext } from "react";
import { UserContext } from "./use-context";

export const User = () => {
  const { username } = useContext(UserContext);

  return (
    <div>
      <h1> Username: {username}</h1>
    </div>
  );
};
