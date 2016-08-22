window.onload = function(){
  draw()
}
//canvas一瞥
function draw(){
  var canvas = document.getElementById('canvas-sample');
  if(!canvas || !canvas.getContext) return false;
  var ctx = canvas.getContext('2d');

  //画一个红色矩形
  ctx.fillStyle = "#ff0000";
  ctx.fillRect(20,20,150,70);
}
//javascript 面向对象编程回顾
function People(){
  this.type = "ren";
}
People.prototype = {
  getType:function(){
    alert('this is human');
  }
}

function Student(name,sex){
  //继承people的属性
  People.apply(this,arguments);
  //继承people的方法
  var prop;
  for(prop in People.prototype){
    var proto = this.constructor.prototype;
    if(!proto[prop]){
      proto[prop] = People.prototype[prop];
    };
    proto[prop]["super"] = People.prototype;
  }
  this.name = name;
  this.sex = sex;
}
var stu = new Student('liangliang','男');
stu.getType();
console.log(stu.type)
