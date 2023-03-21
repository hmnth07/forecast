import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import windy from "../assets/windy.svg";

import {
	sunny,
	partlyCloudy,
	cloudy,
	rainy,
	snow,
	stormy,
	thunder,
} from "../assets/index";

function Dashboard() {
	const [liveWeather, setLiveWeather] = useState({});
	useEffect(() => {
		const getData = async () => {
			const response = await axios.get(
				`https://hiring-test.a2dweb.com/live-weather/63907bd6f03239954700993f`,
				{
					headers: {
						// authorization: `Bearer ${localStorage.getItem("accessToken")}`,
						authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmciOiJhMmQiLCJ1c2VySWQiOiI2MzRmOGM1ZWYxNTVlMjMyYzU1NzVmZDEiLCJhcHAiOiJ3ZWF0aGVyIiwiZGV2Ijoic3VtYW4iLCJpYXQiOjE2NjYxNjIzNDZ9.Ptma5JeNRuRhjtiVQOGun4qpWng-_9q5WjcNmch_AlM`,
					},
				}
			);
			setLiveWeather(response?.data?.data);
		};

		getData();
	}, []);

	const imageMap = new Map([
		["Cloudy", sunny],
		["Partly Cloudy", partlyCloudy],
		["Cloudy", cloudy],
		["Rainy", rainy],
		["Snow", snow],
		["Stormy", stormy],
		["Thunder", thunder],
	]);

	const imageToRender = imageMap.get(liveWeather?.condition);
	return (
		<div className="dashboard">
			<div className="dashboard__cloud">
				{imageToRender && <img src={imageToRender} alt={imageToRender} />}
			</div>

			<div className="liveWeather">
				<p className="liveWeather__today">Today, 02:15 AM</p>
				<p className="liveWeather__temperature">{liveWeather?.temperature}°C</p>
				<p className="liveWeather__condition">{liveWeather?.condition}</p>

				<ul>
					<li>
						<div>
							<img src={windy} alt="windy" />
							<span>time</span>
						</div>
						<span>{liveWeather?.date}</span>
					</li>
					<li>
						<div>
							<img src={windy} alt="windy" />
							<span>Temperature</span>
						</div>
						<span>{liveWeather?.temperature}°C</span>
					</li>
					<li>
						<div>
							<img src={windy} alt="windy" />
							<span>maxTemperature</span>
						</div>
						<span>{liveWeather?.maxTemperature}°C</span>
					</li>
					<li>
						<div>
							<img src={windy} alt="windy" />
							<span>minTemperature</span>
						</div>
						<span>{liveWeather?.minTemperature}°C</span>
					</li>
					<li>
						<div>
							<img src={windy} alt="windy" />
							<span>Condition</span>
						</div>
						<span>{liveWeather?.condition}</span>
					</li>
					<li>
						<div>
							<img src={windy} alt="windy" />
							<span>WindSpeed</span>
						</div>
						<span>{liveWeather?.windSpeed}Km/h</span>
					</li>
					<li>
						<div>
							<img src={windy} alt="windy" />
							<span>Humidity</span>
						</div>
						<span>{liveWeather?.humidity}%</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Dashboard;
