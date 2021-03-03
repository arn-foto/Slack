import "../Css/App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<h1>Slack evil-clone</h1>
			<Router>
				<div>
					<Switch>
						<Route path="/">
							<h1>this is the landing page</h1>
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
