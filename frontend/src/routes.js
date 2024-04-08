import { createBrowserRouter } from "react-router-dom";
import HomePage from './HomePage';
import Story from './Story';
import React from "react";

const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/Story", element: <Story /> },
]);

export default router;