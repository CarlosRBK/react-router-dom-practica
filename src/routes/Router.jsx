import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import ParamsId from "../pages/ParamsId";
import MultiParams from "../pages/MultiParams";

export const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/:id',
    element: <ParamsId />
  },
  {
    path: '/:id/:color1/:color2',
    element: <MultiParams />
  },
]);
