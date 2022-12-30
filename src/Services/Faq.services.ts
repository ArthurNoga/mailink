import axios from "axios";
import {baseUrl} from "../config";

export enum FaqType {MAIL="mail",
JESLASTIC = 'Jeslastic',
SWISSBACKUP = 'Swissbackup',
NEWSLETTER = 'Newsletter',
BILLETERIE = 'Billeterie',
PUBLICCLOUD = 'Publiccloud',
KDRIVE = 'Kdrive',
KCHAT = 'Kchat',
CALENDRIER = 'Calendrier',
VOD_AOD = 'VOD/AOD',
SERVERCLOUD = 'Servercloud',
DOMAINES = 'Domaines',
SSL = 'SSL',
WORKSPACE = 'Workspace',
}

export interface FaqModel {
    id: number,
    type: FaqType,
    subject: string,
    url: string,
}

export const getFaq = async (type?: FaqType) => {
    const {data} = await axios.get(baseUrl+`api/faq/?type=${type}`)
    let faq: FaqModel[] = data;
    return faq;
}