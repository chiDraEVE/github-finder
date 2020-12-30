import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/layout/Navbar"
import Alert from "./components/layout/Alert"
import About from "./components/pages/About"
import User from "./components/users/User"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"

import GithubState from "./context/github/GithubState"
import AlertState from "./context/alert/AlertState"
import Home from "./components/pages/Home"
import NotFound from "./components/pages/NotFound"

library.add(fab, fas)

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className='App'>
						<nav className='navbar bg-primary'>
							<Navbar title='Github Finder' />
						</nav>
						<div className='container'>
							<Alert />
							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/about' component={About} />
								<Route exact path='/user/:login' component={User} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	)
}

export default App
