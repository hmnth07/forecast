import React from "react";
import { ScaleLoader } from "react-spinners";

function Spinner() {
	return (
		<div className="spinner">
			<ScaleLoader color={"#36D7B7"} loading={true} size={150} />
		</div>
	);
}

export default Spinner;
