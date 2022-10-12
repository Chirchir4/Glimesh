import axios from 'axios';
import FormData from 'form-data';
import config from '../constants/config';

var bodyFormData = new FormData();

bodyFormData.append('grant_type', config.grant_type)
bodyFormData.append('client_id', config.client_id)
bodyFormData.append('client_secret', config.client_secret)
const url = "https://glimesh.tv/api/oauth/token"
let options = {
    method: "POST",
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    data: bodyFormData,
    url
};
export const getToken = async () => {
    try {
        const { data } = await axios(options)
        return data;
    } catch (error) {
        return
    }
}