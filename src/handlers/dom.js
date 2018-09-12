export class Dom{
    html(html,targetElement){
        targetElement.innerHTML = html;
    }
    append(child,targetElement){
        let originHtml = targetElement.innerHTML;
        targetElement.innerHTML = originHtml+ child;
    }
}

