import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from './HomePage';
import Story from './Story';
import Project from './Project';
import Banner from './Project/Banner';
import Biosensor from './Project/Biosensor';
import BiosensorContent from './ProjectContent/BiosensorContent';
// import Garden from './Project/Garden';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from "react-router-dom";

// import router from './routes';

const router = createBrowserRouter([
  { path: `/`, element: <HomePage /> },
  { path: `/Story`, element: <Story /> },
  { path: `/Project`, element: <Project /> },
  { path: `/Project/0`, element: <Story /> },
  { path: `/Project/1`, element: <Biosensor /> },
  { path: `/Project/2`, element: <Banner /> },
  { path: `/BiosensorContent`, element: <BiosensorContent /> },
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

// ReactDOM.render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <HomePage />
//     </ChakraProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <RouterProvider router={router} />
//     </ChakraProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
