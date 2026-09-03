import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import './App.css'
import About from './components/About'
import Facilities from './components/Facilities'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Stats from './components/Stats'
import WhyChoose from './components/WhyChoose'
import Academic from "./components/Academic";
import NewEvents from "./components/NewEvents";
import CTA from "./components/CTA";
import ContactUs from "./components/ContactUs";


function Home(){
  return(
    <>
     <NavBar/>
      <Hero/>
      <Stats/>
      <WhyChoose/>
      <Facilities/>
      <CTA/>
      <Footer/>
    </>
  )
}



function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },

   {
    path: "/about",
    element:<About/>
  },

  {
    path: "/academic",
    element:<Academic/>
  },

  {
    path: "/newEvents",
    element:<NewEvents/>
  },

  {
    path: "/ContactUs",
    element:<ContactUs/>
  },
]);

 return (
    <RouterProvider router={router} />
  );
}

export default App