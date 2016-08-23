var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
//画一个黑色矩形
ctx.fillStyle = "#000000";
ctx.fillRect(0,0,600,300);

//按下标记
var onoff = false;
var oldx = -10;
var oldy = -10;

//设置颜色
var lincolor = "white";
//设置线宽
var linew = 4;
//鼠标移动事件
canvas.addEventListener('mousemove',draw,true);
//鼠标按下事件
canvas.addEventListener('mousedown',down,false);
//鼠标弹起事件
canvas.addEventListener('mouseup',up,false);

function down(event){
  onoff = true;
  oldx = event.pageX - 10;
  oldy = event.pageY - 10;
}
function up(){
  onoff = false;
}
function draw(event){
  if(onoff){
    var newx = event.pageX - 10;
    var newy = event.pageY - 10;
    ctx.beginPath();
    ctx.moveTo(oldx,oldy);
    ctx.lineTo(newx,newy);
    ctx.strokeStyle = lincolor;
    ctx.lineWidth = linew;
    ctx.lineCap = 'round';
    ctx.stroke();

    oldx = newx;
    oldy = newy;
  }
}

function copypng(){
  var img_src = canvas.toDataURL("image/png");
  document.getElementById('face').src = img_src;
}
