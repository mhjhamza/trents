import React from "react";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {data} from "./data/data"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const App = () => {
  console.log(data[0])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
