import { useState } from "react";

function useApiPut() {
  const [sentPutData, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const putData = async (url, method = "PUT", body = null) => {
    setLoading(true);
    setError(null);
    console.log(body);
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json", // You can adjust the content type if needed
        },
        body: body ? JSON.stringify(body) : null,
      });

      if (!response.ok) {
        console.log('there was a problem')
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setData(result);
     
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { sentPutData, loading, error, putData };
}

export default useApiPut;