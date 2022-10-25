import { createBrowserRouter } from "react-router-dom";
import Courses from "../../Components/Courses/Courses";
import Home from "../../Components/Home/Home";
import Main from "../../Main/Main";
export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/courses", element: <Courses></Courses> },
    ],
  },
]);
