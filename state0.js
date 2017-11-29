var demo = {};

demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#35c511';
        
        addChangeStateEventListeners();
    },
    update: function(){}

};

function changeState(1, stateNum) {
    console.log(1);
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args)
}

function addChangeStateEventListeners() {
      addKeyCallback(Phaser.keyboard.ZERO, changeState, 0);
        addKeyCallback(Phaser.keyboard.ONE, changeState, 1);
        addKeyCallback(Phaser.keyboard.TWO, changeState, 2);
        addKeyCallback(Phaser.keyboard.THREE, changeState, 3);
        addKeyCallback(Phaser.keyboard.FOUR, changeState, 4);
        addKeyCallback(Phaser.keyboard.FIVE, changeState, 5);
        addKeyCallback(Phaser.keyboard.SIX, changeState, 6);
        addKeyCallback(Phaser.keyboard.SEVEN, changeState, 7);
        addKeyCallback(Phaser.keyboard.EIGHT, changeState, 8);
        addKeyCallback(Phaser.keyboard.NINE, changeState, 9); 
}