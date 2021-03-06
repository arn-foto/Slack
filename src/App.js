import "../src/Css/App.css";
import React from "react";
import Header from "../src/Components/Header";
import Sidebar from "../src/Components/Sidebar";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Components/Chat";

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<Header />
					<AppBody>
						<Sidebar />
						<Switch>
							<Route path="/" exact>
								<Chat />
							</Route>
						</Switch>
					</AppBody>
				</div>
			</Router>
		</div>
	);
}

export default App;

const AppBody = styled.div`
	display: flex;
	height: 100vh;
`;
