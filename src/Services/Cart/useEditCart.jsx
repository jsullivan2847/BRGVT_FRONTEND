import { useState } from "react";

function useEditCart() {
  const [cartResponse, setCartResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const editCart = async (product_id, new_quantity) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://brgvt-v2.onrender.com/cart", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({
            product_id:product_id,
            new_quantity:parseInt(new_quantity, 10)
        })
      });

      if (!response.ok) {
        console.log(response.status)
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const result = await response.json();
        console.log(result);
        setCartResponse(result.cart);
      } else {
        const result = await response.text();
        console.log("Non-JSON response:", result);
        setCartResponse(result.cart);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { cartResponse, loading, error, editCart };
}

export default useEditCart;