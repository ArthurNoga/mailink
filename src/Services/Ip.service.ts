import axios from "axios";
import {baseUrl} from "../config";

export interface IpModel {
    id: number,
    ip: string,
    network: Network,
    isAuth: boolean,

}

export interface Network {
    id: string,
    network: string,
    mask: string,
    isAuth: boolean,

}

export const getIp = async (ip: string) => {
    try {
        const {data} = await axios.get(baseUrl+`api/ip/?ip=${ip}`)

        return data[0]===undefined?null:data[0];
    } catch (e) {
        return null;
    }
}

export const ipStatus = async (ip: string) => {
    const {data} = await axios.get(baseUrl+`api/ping/?ip=${ip}`)
    return data;
}