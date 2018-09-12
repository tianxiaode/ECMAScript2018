export let EventObserver= new class {
    constructor(){
        let me = this;
        this.events = new WeakMap();
    }
    bindEvent(event, callback, targetElement) {
        let me = this,
            events = me.events,
            targetEvents = events.get(targetElement) || {};
        if(targetEvents[event]){
            me.unbindEvent(event,targetElement);
        }
        targetEvents[event] = callback;
        targetElement.addEventListener(event, callback, false);
        events.set(targetElement,targetEvents);
    }
    unbindEvent(event, targetElement) {
        let me = this,
            events = me.events,
            targetEvents = events.get(targetElement) || {};
        if (targetEvents[event]) {
            targetElement.removeEventListener(event, targetEvents[event], false);
            events.delete(event);
        }
    }

}();