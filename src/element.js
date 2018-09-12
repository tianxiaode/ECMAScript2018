import { Dom as DomHandler} from './handlers/dom'
import { Dom as DomMixin} from './mixins/dom'
import { Style as StyleHandler} from './handlers/style'
import { Style as StyleMixin} from './mixins/style'
import { Cls as ClsHandler} from './handlers/class'
import { Cls as ClsMixin} from './mixins/class'
import { Attribute as AttributeHandler} from './handlers/attribute'
import { Attribute as AttributeMixin} from './mixins/attribute'
import {EventObserver} from './event'

window.EventObserver = EventObserver;

export class Element{
    constructor(selector){
        let me = this;
        me.dom = document.querySelector(selector);
        me.domHandler = new DomHandler();
        me.styleHandler = new StyleHandler();
        me.clsHandler = new ClsHandler();
        me.attributeHandler = new AttributeHandler();
    }
    on(event, callback){
        let me = this;
        window.EventObserver.bindEvent(event, callback, me.dom);
        return me;
    }
    un(event){
        let me = this;
        window.EventObserver.unbindEvent(event, me.dom);
        return me;
    }    
}

Object.assign(Element.prototype,DomMixin,StyleMixin,ClsMixin,AttributeMixin);
