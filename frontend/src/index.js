import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from 'HomePage';
import Story from 'Story';
import Project from 'Project';
import Memory from 'Memory';
import Bioswitch from 'Project/Bioswitch';
import BioswitchPage from 'Project/ProjectPage/BioswitchPage';
import Blossom from 'Project/Blossom';
import BlossomPage from 'Project/ProjectPage/BlossomPage';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from "react-router-dom";

// import router from './routes';

const router = createBrowserRouter([
  { path: `/`, element: <HomePage /> },
  { path: `/Story`, element: <Story /> },
  { path: `/Project`, element: <Project /> },
  { path: `/Memory`, element: <Memory /> },
  { path: `/Project/0`, element: <Bioswitch /> },
  { path: `/BioswitchPage`, element: <BioswitchPage /> },
  { path: `/Project/1`, element: <Blossom /> },
  { path: `/BlossomPage`, element: <BlossomPage /> },
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

