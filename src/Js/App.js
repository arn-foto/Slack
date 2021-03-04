import "../Css/App.css";
import React from "react";
import Header from "../Js/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<Switch>
						<Route path="/" exact>
							<Header />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
