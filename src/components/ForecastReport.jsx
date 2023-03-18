import React from "react";
import CardWeather from "./molecules/CardWeather";
import NextForecastCard from "./molecules/NextForecastCard";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";

function ForecastReport() {
	return (
		<div className="forecast">
			<section>
				<h1>Today Sep 12</h1>

				{/* forecast cards for times */}
				<div className="todayForecast__cards">
					<CardWeather />
					<CardWeather />
					<CardWeather />
					<CardWeather />
					<CardWeather />
					<CardWeather />
					<CardWeather />
					<CardWeather />
					<CardWeather />
					<CardWeather />
				</div>
			</section>

			<section>
				<div className="forecast--heading">
					<h1>Next Forecast</h1>
					<TodayOutlinedIcon />
				</div>

				<div className="nextForecast__cards">
					<NextForecastCard />
					<NextForecastCard />
					<NextForecastCard />
					<NextForecastCard />
					<NextForecastCard />
					<NextForecastCard />
					<NextForecastCard />
				</div>
			</section>
		</div>
	);
}

export default ForecastReport;
