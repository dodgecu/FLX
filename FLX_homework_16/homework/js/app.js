function assign(...args) {
  let target = Object(args[0]);
  for (let i = 1; i < args.length; i++) {
    for (let obj in args[i]) {
      if (args[i].hasOwnProperty(obj)) {
        target[obj] = args[i][obj];
      }
    }
  }
  return target;
}

// var defaults = { a: 123, b: 777 };
// var options = { a: 456 };
// var configs = assign({}, defaults, options); // {a: 456, b: 777}

// console.log(configs);

function Bot({ name, speed, x, y } = {}) {
  this.name = name;
  this.speed = speed;
  this.x = x;
  this.y = y;
  this.defaultSpeed = this.speed;
  this.designation = `Bot`;
}

Bot.prototype = {
  getSpeed: function () {
    return this.speed;
  },

  setSpeed: function (speed) {
    if (!isNaN(parseFloat(speed)) && isFinite(speed)) {
      this.speed = speed;
    } else {
      console.log(`Speed value invalid!`);
    }
  },

  getDefaultSpeed: function () {
    return this.defaultSpeed;
  },

  getCoordinates: function () {
    return { x: this.x, y: this.y };
  },

  setCoordinates: function (_x, _y) {
    const isValid = (...args) => {
      return args.every(value => !isNaN(parseFloat(value)) && isFinite(value));
    };
    if (isValid(_x, _y)) {
      this.x = _x;
      this.y = _y;
    } else {
      console.log(`Wrong coordicates`);
    }
  },

  move: function (direction) {
    switch (direction) {
      case `up`:
        this.y += this.speed;
        break;
      case `down`:
        this.y -= this.speed;
        break;
      case `left`:
        this.x -= this.speed;
        break;
      case `right`:
        this.x += this.speed;
        break;
      default:
        console.log(`Please, specify correct direction: up, down, left, right`);
    }
  },

  showPosition: function () {
    return `Hi, I am ${this.designation} '${this.name}'. I am located at ${this.x}: ${this.y}.`;
  }
};

function Racebot({ name, speed, x, y } = {}) {
  Bot.apply(this, [{ name, speed, x, y }]);
  this.designation = `Racebot`;

  let _initMove = null;

  this.setDirection = function (direction) {
    _initMove = direction;
  };

  this.getDirection = function () {
    return _initMove;
  };
}

Racebot.prototype = Object.create(Bot.prototype);
Racebot.prototype.constructor = Bot;

Racebot.prototype.move = function (spacexy) {
  this.getDirection() === spacexy
    ? this.speed++
    : this.speed = this.defaultSpeed;

  Bot.prototype.move.call(this, spacexy);

  this.setDirection(spacexy);
};

function Speedbot({ name, speed, x, y } = {}) {
  Bot.apply(this, [{ name, speed, x, y }]);
  this.designation = `Speedbot`;
}

Speedbot.prototype = Object.create(Bot.prototype);
Speedbot.prototype.constructor = Bot;

Speedbot.prototype.prepareEngine = function () {
  this.setSpeed(this.getSpeed() + 2);
};

Speedbot.prototype.move = function (spacexy) {
  Bot.prototype.move.call(this, spacexy);
  if (this.speed > this.defaultSpeed) {
    this.setSpeed(this.getSpeed() - 1);
  }
};

let Botty = new Bot({ name: "Betty", speed: 2, x: 0, y: 1 });
console.log(Botty.showPosition()); // I am Bot 'Betty'. I am located at 0:1.
Botty.move("up");
console.log(Botty.showPosition()); // I am Bot 'Betty'. I am located at 0:3.
Botty.move("left");
Botty.move("down");
Botty.move("up");
Botty.move("up");
console.log(Botty.showPosition()); // I am Bot 'Betty'. I am located at -2:5.
Botty.move("up");
console.log(Botty.showPosition()); // I am Bot 'Betty'. I am located at -2:7.
Botty.move("up");
console.log(Botty.showPosition()); // I am Bot 'Betty'. I am located at -2:9.

let Zoom = new Racebot({ name: "Lightning", speed: 2, x: 0, y: 1 });
console.log(Zoom.showPosition()); // I am Racebot 'Lightning'. I am located at 0:1.
Zoom.move("up");
console.log(Zoom.showPosition()); // I am Racebot 'Lightning'. I am located at 0:3.
Zoom.move("left");
Zoom.move("down");
Zoom.move("up");
Zoom.move("up");
console.log(Zoom.showPosition()); // I am Racebot 'Lightning'. I am located at -2:6.
Zoom.move("up");
console.log(Zoom.showPosition()); // I am Racebot 'Lightning'. I am located at -2:10.
Zoom.move("up");
console.log(Zoom.showPosition()); // I am Racebot 'Lightning'. I am located at -2:15.

let Broom = new Speedbot({ name: "Thunder", speed: 2, x: 0, y: 1 });
console.log(Broom.showPosition()); // I am Speedbot 'Thunder'. I am located at 0:1.
Broom.move("up");
console.log(Broom.showPosition()); // I am Speedbot 'Thunder'. I am located at 0:3.
Broom.prepareEngine();
Broom.move("left");
Broom.move("down");
Broom.move("up");
Broom.move("up");
console.log(Broom.showPosition()); // I am Speedbot 'Thunder'. I am located at -4:4.
Broom.move("up");
console.log(Broom.showPosition()); // I am Speedbot 'Thunder'. I am located at -4:6.
Broom.move("up");
console.log(Broom.showPosition()); // I am Speedbot 'Thunder'. I am located at -4:8.
