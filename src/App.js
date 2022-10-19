import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import Shop from "./Components/Shop/Shop";
import Order from "./Components/Order/Order";
import About from "./Components/About/About";
import Inventory from "./Components/Inventory/Inventory";
import { productsAndCartLoader } from "./loader/productsAndCartLoader";
import SignUp from "./Components/SignUp.js/SignUp";
import Login from "./Components/Login/Login";
import Shipping from "./Components/Shipping/Shipping";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "order",
          loader: productsAndCartLoader,
          element: <Order></Order>,
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "inventory",
          element: (
            <PrivateRoute>
              <Inventory></Inventory>
            </PrivateRoute>
          ),
        },
        {
          path: "shipping",
          element: (
            <PrivateRoute>
              <Shipping></Shipping>
            </PrivateRoute>
          ),
        },
        {
          path: "signup",
          element: <SignUp></SignUp>,
        },
        { path: "login", element: <Login></Login> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
