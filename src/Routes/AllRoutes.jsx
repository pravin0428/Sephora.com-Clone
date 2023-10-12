import {Routes , Route} from "react-router-dom"
import Home from "./Home"
import Login from './Login'
import Makeup from "./Makeup"
import Regiter from "./Regiter"
import Sale from "./Sale"
import Skincare from "./Skincare"
import Foundation from "./Foundation"
import Fragrance from "./Fragrance"
import ToolAndBrushes from "./ToolAndBrush"
import HaireCare from "./HaireCare"
import Brand from "./Brand"
import SingleProduct from "./SingleProduct"
import Cart from "./Cart"
import PrivateRoute from "../Components/PrivateRoute"
function AllRoutes() {
  return (
     <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/login" element={<Login/>} />
        <Route path="/makeup" element={<Makeup/>} />
        <Route path="/sale" element={<Sale/>} />
        <Route path="/skincare" element={<Skincare/>} />
        <Route path="/register" element={<Regiter/>} />
        <Route path="/foundation" element={<Foundation/>} />
        <Route path="/fragrance" element={<Fragrance/>} />
        <Route path="/toolAndBrushes" element={<ToolAndBrushes/>} />
        <Route path="/hairCare" element={<HaireCare/>} />
        <Route path="/brand" element={<Brand/>} />
        <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>} />  
        <Route path="/makeup/:category/:id" element={<SingleProduct/>} />
        <Route path="/skincare/:category/:id" element={<SingleProduct/>} />
     </Routes>
  )
}

export default AllRoutes