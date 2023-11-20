import { useState } from "react";

function useDeletePhoto() {
  const [deleteResponse, setDeleteResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deletePhoto = async (file_name) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://brgvt-v2.onrender.com/Photos/Delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer your-secret-key", // Replace with your actual secret key
        },
        body: JSON.stringify({"file_name":file_name}),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const result = await response.json();
        setDeleteResponse(result);
      } else {
        const result = await response.text();
        // console.log("Non-JSON response:", result);
        setDeleteResponse(result);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { deleteResponse, loading, error, deletePhoto };
}

export default useDeletePhoto;