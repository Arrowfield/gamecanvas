//完成碰撞检测
//大鱼碰小鱼
//创建全局函数 
//功能：检测大鱼与所有的食物是否发生碰撞
function momFruitsCollsion(){
  for(var i=0;i<fruit.num;i++){
    if(fruit.alive[i]){
      var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
      if(l < 900){
        fruit.alive[i] = false;
        if(fruit.fruitType[i] == "orange"){
          data.double = 2;
        }else{
          data.double = 1;
        }
        data.addScore();
        wave.born(fruit.x[i],fruit.y[i]);
      }
    }
  }
}
//将collsion.js添加index.html中
//在main.js 添加gameloop
//大鱼碰食物