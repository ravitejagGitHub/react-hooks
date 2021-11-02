import { useContext } from "react";
import { UserContext } from "./use-context";

export const Login = () => {
  const { setUsername } = useContext(UserContext);
  return (
    <div>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
};
