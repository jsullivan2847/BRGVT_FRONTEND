import { useState } from "react";

function useAddToCart() {
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addToCart = async (product_id, quantity) => {
    const key = 'abc'
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://127.0.0.1:5000/add-to-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: "Bearer " + key,
          credentials: 'include'
        },
        body: JSON.stringify({ product_id, quantity }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const result = await response.json();
        console.log(result);
        setCartData(result);
      } else {
        const result = await response.text();
        console.log("Non-JSON response:", result);
        setCartData(result);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { cartData, loading, error, addToCart };
}

export default useAddToCart;