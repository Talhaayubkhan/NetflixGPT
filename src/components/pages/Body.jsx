import Login from "./Login";
import Home from "./Home";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Errors from "./Errors";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "browse",
      element: <Browse />,
    },
    {
      path: "*",
      element: <Errors />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
