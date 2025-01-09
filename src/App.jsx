import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Layout from "./Components/Layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/react-spa/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "/react-spa/home", element: <Home /> },
        { path: "/react-spa/about", element: <About /> },
        { path: "/react-spa/portfolio", element: <Portfolio /> },
        { path: "/react-spa/contact", element: <Contact /> },
        {
          path: "*",
          element: (
            <div>
              <h1>404 Not found</h1>
            </div>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
