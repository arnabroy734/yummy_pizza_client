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
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import Admin from "./components/admin/Admin";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <AppState>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/menu" element={<MenuPizza />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </AppState>
        </QueryClientProvider>
      </div>
    </Router>
  );
}

export default App;
