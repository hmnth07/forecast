import React from "react";
import logo from "../assets/logo.svg";
import dashboardMenuIcon from "../assets/dashboardMenuIcon.svg";
import forecastMenuIcon from "../assets/forecastMenuIcon.svg";
import handImage from "../assets/hand.svg";

function Sidebar() {
	return (
		<div className="sideBar">
			<div>
				<div className="logo">
					<img src={logo} alt="logo" />
					<span>Forecasting</span>
				</div>
				<p className="mainText">Main</p>
				<nav>
					<a href="# ">
						<img src={dashboardMenuIcon} alt="dashboard" />
						<p>Dashboard</p>
					</a>
					<a href="# ">
						<img src={forecastMenuIcon} alt="dashboard" />
						<p>Forecast Report</p>
					</a>
				</nav>
			</div>

			<div className="ad">
				<img src={handImage} alt="mbile-hand" />
				<button>Upgrade to Pro</button>
			</div>
		</div>
	);
}

export default Sidebar;
