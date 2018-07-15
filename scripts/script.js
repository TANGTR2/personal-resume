var aButton = document.getElementsByTagName('button');
var aDiv = document.getElementsByTagName('div');

//给每一个button都添加点击事件
for (var i = 0; i < aButton.length; i++) {
//通过给button自定义属性来解决
aButton[i].index=i;//每个键存储一下
aButton[i].onclick = function () {
//点击事件的实现？？  this就是点击的button
for (var j = 0; j < aButton.length; j++) {
aButton[j].className = '';
aDiv[j].className = '';
}
//再给应该添加的对象添加className
this.className = 'active';
aDiv[this.index].className = 'show';
};
}
