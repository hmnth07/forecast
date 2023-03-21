import React from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

function LocationCard(props) {
	return (
		<div className="locationCard">
			<div>
				<FmdGoodOutlinedIcon />
				<p>{props?.city?.name}</p>
			</div>
			<p>34°/21°</p>
		</div>
	);
}

export default LocationCard;
