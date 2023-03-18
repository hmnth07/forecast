import "./App.css";
import Dashboard from "./components/Dashboard";
import ForecastReport from "./components/ForecastReport";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
	return (
		<div className="App">
			{/* SideBar */}
			<Sidebar />

			<section className="main">
				<Topbar />
				{/* <Dashboard /> */}
				<ForecastReport />
			</section>
		</div>
	);
}

export default App;
