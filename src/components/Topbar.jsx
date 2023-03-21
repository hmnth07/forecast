import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import profileLogout from "../assets/Profile.svg";

import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import LocationCard from "./molecules/LocationCard";

function Topbar() {
	// Location dropdown MUI logic
	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleCloseDropdown = () => {
		setAnchorEl(null);
	};
	const openDropdown = Boolean(anchorEl);
	const id = openDropdown ? "simple-popover" : undefined;

	// logout dialog MUI logic
	const [open, setOpen] = React.useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const [cityList, setCityList] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const response = await axios.get(
				`https://hiring-test.a2dweb.com/city-list?page=1&limit=7`,
				{
					headers: {
						// authorization: `Bearer ${localStorage.getItem("accessToken")}`,
						authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmciOiJhMmQiLCJ1c2VySWQiOiI2MzRmOGM1ZWYxNTVlMjMyYzU1NzVmZDEiLCJhcHAiOiJ3ZWF0aGVyIiwiZGV2Ijoic3VtYW4iLCJpYXQiOjE2NjYxNjIzNDZ9.Ptma5JeNRuRhjtiVQOGun4qpWng-_9q5WjcNmch_AlM`,
					},
				}
			);
			setCityList(response?.data?.list);
		};

		getData();
	}, []);

	return (
		<div className="topBar">
			<MenuOutlinedIcon />
			<div className="topBar__right">
				{/* location selection */}
				<div className="location" onClick={handleClick}>
					<FmdGoodOutlinedIcon />
					<p>Semarang</p>
					<ExpandMoreOutlinedIcon />
				</div>

				<Popover
					id={id}
					open={openDropdown}
					anchorEl={anchorEl}
					onClose={handleCloseDropdown}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "center",
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "center",
					}}
					style={{
						marginTop: "22px",
						// background: "#FCFCFC",
						borderRadius: "50px",
					}}
				>
					<div className="locationDropdown">
						{/* search bar */}
						<Paper
							component="form"
							sx={{
								p: "2px 4px",
								display: "flex",
								alignItems: "center",
								width: "100%",
							}}
						>
							<IconButton sx={{ p: "10px" }} aria-label="menu">
								<ArrowBackIcon />
							</IconButton>
							<InputBase
								sx={{ ml: 1, flex: 1 }}
								placeholder="Search here"
								inputProps={{ "aria-label": "search google maps" }}
							/>
							<IconButton type="button" sx={{ p: "10px" }} aria-label="search">
								<SearchIcon />
							</IconButton>
						</Paper>
						{cityList?.map((city) => (
							<LocationCard key={city?._id} city={city} />
						))}

						{/* <LocationCard city={city} />
						<LocationCard />
						<LocationCard />
						<LocationCard /> */}
					</div>
				</Popover>

				{/* Logout */}
				<img
					onClick={handleClickOpen}
					className="logout"
					src={profileLogout}
					alt="logout"
				/>
			</div>

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				className="logoutDialog"
				PaperProps={{
					style: {
						boxShadow: "none",
						borderRadius: "30px",
						textAlign: "center",
						padding: "32px",
						color: "#6b6a71",
					},
				}}
			>
				<img src={profileLogout} alt="" />
				<p className="logoutText">Log out</p>
				<p>Are you sure you want to logout from app</p>

				<div className="logoutActions">
					<Button
						onClick={handleClose}
						autoFocus
						disableRipple
						sx={{
							textTransform: "none",
							fontWeight: "700",
							fontSize: "18px",
							padding: "16px",
							width: "45%",
							background: "#FF6D6D",
							borderRadius: "15px ",
							color: "white",
							"&:hover": {
								backgroundColor: "red",
							},
						}}
					>
						Logout
					</Button>
					<Button
						disableRipple
						onClick={handleClose}
						sx={{
							textTransform: "none",
							fontWeight: "700",
							fontSize: "18px",
							padding: "16px",
							width: "45%",
							background: "#F1EFEF",

							borderRadius: "15px ",
							color: "#080713",
							"&:hover": {
								background:
									"linear-gradient(192.05deg, #47BFDF 0%, #4A91FF 100%)",
								color: "white",
							},
						}}
					>
						Cancel
					</Button>
				</div>
			</Dialog>
		</div>
	);
}

export default Topbar;
