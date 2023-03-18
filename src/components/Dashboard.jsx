import React from "react";
import partlyCloudy from "../assets/sunnyCloudy.svg";
import windy from "../assets/windy.svg";

function Dashboard() {
	return (
		<div className="dashboard">
			<div className="dashboard__cloud">
				<img src={partlyCloudy} alt="partly cloudy" />
			</div>

			<div className="liveWeather">
				<p className="liveWeather__today">Today, 02:15 AM</p>
				<p className="liveWeather__temperature">29°</p>
				<p className="liveWeather__condition">Cloudy</p>

				<ul>
					<li>
						<div>
							<img src={windy} alt="windy" />
							<span>time</span>
						</div>
						<span>8:30 PM</span>
					</li>
					<li>
						<div>
							<img src={windy} alt="windy" />
							<span>Temperature</span>
						</div>
						<span>45°</span>
					</li>
					<li>
						<div>
							<img src={windy} alt="windy" />
							<span>maxTemperature</span>
						</div>
						<span>2°</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Dashboard;
