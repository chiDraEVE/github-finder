import React, { useState, Fragment } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/layout/Navbar"
import Users from "./components/users/Users"
import Search from "./components/users/Search"
import Alert from "./components/layout/Alert"
import About from "./components/pages/About"
import User from "./components/users/User"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"

import GithubState from "./context/github/GithubState"

library.add(fab, fas)

const App = () => {
	const [alert, setAlert] = useState(null)

	// Set Alert
	const showAlert = (msg, type) => {
		setAlert({ msg, type })
		setTimeout(() => setAlert(null), 5000)
	}

	return (
		<GithubState>
			<Router>
				<div className='App'>
					<nav className='navbar bg-primary'>
						<Navbar title='Github Finder' />
					</nav>
					<div className='container'>
						<Alert alert={alert} />
						<Switch>
							<Route
								exact
								path='/'
								render={() => (
									<Fragment>
										<Search setAlert={showAlert} />
										<Users />
									</Fragment>
								)}
							/>
							<Route exact path='/about' component={About} />
							<Route exact path='/user/:login' component={User} />
						</Switch>
					</div>
				</div>
			</Router>
		</GithubState>
	)
}

export default App
