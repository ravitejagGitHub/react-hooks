import { useEffect, useState } from "react";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await res.json();
};

export const UseEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <div>
      <fieldset>
        <legend>Use Effect:</legend>
        <ul>
          {data.slice(0, 3).map((item) => (
            <li key={item.id}> {item.title}</li>
          ))}
        </ul>
      </fieldset>
    </div>
  );
};
