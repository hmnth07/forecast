import React, { useEffect, useState } from "react";
import axios from "axios";
import CardWeather from "./molecules/CardWeather";
import NextForecastCard from "./molecules/NextForecastCard";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";

function ForecastReport() {
	const [todayWeather, setTodayWeather] = useState([]);
	const [otherDatesData, setOtherDatesData] = useState({});

	useEffect(() => {
		const getData = async () => {
			const todaysDataResponse = await axios.get(
				`https://hiring-test.a2dweb.com/view-small-forecast/63907bd6f03239954700993f`,
				{
					headers: {
						authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmciOiJhMmQiLCJ1c2VySWQiOiI2MzRmOGM1ZWYxNTVlMjMyYzU1NzVmZDEiLCJhcHAiOiJ3ZWF0aGVyIiwiZGV2Ijoic3VtYW4iLCJpYXQiOjE2NjYxNjIzNDZ9.Ptma5JeNRuRhjtiVQOGun4qpWng-_9q5WjcNmch_AlM`,
					},
				}
			);
			const otherDatesDataResponse = await axios.get(
				`https://hiring-test.a2dweb.com/view-other-forecast/63907bd6f03239954700993f`,
				{
					headers: {
						authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmciOiJhMmQiLCJ1c2VySWQiOiI2MzRmOGM1ZWYxNTVlMjMyYzU1NzVmZDEiLCJhcHAiOiJ3ZWF0aGVyIiwiZGV2Ijoic3VtYW4iLCJpYXQiOjE2NjYxNjIzNDZ9.Ptma5JeNRuRhjtiVQOGun4qpWng-_9q5WjcNmch_AlM`,
					},
				}
			);
			setTodayWeather(todaysDataResponse?.data?.DATA);
			setOtherDatesData(otherDatesDataResponse?.data?.DATA);
		};

		getData();
	}, []);
	return (
		<div className="forecast">
			<section>
				<h1>Today Sep 12</h1>

				{/* forecast cards for times */}
				<div className="todayForecast__cards">
					{todayWeather?.map((item) => (
						<CardWeather key={item._id} item={item} />
					))}
				</div>
			</section>

			<section>
				<div className="forecast--heading">
					<h1>Next Forecast</h1>
					<TodayOutlinedIcon />
				</div>

				<div className="nextForecast__cards">
					{Object.keys(otherDatesData).map((key, index) => {
						if (key !== "cityId") {
							return (
								<NextForecastCard
									key={key}
									obj={otherDatesData[key]}
									day={index}
								/>
							);
						}
						return null;
					})}
				</div>
			</section>
		</div>
	);
}

export default ForecastReport;
