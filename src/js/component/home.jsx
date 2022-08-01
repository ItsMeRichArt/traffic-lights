import React, { useState } from "react";

const Home = () => {

	const [color, setColor] = useState("")

	return (
		<div className="d-flex justify-content-center">
			<div id="traffic_container">
				<div className = {`red_light ${"red_light" == color ? "active" : ""}`} 
					onClick={() => setColor("red_light")}></div>
				<div className = {`yellow_light ${"yellow_light" == color ? "active" : ""}`} 
					onClick={() => setColor("yellow_light")}></div>
				<div className = {`green_light ${"green_light" == color ? "active" : ""}`} 
					onClick={() => setColor("green_light")}></div>
			</div>
		</div>
	);
};

export default Home;
