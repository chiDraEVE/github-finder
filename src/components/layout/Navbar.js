import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

class Navbar extends Component {
	static defaultProps = {
		title: "Github Finder",
		icon: faGithub
	}

	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.object.isRequired
	}

	render() {
		return (
			<div>
				<h1>
					<FontAwesomeIcon icon={this.props.icon} /> {this.props.title}
				</h1>
			</div>
		)
	}
}

export default Navbar
