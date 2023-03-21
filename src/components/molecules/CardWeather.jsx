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
function CardWeather({ item }) {
	const imageMap = new Map([
		["Cloudy", sunny],
		["Partly Cloudy", partlyCloudy],
		["Cloudy", cloudy],
		["Rainy", rainy],
		["Snow", snow],
		["Stormy", stormy],
		["Thunder", thunder],
	]);

	const imageToRender = imageMap.get(item?.condition);

	return (
		<div className="cardWeather">
			<p>{item?.temperature}°C</p>
			<img src={imageToRender} alt="partly cloudy" />
			<p>{item?.time}</p>
		</div>
	);
}

export default CardWeather;
