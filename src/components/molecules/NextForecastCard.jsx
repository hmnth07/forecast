import React from "react";
import {
	sunny,
	partlyCloudy,
	cloudy,
	rainy,
	snow,
	stormy,
	thunder,
} from "../../assets/index";

function NextForecastCard({ obj, day }) {
	// const date = new Date();
	// let today = date.getDate();
	const imageMap = new Map([
		["Cloudy", sunny],
		["Partly Cloudy", partlyCloudy],
		["Cloudy", cloudy],
		["Rainy", rainy],
		["Snow", snow],
		["Stormy", stormy],
		["Thunder", thunder],
	]);

	const imageToRender = imageMap.get(obj?.condition);
	return (
		<div className="nextForecastCard">
			<p>Sep, {13 + day}</p>
			<div>
				<img src={imageToRender} alt="partly cloudy" />
				<p className="nextForecastCard--light">{obj?.temperature}°C</p>
			</div>
		</div>
	);
}

export default NextForecastCard;
