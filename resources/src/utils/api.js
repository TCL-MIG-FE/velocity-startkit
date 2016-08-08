import $ from "jquery";
import * as API from "../constants/api";

const checkRespStatus = (res) => {
    if (res.code !== 200) {
        let deferred = $.Deferred();
        deferred.reject('Server error occurred');
        return deferred.promise();
    }
    let deferred = $.Deferred();
    if (res && res.code == API['CODE_SUCCESS']) {
        deferred.resolve(res.data);
    } else {
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
    
    getConfig: () => get(API.GET_CONFIG)
}
