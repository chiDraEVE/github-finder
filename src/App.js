import React, { Component } from "react"
import "./App.css"
import Navbar from "./components/layout/Navbar"
import Users from "./components/users/Users"

class App extends Component {
	render() {
		return (
			<div className='App'>
				<nav className='navbar bg-primary'>
					<Navbar title='Github Finder' />
				</nav>
				<Users />
			</div>
		)
	}
}

export default App
