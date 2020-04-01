//创建特效光环对象
class Wave{
  constructor(){
    this.num = 10;
    this.alive = [];
    this.x = [];
    this.y = [];
    this.r = [];
  }
  init(){
    for(var i=0; i<this.num; i++){
      this.alive[i] = false;
      this.r[i] = 0;
    }
  }
  draw(){
    ctx1.save();
    ctx1.lineWidth = 2;
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = "red";
    for(var i=0; i<this.num; i++){
      if(this.alive[i]){
        this.r[i] += deltaTime * 0.02;
        if(this.r[i]>50){
          this.alive[i] = false;
          break;
        }
        var alpha = 1 - this.r[i]/50;
        ctx1.beginPath();
        ctx1.strokeStyle = "rgba(255,255,255,"+alpha+")";
        ctx1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);
        ctx1.stroke();
      }
    }
    ctx1.restore();
  }
  born(x,y){
    for(var i=0; i<this.num; i++){
      if(!this.alive[i]){
        this.alive[i] = true;
        this.x[i] = x;
        this.y[i] = y;
        this.r[i] = 20;
        return;
      }
    }
  }
}
//为特效光环对象添加数量 10
//特效光环对象的初始化方法
//特效光环对象的绘制方法
//将wave.js 添加到 index.html中
//在mian.js 中创建对象并调用对应的方法