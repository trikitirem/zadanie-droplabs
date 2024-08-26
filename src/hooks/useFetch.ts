import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(false);

      const response = await fetch(url);

      if (response.ok) setData(await response.json());
      else setError(true);

      setLoading(false);
    };

    getData();
  }, [url]);

  return { data, isLoading, isError };
};
