import React, { useEffect, Fragment } from "react"
import PropTypes from "prop-types"
import Spinner from "../layout/spinner"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import Repos from "../repos/Repos"

const User = ({ user, loading, getUser, getUserRepos, repos, match }) => {
	useEffect(() => {
		getUser(match.params.login)
		getUserRepos(match.params.login)
		// eslint-disable-next-line
	}, [])

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
	} = user

	if (loading) return <Spinner />

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
				<div className='badge badge-light'>Public Repos: {public_repos}</div>
				<div className='badge badge-dark'>Public Gists: {public_gists}</div>
			</div>
			<Repos repos={repos} />
		</Fragment>
	)
}

User.propTypes = {
	loading: PropTypes.bool,
	user: PropTypes.object.isRequired,
	getUser: PropTypes.func.isRequired,
	repos: PropTypes.array.isRequired,
	getUserRepos: PropTypes.func.isRequired
}

export default User
