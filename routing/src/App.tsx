import { Routes, Route } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import PageNotFound from "./components/PageNotFound";
import Products from "./components/Products";
import Feature from "./components/Feature";
import News from "./components/News";
import User from "./components/User";
import UserDetails from "./components/UserDetails";
import AdminUser from "./components/AdminUser";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="order-details" element={<Order />}></Route>
        <Route path="products" element={<Products />}>
          {/* <Route index element={<Feature />}     index attribute for setting a default comp                      /> */}
          <Route path="feature" element={<Feature />} />
          <Route path="new" element={<News />} />
        </Route>
        <Route path="user" element={<User />}>
          <Route path=":userId" element={<UserDetails />} />{" "}
          {/* Dynamic Routing for User follow same pattern */}
          <Route path="admin" element={<AdminUser />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
