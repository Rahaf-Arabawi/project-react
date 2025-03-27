import React from "react";
import ReactDOM from "react-dom/client";
import About from "./componid/aboutuspage/Aboutus";
import Contact from "./componid/contactUspage/contactUs";
import Login from "./componid/login/login";
import Home from "./App";
import DAshbord from "./componid/dshbord/components/dashbord";
import Add from "./componid/dshbord/components/add/add";
import Student from "./componid/dshbord/components/add/add1";
import Profile from "./componid/home page/student/studint";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/b",
    element: <About />,
  },
  {
    path: "/c",
    element: <Contact />,
  },
  {
    path: "/Log",
    element: <Login />,
  },
  {
    path: "/dash",
    element: <DAshbord />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/student",
    element: <Student />,
  },
  {
    path: "/fn",
    element: <Profile />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
