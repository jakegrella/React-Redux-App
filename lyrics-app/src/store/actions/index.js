import axios from 'axios';

//action types
export const FETCH_TEAMS_START = 'FETCH_TEAMS_START';
export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS';
export const FETCH_TEAMS_FAILURE = 'FETCH_TEAMS_FAILURE';

export const fetchTeams = () => {
	return (dispatch) => {
		//async actions
		dispatch({ type: FETCH_TEAMS_START });

		//fetch data
		axios
			.get('https://www.balldontlie.io/api/v1/teams')
			.then((res) => {
				dispatch({ type: FETCH_TEAMS_SUCCESS, payload: res.data.data });
			})
			.catch((err) => {
				dispatch({ type: FETCH_TEAMS_FAILURE, payload: err.message });
			});
	};
};
