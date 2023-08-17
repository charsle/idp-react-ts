import {
    createBrowserRouter,
    RouteObject
} from "react-router-dom";
import About from '@/pages/About.tsx'
import Home from '@/pages/Home.tsx'
import Login from '@/pages/Login.tsx'
import MainLayout from '@/layout/index'


const routers:RouteObject[] = [{
    path: "/",
    element: <MainLayout/>,
    children:[{
      index: true,
      // path: "/home",
      element: <Home/>
    },{
      path: "about",
      element: <About/>
    }]
},
{
  path: "/login",
  element: <Login/>
},

];



const router = createBrowserRouter(routers,{basename:'/'});

export default router;