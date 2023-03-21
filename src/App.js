import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ForecastReport from "./components/ForecastReport";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
	const [selectedCity, setSelectedCity] = useState({});

	useEffect(() => {
		console.log(selectedCity, "selectedCity");
	}, [selectedCity]);

	return (
		<div className="App">
			<Sidebar />
			<section className="main">
				<Topbar setSelectedCity={setSelectedCity} selectedCity={selectedCity} />
				<Routes>
					<Route path="/" element={<Dashboard selectedCity={selectedCity} />} />
					<Route
						path="forecastReport"
						element={<ForecastReport selectedCity={selectedCity} />}
					/>
				</Routes>
			</section>
		</div>
	);
}

export default App;
