import React, { useContext } from 'react';
import {AppContext} from "../components/context/AppContext";
import axios from 'axios';
import config from "../../config/config"

export async function get(path, requestConfig){
    const context = useContext(AppContext);
    requestConfig.headers = requestConfig.headers ? {
        ...requestConfig.headers,
        Authorization: "Bearer " + context.token
    } : {
        Authorization: "Bearer " + context.token
    };
    await axios.get(config.baseUrl+path, requestConfig);
}

export async function post(path, data, req){
    const context = useContext(AppContext);

}

export async function put(path){
    const context = useContext(AppContext);

}

export async function deleteRequest(path){
    const context = useContext(AppContext);

}