import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root, { rootLoader } from "./Root";
import Home, { homeLoader } from "./Home";
import Pricing, { pricingLoader } from "./Pricing";
import Contact, { contactLoader } from "./Contact";
import Services, { serviecsLoader } from "./Services";
import Error, { errorLoader } from "./Error";

// https://reactrouter.com/en/main/routers/create-browser-router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    defualt: "/Home",
    children: [
      {
        path: "/",  // defualt path set to home
        element: <Home />,
      },
      {
        path: "Home",
        element: <Home />,
      },
      {
        path: "Pricing",
        element: <Pricing />,
      },
      {
        path: "Services",
        element: <Services />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
