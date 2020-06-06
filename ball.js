class Ball {
    constructor(x, y) {
      var options = {
      'isStatic': false,
		  'restitution':0.3,
		  'friction':1.5,
		  'density':0.2
      }

      this.body = Bodies.rectangle(x, y, 10, 10, options);
      this.width = 10;
      this.height = 10;
      
      World.add(world, this.body);
    }

    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("white");
      ellipse(0,0, this.width, this.height);
      pop();
    }

  }
  