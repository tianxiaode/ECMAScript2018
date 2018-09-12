export let Attribute={
    attr(attribute,value){
        let me = this;
        if(typeof attribute === 'string' && !value ){
            return me.attributeHandler.getAttribute(attribute,me.dom);
        }
        me.attributeHandler.addAttribute(attribute,value,me.dom);
        return me;
    },
    removeAttr(attribute){
        let me = this;
        me.attributeHandler.removeAttribute(attribute,me.dom);
        return me;
    }
}