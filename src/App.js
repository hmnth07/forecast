import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ForecastReport from "./components/ForecastReport";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
	return (
		<div className="App">
			<Sidebar />
			<section className="main">
				<Topbar />
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="forecastReport" element={<ForecastReport />} />
				</Routes>
			</section>
		</div>
	);
}

export default App;
