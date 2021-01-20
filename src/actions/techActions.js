import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR, GET_LOGS, LOGS_ERROR
} from './types';


//get techs from server
export const getTechs = () => async dispatch =>{

    try {

        setLoading();

        const res = await fetch('/techs');
        //console.log(res.data);
        const data = await res.json();
        //console.log(data);

        dispatch({
            type: GET_TECHS,
            payload: data
        });

    } catch(error) {
        //console.log(error);
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.statusText
        });
    }
};

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};