demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#ff9900';
        
        addChangeStateEventListeners();
    },
    update: function(){}

}