import React from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

function LocationCard() {
	return (
		<div className="locationCard">
			<div>
				<FmdGoodOutlinedIcon />
				<p>Bangalore</p>
			</div>
			<p>34°/21°</p>
		</div>
	);
}

export default LocationCard;
