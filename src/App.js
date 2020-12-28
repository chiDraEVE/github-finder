import React, { Component } from "react"
import "./App.css"
import Navbar from "./components/layout/Navbar"
import UserItem from "./components/users/UserItem"

class App extends Component {
	render() {
		return (
			<div className='App'>
				<nav className='navbar bg-primary'>
					<Navbar title='Github Finder' />
				</nav>
				<UserItem />
			</div>
		)
	}
}

export default App
