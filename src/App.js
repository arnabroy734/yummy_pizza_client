import HomePage from "./components/home/HomePage";
import MenuPizza from "./components/menu/MenuPizza";
import NavBar from "./components/navbar/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Cart from "./components/cart/Cart";
import Orders from "./components/orders/Orders";
import AppState from "./context/AppState";


function App() {
  return (
    <Router>
      <div className="App">
        <AppState>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/menu" element={<MenuPizza />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </AppState>
      </div>
    </Router>
  );
}

export default App;
