import { useState } from "react";

function useGetCart() {
  const [cartResponse, setCartResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCart = async (product_id, quantity) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://127.0.0.1:5000/cart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer your-secret-key", // Replace with your actual secret key
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const result = await response.json();
        console.log(result);
        setCartResponse(result);
      } else {
        const result = await response.text();
        // console.log("Non-JSON response:", result);
        setCartResponse(result);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { cartResponse, loading, error, getCart };
}

export default useGetCart;