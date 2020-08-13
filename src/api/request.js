import baseSetting from '@/setting.js'

/**
 * 
 * @param {String} url 路由地址
 * @param {Obeject} data 需要传递的参数
 */
export function postData(url = {}, data = {}) {
    // Default options are marked with *
    return fetch(baseSetting.LinkPath + url, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    })
        .then(response => response.json()) // parses response to JSONdwaddawddwaddwaddawdaw
}

/**
 * 
 * @param {String} url 路由地址
 * @param {Object} data 需要传递的参数
 */
export function getData(url = '', data = {}) {
    url += "?timeing=" + +new Date();
    for (let k in data) {
        url += `&${k}=${data[k]}`
    }
    console.log(baseSetting.LinkPath + url)
    // Default options are marked with *
    return fetch(baseSetting.LinkPath + url, {
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    })
        .then(response => response.json()) // parses response to JSON
}