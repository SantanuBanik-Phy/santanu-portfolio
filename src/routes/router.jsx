import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/home";
import About from "../components/About";
import AboutMe from "../pages/AboutMe";
import ContactMe from "../pages/ContactMe";
import AllProjects from "../pages/AllProjects";
import DetailsPage from "../pages/DetailsPage";





const router = createBrowserRouter([
  {
    path: "/",
    element: (
      
       
        <HomeLayout />
      
    ),
    children: [
      {
        path: "/",
        element: <Home/>,
      
       
      },
      
   
{
  path: "/aboutme",
  element: <AboutMe></AboutMe>
},
{
  path: "/contactme",
  element: <ContactMe></ContactMe>
},
{
  path: "/projects",
  element: <AllProjects></AllProjects>
},
{
  path:"/details/:id",
  element: (
   
      <DetailsPage />
    ),
  loader: async ({ params }) => {
    const res = await fetch("/projects.json");
    const data = await res.json();
    const singleData = data.find((d) => d.id == params.id);
    return singleData;
  },
},

   
    ],
  },
  
  // {
  //   path: "*",
  //   element: <ErrorPage></ErrorPage>
  // },
]);

export default router;
