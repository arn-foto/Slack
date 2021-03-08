import "../src/Css/App.css";
import React from "react";
import Header from "../src/Components/Header";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<Header />
					<AppBody>
						<Switch>
							<Route path="/" exact></Route>
						</Switch>
					</AppBody>
				</div>
			</Router>
		</div>
	);
}

export default App;

const AppBody = styled.div``;
