import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/home";
import About from "../components/About";
import AboutMe from "../pages/AboutMe";





const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
       
        <HomeLayout />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home/>,
      
       
      },
      
   
{
  path: "/aboutme",
  element: <AboutMe></AboutMe>
}
   
    ],
  },
  
  // {
  //   path: "*",
  //   element: <ErrorPage></ErrorPage>
  // },
]);

export default router;
