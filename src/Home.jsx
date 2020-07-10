import React from 'react';
import web from "../src/images/sws.svg";
import { NavLink } from "react-router-dom";
import Common from "./Common.jsx";



const Home = () => {
	return(
		<>
		<Common 
		name='Grow Your Buisness with' 
		imgsrc={web} 
		visit="/service" 
		btname= "Get Started" />
		</>

		);
};

export default Home;