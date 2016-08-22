var canvas = document.getElementById('canvas-sample');
var ctx = canvas.getContext('2d');

ctx.lineWidth = 10;
ctx.strokStyle = 'red';
ctx.beginPath();
ctx.moveTo(10,10);
ctx.lineTo(150,50);
ctx.stroke();
