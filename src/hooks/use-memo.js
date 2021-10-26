import { useEffect, useMemo, useState } from "react";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await res.json();
};

export const UseMemo = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetchData().then((response) => {
      setData(response);
    });
  }, []);

  const findLongestPost = (posts) => {
    if (!posts) return null;

    let longestPost = "";

    posts.forEach((post) => {
      if (post.body?.length > longestPost.length) {
        longestPost = post.body;
      }
    });

    console.log("LOGEST POST COMPUTED");
    return longestPost;
  };

  const getLongestPost = useMemo(() => {
    return findLongestPost(data);
  }, [data]);

  return (
    <div>
      <fieldset>
        <legend>Use Memo:</legend>
        <h4> {getLongestPost}</h4>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        {toggle && <h4>Toggle Text</h4>}
      </fieldset>
    </div>
  );
};
