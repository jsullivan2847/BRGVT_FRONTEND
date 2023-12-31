import { useState } from "react";

function useGetCart() {
  const [cartResponse, setCartResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCart = async (product_id, quantity) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://brgvt-v2.onrender.com/cart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const result = await response.json();
        // console.log(result);
        setCartResponse(result.cart);
      } else {
        const result = await response.text();
        // console.log("Non-JSON response:", result);
        setCartResponse(result.cart);
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