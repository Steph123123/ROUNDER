import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Profile } from "./pages/profile";
import { Circuit } from "./pages/circuit";
import { Contact } from "./pages/contact";
import { Aboutus } from "./pages/aboutus";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
					<Route exact path="/">
							<Home />
							
						</Route>
						<Route exact path="/aboutus">
							<Aboutus />
							
						</Route>
						<Route exact path="/contact">
							<Contact />
							
						</Route>
						<Route exact path="/login">
							<Login />							
						</Route>
						<Route exact path="/profile">
							<Profile/>
						</Route>
						<Route exact path="/register">
							<Register />							
						</Route>
						<Route exact path="/circuit/:circuitid">
							<Circuit />
							
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
