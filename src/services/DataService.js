import axios from 'axios';
import moment from 'moment';

const server_url = 'https://xpediolive.com/server_api';
// const server_url = 'http://xpediolive.com:5660/server_api';
// const server_url = 'http://localhost:5660/server_api';
const default_project_id = 'xpedio-insure';
const default_client_id = '83d48f16-c6e8-4913-824a-7f90ab38a761';

export async function callServerApi(api_name, data_jo, clause_jo, project_id, client_id) {
    let payload = {
        'api': api_name,
        'data': data_jo,
        'clause': clause_jo
    }
    if (!project_id)
        payload.project_id = default_project_id;
    else
        payload.project_id = project_id
    if (!client_id)
        payload.client_id = default_client_id;
    else
        payload.client_id = client_id;

    console.log(payload)
    let res;
    res = await axios.post(server_url, payload);
    return res.data;
}

export async function callCustomServerApi(api_name, data_jo, clause_jo, v_cdm_name) {
    let payload = {
        'api': api_name,
        'cdm_name': v_cdm_name,
        'data': data_jo,
        'clause': clause_jo
    }
    let res;
    res = await axios.post('http://xpediolive.com:5660/custom-api-life', payload);
    return res.data;
}


export function getBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        }
        fileReader.onerror = (err) => {
            reject(err);
        }
    })
}

export async function uploadFile(formdata) {
    const res = await fetch('http://xpediolive.com:5703/upload-life', {
        method: "POST",
        body: formdata
    });
    return res.json();
}

export function updateAudit(rec, acc) {
    let audit = [];
    if (Object.keys(rec).includes('audit_info')) {
        audit = rec.audit_info;
    }
    audit.push({
        author: acc.first_name + ' ' + acc.last_name,
        phone: acc.phone,
        audit_date: moment().format('YYYY-MM-DD HH:mm')
    })
    return audit;
}

