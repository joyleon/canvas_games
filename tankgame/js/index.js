var game = new Phaser.Game(420,660,Phaser.AUTO,'game');

var TankGame = function(game){
    this.tank = null;
    this.map = null;
    this.layer = null;
    this.cursors = null;
    this.keycode = null;
};

TankGame.prototype.preload = function(){
    this.load.image('sky', 'asset/bg.jpg');
    this.load.spritesheet('tank','./asset/tank.png',44,44);
    this.load.spritesheet('bullet','./asset/bullet.png');
    this.load.tilemap('tank_map','./asset/tilemap.json',null,Phaser.Tilemap.TILED_JSON);
    this.load.image('tankbg','./asset/tilemap.png');
};

TankGame.prototype.create = function(){
    //设置背景
    this.map = this.add.tilemap('tank_map');
    this.map.addTilesetImage('tilemap','tankbg');
    this.layer = this.map.createLayer('world');
    //调整世界大小为地图大小
    this.layer.resizeWorld();
    //设置地图碰撞
    this.map.setCollision(2,true);
    this.map.setCollision(5,true);
    this.map.setCollision(4,true);

    //设置世界大小
    this.world.setBounds(0,0,660,660);
    //开启物理引擎
    this.physics.startSystem(Phaser.Physics.ARCADE);
    //添加坦克
    this.tank = this.add.sprite(10,10,'tank');
    //开启坦克物理引擎
    this.physics.arcade.enable(this.tank);
    //碰撞系数为0
    this.tank.body.bounce.x = 0;
    this.tank.body.bounce.y = 0;
    //设置锚点
    this.tank.anchor = {x:0.5,y:0.5};
    //不能出界
    this.tank.body.collideWorldBounds = true;

    //坦克动画
    this.tank.animations.add('left',[4,5],10,true);
    this.tank.animations.add('right',[6,7],10,true);
    this.tank.animations.add('up',[0,1],10,true);
    this.tank.animations.add('down',[2,3],10,true);

    //创建键盘方向键监听
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keycode = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    console.log(this.keycode);
    //摄像机跟随
    this.camera.follow(this.tank);
};

TankGame.prototype.update = function(){
    this.leftSpeed = 150;

    //设置坦克和背景砖块碰撞
    this.physics.arcade.collide(this.tank,this.layer);

    //初始化速度
    this.tank.body.velocity.x = 0;
    this.tank.body.velocity.y = 0;

    if(this.keycode.isDown){
        this.leftSpeed = 300;
    }

    //绑定方向按键事件
    if (this.cursors.left.isDown) {
        this.tank.body.velocity.x = -this.leftSpeed;
        this.tank.animations.play('left');
    }
    else if (this.cursors.right.isDown) {
        this.tank.body.velocity.x = this.leftSpeed;
        this.tank.animations.play('right');
    }
    else if (this.cursors.up.isDown) {
        this.tank.body.velocity.y = -this.leftSpeed;
        this.tank.animations.play('up');
    }
    else if (this.cursors.down.isDown) {
        this.tank.body.velocity.y = this.leftSpeed;
        this.tank.animations.play('down');
    }
    else{
        this.tank.animations.stop();
    }
};

game.state.add('game',TankGame,true);