import { createBrowserRouter } from "react-router-dom";
import CourseContent from "../../Components/Courses/CourseContent/CourseContent";
import Courses from "../../Components/Courses/Courses";
import DetailsData from "../../Components/Details_course/DetailsData";
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
      {
        path: "/courses/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses_detail/${params.id}`),
        element: <Types></Types>,
      },

      { path: "/details/:id", element: <DetailsData></DetailsData> },
      { path: "/courses", element: <Courses></Courses> },
      {
        path: "/all_courses",

        element: <CourseContent></CourseContent>,
      },
    ],
  },
]);
