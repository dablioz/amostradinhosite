import { AuthGoogleContext } from "../../context/authGoogle";
import { useContext, useEffect, useState } from "react";
import { Button, ToggleButtonGroup, ToggleButton } from "@mui/material";

import { Link } from "react-router-dom"; 



import "./User.css"; 
  
function User() {

	// const Fuse = require('fuse.js')

	const { user, signOut } = useContext(AuthGoogleContext);

	const username = user.displayName || "User";
	const userImage = user.photoURL || "https://tinyurl.com/5kub7nce";

	return (
		<div id="userCont">
			<div id="usercard">
				<img
					id="userbg"
					src="https://i.ytimg.com/vi/SGQULVZ8lyk/maxresdefault.jpg?7857057827"
				/>

				<div id="user-data">

					<h2>{username}</h2>
					<Link to="/user/edit" id="linkUserImg">
						<img src={userImage} id="pfp" />
					</Link>

				</div>

			</div> 

			<div id="buttons">
				<Button id="sair" onClick={signOut} variant="outlined" color="error">
					Sair
				</Button>
			</div>
		</div >
	);

}
export default User;