import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import  Services from './Services';
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
const App = () => {
	return(
		<>
		<Navbar />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route exact path="/service" component={Services} />
			<Route exact path="/contact" component={Contact} />
			<Redirect to ="/" />
		</Switch>
		<Footer/>
		</>

		);
};

export default App;