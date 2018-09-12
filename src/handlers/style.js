export class Style {
    style(style, value, targetElement) {
        if (typeof style === 'object') {
            for (const [prop, value] of Object.entries(style)) {
                targetElement.style.setProperty(prop,value);
            }
        } else if (typeof style === 'string') {
            targetElement.style.setProperty(style,value);
        }
    }
    size(width,height,targetElement){
        targetElement.style.setProperty('width', isNaN(width) ? width : width+ 'px');
        targetElement.style.setProperty('height', isNaN(height) ? height : height+ 'px');
    }
    hide(targetElement){
        targetElement.style.setProperty('display','none')
    }
    show(targetElement){
        targetElement.style.setProperty('display','')
    }
}