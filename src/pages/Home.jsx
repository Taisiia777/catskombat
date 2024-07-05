import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/mainscreen" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Mainscreen
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/dailycode" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Dailycode
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/mine" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Mine
          </Link>
        </li>
        {/* <li style={{ marginBottom: "10px" }}>
          <Link to="/mineprteambuycard" style={{ color: "#87CEFA", textDecoration: "none" }}>
            MinePRTeamBuycard
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/minespecials" style={{ color: "#87CEFA", textDecoration: "none" }}>
            MineSpecials
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/minespecialsbuycardtwo" style={{ color: "#87CEFA", textDecoration: "none" }}>
            MineSpecialsBuycardTwo
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/newcex" style={{ color: "#87CEFA", textDecoration: "none" }}>
            NewCEX
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/minespecialsbuycardthree" style={{ color: "#87CEFA", textDecoration: "none" }}>
            MineSpecialsBuycardThree
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/minespecialsbuycardfour" style={{ color: "#87CEFA", textDecoration: "none" }}>
            MineSpecialsBuycardFour
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/minespecialsbuycardfive" style={{ color: "#87CEFA", textDecoration: "none" }}>
            MineSpecialsBuycardFive
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Home;
