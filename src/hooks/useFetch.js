import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://hybrid-apis.vercel.app/api${url}`);
        //setData(res.data);
        if (res.data) setData(res.data);
      } catch (err) {
        setError(err);
        console.log(err?.response);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://hybrid-apis.vercel.app/api${url}`);
      //setData(res.data);
      if (res.data) setData(res.data);
    } catch (err) {
      setError(err);
      console.log(err?.response);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
