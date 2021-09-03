import { SET_CONTEXT } from '../../utils/consts';

const initialState = {
	data: {},
};

export const contextReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CONTEXT:
			return { ...state, data: action.payload };

		default:
			return state;
	}
};
