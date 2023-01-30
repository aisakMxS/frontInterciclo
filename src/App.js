import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Productos from "./users/Productos";
import UpdateProduct from "./users/ModificarProductos"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/addproduct" element={<Productos/>}/>
        <Route exact path="/updateproduct" element={<UpdateProduct/>}/>
      </Routes>
      </Router>
      
    </div>
  );
}


export default App;
