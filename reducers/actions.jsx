export const SET_TOKEN = 'SET_TOKEN'
export const SET_CLIENT_ID = 'SET_CLIENT_ID';

export const setToken = token => dispatch => {
  dispatch({
    type: SET_TOKEN,
    payload: token
  });
};

export const setClientId = (clientId) => ({
  type: SET_CLIENT_ID,
  payload: clientId
});
