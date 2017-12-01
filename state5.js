var accel = 400, platform, plaformGroup;

demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){
        game.load.image('platform', 'assets/sprites/platform.png');
    },
    create: function(){
        game.stage.backgroundColor = '#ff0000';
        
        addChangeStateEventListeners();
        
        adam = game.add.sprite(centerX, 500, 'adam');
        platform = game.add.sprite(0, 800, 'platform');
        plaformGroup = game.add.group();
        plaformGroup.create(650, 400, 'platform');
        plaformGroup.create(1050, 600, 'platform');

        
        game.physics.enable([adam, platform, plaformGroup]);
        
        adam.body.gravity.y = 500;
        adam.body.bounce.y = 0.3;
        adam.body.drag = 400;
        adam.body.collideWorldBounds = true;
        
        platform.body.immovable = true;
        
        plaformGroup.setAll('body.immovable', true);
    },
    update: function(){
        game.physics.arcade.collide(adam, [platform, plaformGroup]);
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            adam.body.acceleration.x = -accel;
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            adam.body.acceleration.x = accel;
        } else {
            adam.body.acceleration.x = 0;
        }
        
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            adam.body.velocity.y = -300;
        }
    }

}