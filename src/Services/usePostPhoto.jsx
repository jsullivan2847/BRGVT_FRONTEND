import { useState } from "react";

function usePostPhoto() {
  const [sentPostData, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const PostData = async (url, method = "POST", body = null) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: method,
        // headers: {
        //   "Content-Type": "application/json", // You can adjust the content type if needed
        // },
        body
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

  return { sentPostData, loading, error, PostData };
}

export default usePostPhoto;