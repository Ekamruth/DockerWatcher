import React from 'react';
import './App.css';
import ContainerData from './components/ContainerData/ContainerData'
import ContainerDetails from './components/ContainerDetails/ContainerDetails';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Root from './components/Root';
import ContainerLogs from './components/ContainerLogs/ContainerLogs';
import ImagesData from './components/ImagesData/ImagesData';
import AboutPage from './components/AboutPage/AboutPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import HomePage from './components/HomePage/HomePage';
import VolumesPage from './components/VolumesPage/VolumesPage';


function App() {

  const router = createBrowserRouter([
    {
      path: "/", element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage />, },
        { path: "/containers", element: <ContainerData />, },
        { path: "/containers/:id", element: <ContainerDetails />, },
        { path: "/containers/:id/logs", element: <ContainerLogs /> },
        { path: "/images", element: <ImagesData /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/volumes", element:<VolumesPage/>},
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


