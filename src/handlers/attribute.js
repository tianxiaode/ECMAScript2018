export class Attribute{
    addAttribute(attribute, value, targetElement){
        targetElement.setAttribute(attribute,value+'');
    }
    removeAttribute(attribute,targetElement){
        targetElement.removeAttribute(attribute);
    }
    getAttribute(attribute,targetElement){
        return targetElement.getAttribute(attribute);
    }
}