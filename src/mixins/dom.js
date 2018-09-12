export let Dom={
    html(html){
        let me = this;
        me.domHandler.html(html,me.dom);
        return me;
    },
    append(child){
        let me = this;
        me.domHandler.append(child,me.dom);
        return me;
    }
}