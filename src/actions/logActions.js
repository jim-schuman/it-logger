import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LOG
} from "./types";

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

export const addLog = (log) => async dispatch =>{

    try {

        setLoading();

        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        //console.log(res.data);
        const data = await res.json();
        //console.log(data);

        dispatch({
            type: ADD_LOG,
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

export const deleteLog = (id) => async dispatch =>{

    try {

        setLoading();

        await fetch(`/logs/${id}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_LOG,
            payload: id
        });

    } catch(error) {
        //console.log(error);
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }
};

export const updateLog = log => async dispatch =>{

    try {

        setLoading();

        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: UPDATE_LOG,
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

export const setCurrent = log => {

    return {
        type: SET_CURRENT,
        payload: log
    }
}

export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};
