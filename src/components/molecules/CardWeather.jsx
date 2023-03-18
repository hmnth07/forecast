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
function CardWeather() {
	return (
		<div className="cardWeather">
			<p>24°C</p>
			<img src={thunder} alt="partly cloudy" />
			<p>15:00</p>
		</div>
	);
}

export default CardWeather;
