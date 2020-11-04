import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchTeams } from '../store/actions';

const TeamsList = (props) => {
	useEffect(() => {
		props.fetchTeams();
	}, []);

	return (
		<div>
			<h2>NBA Teams</h2>
			{props.isLoading ? <p>Loading teams...</p> : null}
			{props.error ? <p>{props.error}</p> : null}
			{props.teams.map((team) => {
				return <p>{team.name}</p>;
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isLoading: state.isLoading,
		teams: state.teams,
		error: state.error,
	};
};

export default connect(mapStateToProps, { fetchTeams })(TeamsList);
