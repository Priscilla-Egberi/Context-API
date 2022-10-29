import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Products from "./Components/Products"
import CheckOut from "./Components/CheckOut"
import Nav from "./Components/Nav"
import {CardContextProvider} from "./CardContext"

function App() {
  return (
    <>
   <CardContextProvider>
    <Router>
    <Nav />
    <Routes>
      <Route exact path="/" element={<Products />}></Route>
      <Route exact path="/checkout" element={<CheckOut />}></Route>
    </Routes>
    </Router>
    </CardContextProvider>
    </>
    
  );
}

export default App;
