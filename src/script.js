function change(){
  var i=document.getElementById("first");
  var j=document.getElementById("second");
  i.innerHTML="Sayonara";
  j.innerHTML="Bonjour";
}
function changeColor(){
  var i=document.getElementById("first");
  var j=document.getElementById("second");
  i.className="secondone";
  j.className="thirdone";
}
function do_peachpuff(){
  var i = document.getElementById("back");
  i.style.backgroundColor="peachpuff";
}
function do_lightblue(){
  var j= document.getElementById("back");
  j.style.backgroundColor="lightblue";
}

function canvas_color(){
  var i=document.getElementById("can_1");
  var j=document.getElementById("can_2");
  i.className="secondone";
  j.className="can_1";
}

function fun_1(){
  var i=document.getElementById("c_1");
  i.style.backgroundColor="lightsteelblue";
  var ctx = i.getContext("2d");
  ctx.fillStyle="navy";
  ctx.fillRect(10,10,20,20);
  ctx.fillRect(50,10,20,20);
  ctx.fillStyle="black";
  ctx.font="30px Arial";
  ctx.fillText("hello",10,80);
}
function fun_2(){
  var j=document.getElementById("c_2");
  var ctx= j.getContext("2d");
  ctx.clearRect(0,0,j.width,j.height);
  j.style.backgroundColor="mediumslateblue";
}
function teal(){
  var i = document.getElementById("col");
  i.style.backgroundColor="teal";
}


function babyblue(){
  var i = document.getElementById("col");
  var j= document.getElementById("bb");
  var k= j.value;
  i.style.backgroundColor=k;
}

function rangeg(){
  var i = document.getElementById("ran");
  var j = document.getElementById("b");
  var z = document.getElementById("rn");
  var k = j.value;
  i.style.backgroundColor=k
  var m = z.value;
  var l = i.getContext("2d");
  l.clearRect(0,0,i.width,i.height);
  l.fillStyle="yellow";
  l.fillRect(10,10,m,m);
}

function textname(){
  var tx=document.getElementById("txt");
  var j= tx.value;
  alert("Choose "+j);
}

var image;
function upload(){
  var can = document.getElementById("up");
  var fl=document.getElementById("upl");
  image = new SimpleImage(fl);
  image.drawTo(can);
}
function greyscale(){
  for(var i of image.values())
    {
      var avg = (i.getRed()+i.getGreen()+i.getBlue())/3;
      i.setRed(avg);
      i.setGreen(avg);
      i.setBlue(avg);
    }
  var j = document.getElementById("op")
  image.drawTo(j);
}

var image;
function upload(){
  var can = document.getElementById("to");
  var fl=document.getElementById("ipl");
  image = new SimpleImage(fl);
  image.drawTo(can);
}
function redish(){
  for(var i of image.values()){
    var rd = i.getRed();
    i.setRed(rd);
    i.setGreen(rd);
    i.setBlue(rd);
  }
  var j = document.getElementById("red");
  image.drawTo(j);
}