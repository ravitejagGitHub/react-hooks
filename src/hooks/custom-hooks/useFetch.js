import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const response = await res.json();
      setData(response);
      setLoading(false);
    } catch (e) {
      throw Error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { loading, data };
};
