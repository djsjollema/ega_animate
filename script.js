var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var ega = ["#000000",
  "#0000aa",
  "#00aa00",
  "#00aaaa",
  "#aa0000",
  "#aa00aa",
  "#aa5500",
  "#aaaaaa",
  "#555555",
  "#5555ff",
  "#55ff55",
  "#55ffff",
  "#ff5555",
  "#ff55ff",
  "#ffff55",
  "#ffffff"];

console.log(ega,ega.length);

class Bit{
  constructor(x,y,color){
    this.x = x;
    this.y = y;
    this.color = color;
    addEventListener('mousedown',(e)=>{
      var box = canvas.getBoundingClientRect();
      var mouseX = e.clientX - box.left;
      var mouseY = e.clientY - box.top;
      if(mouseX>this.x && mouseX < this.x + 100 && mouseY>this.y && mouseY < this.y + 100){
        	if(this.color<16){
            this.color+=1
          } else {
            this.color = 0;
          }
          this.draw(context);

      }

    })
  }

  draw(context){
    context.beginPath();
    context.fillStyle = ega[this.color];
    context.rect(this.x,this.y,100,100);
    context.stroke();
    context.fill();
    context.closePath();
  }
}


function draw(){
  for(i=0; i<64; i++){
    var numOnRow = 8;
    var bitWidth = 100;
    var col = Math.floor(Math.random()*16);
    var x = (i%numOnRow)*bitWidth;
    var y = Math.floor(i/numOnRow)*bitWidth;
    var bit = new Bit(x,y,col);
    bit.draw(context)
  }
}



setInterval(draw,100)
