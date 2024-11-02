import { useEffect, useState } from "react"
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import Cart from "./components/cart/Cart";


function App() {
  const [isActive,setIsActive] = useState('')
  const [products,setProducts] = useState([])
  const [storeCart,setStoreCart] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      const res = await fetch('data.json')
      const data = await res.json()
      setProducts(data)
    }
    fetchData()
  },[])
  // nav-buttons-click-handler
  function menuClickHandler (buttonName){
    setIsActive(buttonName)
  }
  // add-button-click-handler
  function addClickHandler(product){
    const isExist = storeCart.find(element=> element.id === product.id)
    if(!isExist){
      setStoreCart([...storeCart,product])
    }else{
      return alert('Product Already Added')
    }
  }
    // remove-button-handler
  function removeClickHandler (id){
    const removeItem = storeCart.find(element=> element.id === id)
    const updatedCart = storeCart.filter(element=> element !== removeItem)
    setStoreCart(updatedCart)
  }
// Router
  const router = createBrowserRouter([
    {
      path :'/',
      element : <div>
        <Navbar menuClickHandler={menuClickHandler}
      isActive ={isActive}
      storeCart ={storeCart}/>
        <Hero/>
        <Main products ={products}
            addClickHandler ={addClickHandler}/>
        <Footer/>
      </div>
    },
    {
      path :'/Main',
      element : <div>
        <Navbar menuClickHandler={menuClickHandler}
      isActive ={isActive}
      storeCart ={storeCart}/>
        <Hero/>
        <Main products ={products}
            addClickHandler ={addClickHandler}/>
        <Footer/>
      </div>
    },
    {
      path :'/Cart',
      element : <div>
        <Navbar menuClickHandler={menuClickHandler}
      isActive ={isActive}
      storeCart ={storeCart}/>
        <Cart storeCart ={storeCart}
              removeClickHandler ={removeClickHandler}
        />
        <Footer/>
      </div>
    },
  ])

  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  )
}

export default App
