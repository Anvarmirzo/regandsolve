import { SET_CONTEXT } from '../../utils/consts';

export const setContext = (data) => {
	if (data) {
		return { type: SET_CONTEXT, payload: data };
	} else {
		return { type: '@@INIT' };
	}
};
