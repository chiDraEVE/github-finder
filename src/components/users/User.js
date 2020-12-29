import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import Spinner from "../layout/spinner"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTimesCircle } from "@fortawesome/free-solid-svg-icons"

class User extends Component {
	componentDidMount() {
		this.props.getUser(this.props.match.params.login)
	}

	static propTypes = {
		loading: PropTypes.bool,
		user: PropTypes.object.isRequired,
		getUser: PropTypes.func.isRequired
	}

	render() {
		const {
			name,
			avatar_url,
			location,
			bio,
			login,
			html_url,
			blog,
			followers,
			following,
			public_gists,
			public_repos,
			hireable,
			company
		} = this.props.user
		const { loading } = this.props

		if (loading) return <Spinner />
		else {
			return (
				<Fragment>
					<Link to='/' className='btn btn-light'>
						Back to Search
					</Link>
					Hireable:{" "}
					{hireable ? (
						<FontAwesomeIcon icon={faCheck} className='text-succes' />
					) : (
						<FontAwesomeIcon icon={faTimesCircle} className='text-danger' />
					)}
					<div className='card grid-2'>
						<div className='all-center'>
							<img
								src={avatar_url}
								alt=''
								className='round-img'
								style={{ width: "150px" }}
							/>
							<h1>{name}</h1>
							<p>Location: {location}</p>
						</div>
						<div>
							{bio && (
								<Fragment>
									<h3>Bio</h3>
									<p>{bio}</p>
								</Fragment>
							)}
							<a href={html_url} className='btn btn-dark my-1'>
								Visit Github Profile
							</a>
							<ul>
								<li>
									{login && (
										<Fragment>
											<strong>Username:</strong> {login}
										</Fragment>
									)}
								</li>
								<li>
									{company && (
										<Fragment>
											<strong>Company:</strong> {company}
										</Fragment>
									)}
								</li>
								<li>
									{blog && (
										<Fragment>
											<strong>Website:</strong> <Link to={blog}>{blog}</Link>
										</Fragment>
									)}
								</li>
							</ul>
						</div>
					</div>
					<div className='card text-center'>
						<div className='badge badge-primary'>Followers: {followers}</div>
						<div className='badge badge-success'>Following: {following}</div>
						<div className='badge badge-light'>
							Public Repos: {public_repos}
						</div>
						<div className='badge badge-dark'>Public Gists: {public_gists}</div>
					</div>
				</Fragment>
			)
		}
	}
}

export default User
