
$('#test')
    .html('hello')
    .append('<b> world!</b>')
    .size(200,200)
    .css({
        color:'blue',
        'background-color': '#ededed',
        'line-height':'200px',
        'text-align':'center'
    })
    .css('display','block')
    .addCls('class1 class2 class3 class4')
    .removeCls('class3')
    .addCls('class1 class5')
    .removeCls('class2 class4')
    .attr('title', '这是一个div')
    .attr('alt', '这是一个div')
console.log($('#test').attr('alt'));
$('#test').removeAttr('alt');
console.log($('#test').attr('alt'));
$('#testBtn').on('click',function(){console.log(1)});
$('#testBtn').on('click',function(){
    let me = this;
    if(me.innerHTML==='隐藏'){
        $('#test').hide();
        me.innerHTML = '显示';
    }else{
        $('#test').show();
        me.innerHTML = '隐藏';
    }
});
$.ajax('data.json',{
    method: 'GET',
    success: function(responseText){ console.log(responseText)},
    error: function(xhr,statusText) {console.log(statusText)}
    
});