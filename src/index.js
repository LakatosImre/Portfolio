import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, HashRouter, RouterProvider} from 'react-router-dom'
import './index.css';
import App from './App';
import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contacts",
        element: <Contacts />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <RouterProvider router={router} />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

