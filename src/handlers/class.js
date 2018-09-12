export class Cls{
    replaceCls(value,targetElement,op){
        let me = this,
            currentCls = targetElement.className.split(' '),
            clsSet = new Set(currentCls);
        value=value.split(' ');
        for (const item of value) {
            if(!clsSet.has(item) && op === 'add') clsSet.add(item);
            if(clsSet.has(item) && op === 'remove') clsSet.delete(item);
        }
        targetElement.className = [...clsSet].join(' ');
    }
}