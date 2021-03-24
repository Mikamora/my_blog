import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Compose from "./views/Compose"
import Details from "./views/Details"
import Navbar from "./component/Navdar"
import Admin from "./views/Admin";

const App: React.FC<AppProps> = props => { // we could also strong code it like props: AppProps where props is initialized; with function wrapper gives me a children option
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/compose">
					<Compose />
				</Route>
				<Route exact path="/details/:id">
					<Details />
				</Route>
				<Route exact path="/admin/:id">
					<Admin />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

interface AppProps { }

export default App;