//game/js/data.js 保存分数
//创建分数对象
class Data {
  constructor(){
    //console.log(1);
    this.double = 1;
    this.score = 0;
  }
  draw(){
    //console.log(2);
    ctx1.save();//保存
    ctx1.fillStyle = "#fff";
    ctx1.font = "35px Verdana";
    ctx1.fillText("SCORE:"+this.score,canWidth*0.35,canHeight-80);
    ctx1.restore();//恢复
  }
  addScore(){
    this.score += this.double * 100;
    this.double = 1;
  }
}
//创建绘制分数方法
