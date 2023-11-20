import { useEffect, useState } from "react";

function usePostPhoto() {
  const [sentPostData, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const PostData = async (url, method = "POST", body = null, images=null, product) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: method,
        body,
      });
  
      if (!response.ok) {
        // console.log("response ",response)
        throw new Error(response);
      }
      else{
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const result = await response.json();
        setData(result);
      } else {
        // Handle non-JSON response here
        const result = await response.text();
        // console.log("Non-JSON response:", result);
        setData(result);
      }
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {setData, sentPostData, loading, error, PostData };
}

export default usePostPhoto;