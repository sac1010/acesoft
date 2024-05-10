  import { useEffect, useState } from "react";

  const UseFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = () => {
      setTimeout(async () => {
        try {
          setLoading(true);
          const res = await fetch(url);
          const result = await res.json();
          setData(result);
          setLoading(false);
        } catch {
          setError(true);
        }
      }, 2000);
    };

    const onRefresh = () => {
      fetchData();
    };

    return { data, loading, error, onRefresh };
  };

  export default UseFetch;
