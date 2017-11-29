demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#e9ff00';
        
        addChangeStateEventListeners();
    },
    update: function(){}

}