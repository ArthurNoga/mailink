
import axios from "axios";
import {baseUrl} from "../config";


export interface Dnslookup {
    A: string;
    MX: string;
    NS: string;
    TXT: string;
    AAAA: string;
    CNAME: string;
    DMARC: string;
}
export interface WhoisModel {
    creation_date: string,
    dnssec: string,
    domain_name: string,
    name_servers: string,
    registrant_address: string,
    registrant_name: string,
    tech_c: string,

}

export const getDomain = async (domain: string) => {
    const {data} = await axios.get(baseUrl+`api/zone/?domain=${domain}`)
    let zoneDNS: Dnslookup = data;
    return zoneDNS;
}

export const getWhois = async (domain: string) => {
    const {data} = await axios.get(baseUrl+`api/whois/?domain=${domain}`)
    let whois:WhoisModel=data
    return whois;
}