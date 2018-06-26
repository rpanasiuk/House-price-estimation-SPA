import { FETCH_NN } from '../actions/action_fnn.jsx';

export default function(state=[], action) {
	switch (action.type) {
		case FETCH_NN:
			return action.payload.data;
	}
	return state;
}