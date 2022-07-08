import { AxiosError } from "axios";
import { useState } from "react";

export default (apiFunc: any) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async (...args: any[]) => {
    setLoading(true);
    console.log("Making a request...")
    try {
      const result = await apiFunc(...args);
      setData(result);
    } catch (error) {
      const err = error as AxiosError;
      setError(err.message || "Unexpected Result");
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
