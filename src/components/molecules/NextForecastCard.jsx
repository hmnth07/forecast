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

function NextForecastCard() {
	return (
		<div className="nextForecastCard">
			<p>Sep, 13</p>
			<div>
				<img src={thunder} alt="partly cloudy" />
				<p className="nextForecastCard--light">24°C</p>
			</div>
		</div>
	);
}

export default NextForecastCard;
