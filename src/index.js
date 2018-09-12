import 'babel-polyfill'
import {Element} from './element'


window.$=function(selector){
    return new Element(selector);
}

$.ajax=function(url, options={}){
    let xhr = new XMLHttpRequest(),
        status;
    xhr.open(
        options.method || 'POST',
        url,
        false,
        options.username,
        options.password
    );
    xhr.send();
    status = xhr.status;
    if(status >= 200 && status < 300 || status === 304){
        if(typeof options.success == 'function'){
            options.success(xhr.responseText,xhr);
        }
    }else{
        if(typeof options.error == 'function'){
            options.error(xhr,xhr.statusText);
        }
    }
    
}