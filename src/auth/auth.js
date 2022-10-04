import axios from 'axios';
import FormData from 'form-data';

var bodyFormData = new FormData();

bodyFormData.append('grant_type', 'client_credentials')
bodyFormData.append('client_id', '154328ed-40fc-4207-bbcc-76377787d72c')
bodyFormData.append('client_secret', 'c9DKJwPJol7sBeOiHTPT74RlOWXsC82evaqLBcyriOAGCM2tHlkJPWcRhD3NGVPVF5C3yBlDq4lYmbiGbNIB3C')
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