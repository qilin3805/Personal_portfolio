import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from 'HomePage';
import Story from 'Story';
import Project from 'Project';
import Memory from 'Memory';
import Bioswitch from 'Project/Bioswitch';
import BioswitchPage from 'Project/ProjectPage/BioswitchPage';
import Blossom from 'Project/Blossom';
import BlossomPage from 'Project/ProjectPage/BlossomPage';
import Landscape from 'Project/Landscape';
import LandscapePage from 'Project/ProjectPage/LandscapePage';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from "react-router-dom";

// Creating browser router instance
const router = createBrowserRouter([
  // Entrance of my website
  { path: `/`, element: <HomePage /> },
  // Navigation to three main parts
  { path: `/Story`, element: <Story /> },
  { path: `/Project`, element: <Project /> },
  { path: `/Memory`, element: <Memory /> },
  // Navigation in projects pages
  { path: `/Project/0`, element: <Bioswitch /> },
  { path: `/BioswitchPage`, element: <BioswitchPage /> },
  { path: `/Project/1`, element: <Blossom /> },
  { path: `/BlossomPage`, element: <BlossomPage /> },
  { path: `/Project/2`, element: <Landscape /> },
  { path: `/LandscapePage`, element: <LandscapePage /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
