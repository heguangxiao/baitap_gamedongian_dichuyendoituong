/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;
  this.flagleft = true;
  this.flagtop = true;
  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += this.speed;
  }
  this.moveLeft = function(){
    this.left -= this.speed;
  }
  this.moveBottom = function () {
    this.top += this.speed;
  }
  this.moveTop = function () {
    this.top -= this.speed;
  }

}

var hero = new Hero('superman.jpg', 0, 0, 100, 1);

function start(){
  if(hero.flagleft && hero.flagtop){
    hero.moveRight();
    if (hero.left == window.innerWidth - hero.size) {
      hero.flagleft = false;
    }
  } else if (hero.flagtop && !hero.flagleft) {
    hero.moveBottom();
    if (hero.top == window.innerHeight - hero.size) {
      hero.flagtop = false;
    }
  } else if (!hero.flagleft && !hero.flagtop) {
    hero.moveLeft();
    if (hero.left == 0 ) {
      hero.flagleft = true;
    }
  } else {
    hero.moveTop();
    if (hero.top == 0 ) {
      hero.flagtop = true;
    }
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 1)
}

start();