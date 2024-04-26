import React from 'react';
// import ReactDOM from 'react-dom';
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

// import router from './routes';

const router = createBrowserRouter([
  { path: `/`, element: <HomePage /> },
  { path: `/Story`, element: <Story /> },
  { path: `/Project`, element: <Project /> },
  { path: `/Memory`, element: <Memory /> },
  { path: `/Project/0`, element: <Bioswitch /> },
  // { path: `/Project/0`, element: <BioswitchPage /> },
  { path: `/BioswitchPage`, element: <BioswitchPage /> },
  { path: `/Project/1`, element: <Blossom /> },
  // { path: `/Project/1`, element: <BlossomPage /> },
  { path: `/BlossomPage`, element: <BlossomPage /> },
  { path: `/Project/2`, element: <Landscape /> },
  // { path: `/Project/2`, element: <LandscapePage /> },
  { path: `/LandscapePage`, element: <LandscapePage /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <HomePage/> */}
    <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

