import { useState } from "react";

function useAddToCart() {
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addToCart = async (product) => {
    setLoading(true);
    setError(null);
    console.log(product);
    try {
      const response = await fetch("https://brgvt-v2.onrender.com/add-to-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({product}),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const result = await response.json();
        // console.log("JSON response:", result);
        setCartData(result);
      } else {
        const result = await response.text();
        console.log("Non-JSON response:", result);
        setCartData(result);
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error);
    }
    setLoading(false);
  };

  return { cartData, loading, error, addToCart };
}

export default useAddToCart;