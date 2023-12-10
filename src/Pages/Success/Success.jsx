import React, { useEffect } from 'react'
import useGetCart from '../../Services/Cart/useGetSessionData'
import useApiPut from '../../Services/GetProducts/useApiPut';
export default function Success() {
  const { cartResponse, loading, error, getCart } = useGetCart();
  const { sentPutData, putData } = useApiPut();
  useEffect(() => {
    getCart();
  },[])
  useEffect(()=>{
    if(cartResponse){
      cartResponse.forEach((product)=> {
        let apiUrl = 'https://brgvt-v2.onrender.com/Products/'+product.product.id;
        let quantity = product.product.quantity - product.quantity;
        console.log(product);
        putData(apiUrl,"PUT",{"quantity":quantity});
      })
    }
    
  },[cartResponse])
  
  return (
    <h1>Success!</h1>
  )
}
