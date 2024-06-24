import Layout from "./components/Layout/layout";
import Bag from "./views/pages/bag/Bag";

import Home from "./views/pages/home/Home";

const routers = [
  
  {
    title: "Home",
    path: "/Home",
    component: Home,
    layout: Layout,
    exact: true,
  },
  {
    title: "Bag",
    path: "/Bag",
    component: Bag,
    layout: Layout,
    exact: true,
  },
  
];

export { routers };