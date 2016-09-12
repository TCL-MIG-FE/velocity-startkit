import $ from '../modules/jquery';
import * as API from "../constants/api";
import Dialog from '../modules/dialog';

const checkRespStatus = (res) => {
    let deferred = $.Deferred();
    if (  res.code == API['CODE_SUCCESS']) {
        deferred.resolve(res.data);
    } else {
        Dialog.error(res.msg || 'Server error found...');
        deferred.reject(res);
    }
    return deferred.promise();
};

const get = (url, params)=> {
    return $.getJSON(url, params).then(checkRespStatus);
};

const post = (url, params)=> {
    return $.ajax({
        url: url,
        data: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json'
        },
        dataType: 'json',
        processData: false,
        method: 'POST'
    }).then(checkRespStatus)
};

const postWithForm = (url, params)=> {
    return $.post(url, params, null, 'json').then(checkRespStatus)
};


export default {
    
    login: params => post(API.USER_LOGIN, params),
    
    getConfig: () => get(API.GET_CONFIG)
}
