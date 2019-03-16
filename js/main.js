//main.js
/*
  1.创建全局变量
  2.创建入口函数
  3.创建初始化函数
  4.创建绘制函数
*/
var can1 = null;
var can2 = null;
var ctx1 = null;
var ctx2 = null;
var canWidth = 0;
var canHeight = 0;
//创建全局变量背景图片
var bgPic = null;
//创建全局变量保存海葵
var ane = null;
//创建全局变量保存食物
var fruit = null;
//创建全局变量保存鱼妈妈
var mom = null;
//创建二个全局变量保存鼠标的位置
var mx = 0;
var my = 0;
//创建两个变量保存两帧的时间差
var lastTime = 0;
var deltaTime = 0;
//创建分数对象
var data = null;
//创建光环特效对象
var wave = null;
function game() {
  //调用初始化函数
  init();
  //调用绘制函数
  gameloop();
}

function init() {
  //获取画布对象
  can1 = document.getElementById("canvas1");
  can2 = document.getElementById('canvas2');
  //获取画笔
  ctx1 = can1.getContext('2d');
  ctx2 = can2.getContext('2d');
  //初始化画布的宽高
  canWidth = can1.width; //获取画布的宽度800
  canHeight = can1.height; //获取画布的高度600
  //初始化背景对象
  bgPic = new Image();
  bgPic.src = "img/background.jpg";
  //初始化海葵对象
  ane = new aneObj();
  //调用海葵初始化对象
  ane.init();
  //初始化食物对象
  fruit = new fruitObj();
  fruit.init();
  //初始化鱼妈妈对象
  mom = new Mom();
  mom.init();
  can1.addEventListener("mousemove",onMouseMove,false);
  //初始化两帧的时间差
  lastTime = Date.now();
  deltaTime = 0;
  //初始化分数对象
  data = new Data();
  //初始化光环特效对象
  wave = new Wave();
  wave.init();
}

function gameloop() {
  //创建（智能）定时器
  requestAnimationFrame(gameloop);
  //调用全局函数 监听画布的食物数量
  fruitMonitor();
  //清除画布
  ctx1.clearRect(0, 0, canWidth, canHeight);
  //计算两帧时间差
  var now = Date.now();
  deltaTime = now-lastTime;
  lastTime = now;
  //调用
  momFruitsCollsion();
  //绘制背景
  drawBackground();
  //绘制海葵
  ane.draw();
  //绘制食物
  fruit.draw();
  //绘制鱼妈妈
  mom.draw();
  //调用分数的绘制方法
  data.draw();
  //调用光环特效绘制方法
  wave.draw();
}
document.body.onload = game;

//创建计算鼠标在画布1上的位置
function onMouseMove(e){
  if(e.offsetX || e.layerX){
    mx = e.offsetX == undefined ? e.layerX:e.offsetX;
  }
  if(e.offsetY || e.layerY){
    my = e.offsetY == undefined ? e.layerY:e.offsetY;
  }
}