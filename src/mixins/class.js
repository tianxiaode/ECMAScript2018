export let Cls={
    addCls(value){
        let me = this;
        me.clsHandler.replaceCls(value,me.dom, 'add');
        return me;
    },
    removeCls(value){
        let me = this;
        me.clsHandler.replaceCls(value,me.dom, 'remove');
        return me;
    }
}