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
import Spinner from "./atoms/Spinner";

function Dashboard({ selectedCity }) {
	const [liveWeather, setLiveWeather] = useState({});
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	// 63907bd6f03239954700993f deafult id?
	const cityId = selectedCity?._id
		? selectedCity?._id
		: "63907bd6f03239954700993f";

	useEffect(() => {
		const getData = async () => {
			setIsLoading(true);
			try {
				const response = await axios.get(
					`https://hiring-test.a2dweb.com/live-weather/${cityId}`,
					{
						headers: {
							// authorization: `Bearer ${localStorage.getItem("accessToken")}`,
							authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmciOiJhMmQiLCJ1c2VySWQiOiI2MzRmOGM1ZWYxNTVlMjMyYzU1NzVmZDEiLCJhcHAiOiJ3ZWF0aGVyIiwiZGV2Ijoic3VtYW4iLCJpYXQiOjE2NjYxNjIzNDZ9.Ptma5JeNRuRhjtiVQOGun4qpWng-_9q5WjcNmch_AlM`,
						},
					}
				);
				console.log(response, "res");
				setLiveWeather(response?.data?.data);
				setError(false);
				setIsLoading(false);
			} catch (error) {
				setError(error.message);
				setIsLoading(false);
			}
		};

		getData();
	}, [cityId]);

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

	const now = new Date();
	const time = now.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
	});

	if (isLoading) {
		return <Spinner />;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}
	return (
		<div className="dashboard">
			<div className="dashboard__cloud">
				{imageToRender && <img src={imageToRender} alt={imageToRender} />}
			</div>

			<div className="liveWeather">
				<p className="liveWeather__today">Today, {time}</p>
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
