var aneObj = function() {
  //this.x = [];
  //this.len = [];
  //起点坐标；终点坐标；控制点坐标（计算结果）；摆动的幅度；正弦函数的角度；
  this.rootx = [];
  this.headx = [];
  this.heady = [];
  this.amp = [];
  //正弦函数的角度
  this.alpha = 0;
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function() {
	var h = canHeight;
  for(var i=0; i < this.num; i++){
    //初始化起点的坐标
    this.rootx[i] = i * 16 + Math.random() * 20;
    //初始化终点的坐标【与起点相同】
    this.headx[i] = this.rootx[i];
    //初始化终点的坐标
    this.heady[i] = canHeight - 250 + Math.random() * 50;
    //初始化摆动的幅度
    this.amp[i] = 50 + Math.random() * 50;
  }
}
//后方的绘制海葵
aneObj.prototype.draw = function() {
  //绘制50根海葵
  this.alpha += deltaTime * 0.0008;
  var l = Math.sin(this.alpha);
	//console.log(l);
  ctx2.save();
  ctx2.strokeStyle = "#3b154e";
  ctx2.globalAlpha = 0.6;
  ctx2.lineWidth = 20;
  ctx2.lineCap = "round";
  for(var i=0; i < this.num; i++){
    ctx2.beginPath();
    ctx2.moveTo(this.rootx[i],canHeight);//起点坐标（x,y）
    this.headx[i] = this.rootx[i] + l * this.amp[i];
    ctx2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i]);//绘制贝塞尔曲线的方法
    ctx2.stroke();
  }
  ctx2.restore();
  //摆动50根海葵
}