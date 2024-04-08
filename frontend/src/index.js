import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from './HomePage';
// import Story from './Story';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from "react-router-dom";
// import router from './routes';

const router = createBrowserRouter([
  { path: `/`, element: <HomePage /> },
  // { path: `/Story`, element: <Story /> },
])

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
