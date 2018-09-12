export let Style={
    css(style,value){
        let me = this;
        me.styleHandler.style(style, value, me.dom);
        return me;
    },
    size(width,height){
        let me = this;
        me.styleHandler.size(width,height, me.dom);
        return me;
    },
    hide(){
        let me = this;
        me.styleHandler.hide(me.dom);
        return me;
    },
    show(){
        let me = this;
        me.styleHandler.show(me.dom);
        return me;
    }
}