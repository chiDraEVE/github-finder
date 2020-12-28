import React, { Component } from "react"
import "./App.css"
import Navbar from "./components/layout/Navbar"

class App extends Component {
	render() {
		return (
			<nav className='navbar bg-primary'>
				<Navbar title='Github Finder' />
			</nav>
		)
	}
}

export default App
