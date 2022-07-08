import { AxiosError } from "axios";
import { useState } from "react";

export default (apiFunc: any) => {
  const [data, setData] = useState<null | any[]>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async (...args: any[]) => {
    setLoading(true);
    console.log("Making a request...");
    try {
      const result = await apiFunc(...args);
      let tmpData = [];
      //   Try Muttaing Data
      for (let i = 0; i < 10; i++) {
        tmpData.push(result.data[i]);
      }
      setData(tmpData);
    } catch (error) {
      const err = error as AxiosError;
      setError("An Error Occured");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    request,
  };
};
