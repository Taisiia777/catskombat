import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Mainscreen from "pages/Mainscreen";
import Dailycode from "pages/Dailycode";
import Mine from "pages/Mine";
// import MinePRTeamBuycard from "pages/MinePRTeamBuycard";
// import MineSpecials from "pages/MineSpecials";
// import MineSpecialsBuycardTwo from "pages/MineSpecialsBuycardTwo";
// import NewCEX from "pages/NewCEX";
// import MineSpecialsBuycardThree from "pages/MineSpecialsBuycardThree";
// import MineSpecialsBuycardFour from "pages/MineSpecialsBuycardFour";
// import MineSpecialsBuycardFive from "pages/MineSpecialsBuycardFive";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> }, 
    { path: "*", element: <NotFound /> },
    { path: "mainscreen", element: <Mainscreen /> },
    { path: "dailycode", element: <Dailycode /> },
    { path: "mine", element: <Mine /> },
    // { path: "mineprteambuycard", element: <MinePRTeamBuycard /> },
    // { path: "minespecials", element: <MineSpecials /> },
    // { path: "minespecialsbuycardtwo", element: <MineSpecialsBuycardTwo /> },
    // { path: "newcex", element: <NewCEX /> },
    // { path: "minespecialsbuycardthree", element: <MineSpecialsBuycardThree /> },
    // { path: "minespecialsbuycardfour", element: <MineSpecialsBuycardFour /> },
    // { path: "minespecialsbuycardfive", element: <MineSpecialsBuycardFive /> },
  ]);

  return element;
};

export default ProjectRoutes;
