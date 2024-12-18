import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Fetch from "./components/Fetch";



const App= () => {
  return (  
    <>
     <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout />}>
     <Route  index element={<Home />}></Route>
     <Route path="/about" element={<About />}></Route>
     <Route path="/contactus" element={<ContactUs />}></Route>  
     </Route>     
    </Routes>
   </BrowserRouter>

   <Fetch />
    </>
   
  ) 
  
  
}



export default App;
