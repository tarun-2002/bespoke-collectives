import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Layout from "./components/Layout.jsx"
import About from "./pages/About.jsx"
import Products from "./pages/Products.jsx"
import Contacts from "./pages/Contacts.jsx"
import Register from "./pages/auth/registerLogin.js"



function App(){
    return(
<>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />}/>
    <Route path ="contacts" element={<Contacts />}/>
    <Route path="products" element={<Products />} />
    <Route path="registerLogin" element={<Register/>} />
    </Route>
</Routes>
</BrowserRouter>
</>
);
}

export default App;