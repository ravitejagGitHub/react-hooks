import React from "react";
import { useFetch } from "./useFetch";

export const CustomHook = () => {
  const { loading, data } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return (
    <div>
      <fieldset>
        <legend>Custom Hook: useFetch</legend>
        <Loading loading={loading} />
        {data && (
          <ul>
            {data.slice(0, 3).map((item) => (
              <li key={item.id}> {item.title}</li>
            ))}
          </ul>
        )}
      </fieldset>
    </div>
  );
};

const Loading = ({ loading }) => {
  return loading ? <h2>Loading....</h2> : null;
};
