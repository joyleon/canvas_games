var canvas = document.getElementById('canvas-sample');
var ctx = canvas.getContext('2d');
//画矩形
ctx.lineWidth = 1;
ctx.strokeStyle = "#ff0000";
ctx.fillStyle = "#ff0000"
ctx.beginPath();
// ctx.lineCap = "square";
// ctx.lineCap = "butt";
// ctx.lineCap = "round";
// ctx.strokeRect(10,10,70,70);

//画圆形
ctx.beginPath();
ctx.arc(50,50,30,0,90*Math.PI/180,false);
ctx.fill();

//画文字
ctx.beginPath();
ctx.font = "italic lighter 30px Arial";
ctx.fillText("你好",50,50);
// ctx.strokeText("Hello,world",50,50);
