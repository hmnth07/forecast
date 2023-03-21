import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import dashboardMenuIcon from "../assets/dashboardMenuIcon.svg";
import forecastMenuIcon from "../assets/forecastMenuIcon.svg";
import handImage from "../assets/hand.svg";

function Sidebar() {
	const stripePaymentPage = () => {
		window
			.open("https://buy.stripe.com/test_5kA9BS8Lz7gEgogbII", "_blank")
			.focus();
	};

	return (
		<div className="sideBar">
			<div>
				<div className="logo">
					<img src={logo} alt="logo" />
					<span>Forecasting</span>
				</div>
				<p className="mainText">Main</p>
				<nav>
					<Link to="/">
						<img src={dashboardMenuIcon} alt="dashboard" />
						<p>Dashboard</p>
					</Link>
					<Link to="forecastReport">
						<img src={forecastMenuIcon} alt="forecast" />
						<p>Forecast Report</p>
					</Link>
				</nav>
			</div>

			<div className="ad">
				<img src={handImage} alt="mbile-hand" />
				<button onClick={stripePaymentPage}>Upgrade to Pro</button>
			</div>
		</div>
	);
}

export default Sidebar;
