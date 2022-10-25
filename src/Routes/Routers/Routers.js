import { createBrowserRouter } from "react-router-dom";
import Courses from "../../Components/Courses/Courses";
import Home from "../../Components/Home/Home";
import Types from "../../Components/Types/Types";
import Main from "../../Main/Main";
export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/types/:id", element: <Types></Types> },
      { path: "/courses", element: <Courses></Courses> },
    ],
  },
]);
