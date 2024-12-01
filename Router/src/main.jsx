import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layouts from "./Layouts";
import {Home ,About,Contact ,githubInfoLoader, GitHub , User} from "./components/index";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts />}>
     <Route path="" element={<Home />}/>
     <Route path="about" element={<About/>}/>
     <Route path="contact" element={<Contact/>}/>
     <Route path="user/:userid" element={<User/>}/>
     <Route
      loader={githubInfoLoader} path="github" element={<GitHub/>}/>
    </Route>
  )
);


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
