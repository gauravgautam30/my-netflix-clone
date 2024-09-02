/* eslint-disable react-hooks/exhaustive-deps */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {
  return (
    <div className="">
      <RouterProvider router={appRouter} />
      <div></div>
    </div>
  );
};

export default Body;
