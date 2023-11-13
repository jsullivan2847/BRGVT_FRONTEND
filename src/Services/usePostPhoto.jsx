import { useEffect, useState } from "react";
import useApiPut from "./GetProducts/useApiPut";

function usePostPhoto() {
  const [sentPostData, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { sentPutData, putData } = useApiPut();

//   useEffect(() => {
//     let file_name = sentPostData.split("/")
//     file_name = file_name[file_name.length - 1]
//     const productUrl = 'https://brgvt-v2.onrender.com/Products/'+product.id
//     images.push({"name":file_name,"url":sentPostData,"display_order":images.length})
//     putData(productUrl,"PUT",images);
//     console.log(sentPutData);
// },[sentPutData])
  
  const PostData = async (url, method = "POST", body = null, images=null, product) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: method,
        body,
      });
  
      if (!response.ok) {
        console.log("response ",response)
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
        console.log("Non-JSON response:", result);
        setData(result);
      }
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { sentPostData, loading, error, PostData };
}

export default usePostPhoto;