import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Components/Cart.jsx";
import Home from "./routes/Home.jsx";
import {Provider} from "react-redux"
import ecomm from "./store/index.js";
import HomeItem from "./Components/HomeItem.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={ecomm}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
