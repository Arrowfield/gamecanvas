//game/js/fruit.js 食物
//食物的总数量 30 15张活动的 15张不活动的
//食物图片2张
//blue.png 
//创建食物类
//数据属性 访问器属性
var fruitObj = function(){
  this.alive = []; //是否活动 bool
  this.orange = new Image(); //两张图片
  this.blue = new Image();
  this.x = [];//食物坐标
  this.y = [];
  this.l = [];//图片的长度
  this.spd = [];
  this.fruitType = [];//食物的类型
}
//添加属性食物数量
fruitObj.prototype.num = 15;
//添加方法食物初始化
fruitObj.prototype.init = function(){
  for(var i=0;i<this.num;i++){
    this.alive[i] = false;
    this.x[i] = 0;
    this.y[i] = 0;
    this.l[i] = 0;
    this.spd[i] = Math.random() * 0.017 + 0.03;
    this.fruitType[i] = "";//未知
  }
  this.orange.src = "./src/fruit.png";//黄颜色的食物图片
  this.blue.src = "./src/blue.png";//蓝颜色的食物图片
}
//添加方法食物绘制
fruitObj.prototype.draw = function(){
  for(var i=0;i<this.num;i++){
    if(this.alive[i]){
      if(this.l[i] < 14){
        this.l[i] += this.spd[i] * 15;
      }else{
        this.y[i] -= this.spd[i] * 18; 
      }
      if(this.fruitType[i] == "blue"){
        var pic = this.blue;
      }else{
        var pic = this.orange;
      }
      ctx2.drawImage(
				pic,
				this.x[i]-this.l[i]*0.5,
				this.y[i]-this.l[i]*0.5,
				this.l[i],this.l[i]
			);
			if(this.y[i]<0){
				this.alive[i] = false;
			}
    }
  }
}
//将fruit.js加载index.html
//在main.js 创建对象并且调用相应的方法
//创建全局函数，监听画布食物的数量，不足15个活动出生
function fruitMonitor(){
  var sum = 0;
  for(var i=0;i<fruit.num;i++){
    if(fruit.alive[i]) sum++;
    if(sum<15){
      sendFruit();
      return;
    }
  }
}
//创建全局函数，从食物中挑选一个不活动食物
function sendFruit(){
  for(var i=0;fruit.num;i++){
    if(!fruit.alive[i]){
      fruit.born(i);
      return;
    }
  }
} 
//为食物类中添加方法，出生【状态；宽度；类型；x；y】
fruitObj.prototype.born = function(i){
  var aneID = Math.floor(Math.random()*ane.num);
  this.x[i] = ane.headx[aneID];
  this.y[i] = ane.heady[aneID];
  this.l[i] = 0;
  this.alive[i] = true;
  this.fruitType[i] = Math.random()<0.9?"blue":"orange";
}