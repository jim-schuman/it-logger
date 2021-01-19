import {GET_LOGS, SET_LOADING, LOGS_ERROR} from "./types";

export const getLogs = () => async dispatch =>{

    try {

        setLoading();

        const res = await fetch('/logs');
        //console.log(res.data);
        const data = await res.json();
        //console.log(data);

        dispatch({
            type: GET_LOGS,
            payload: data
        });

    } catch(error) {
        //console.log(error);
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }
};

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};
