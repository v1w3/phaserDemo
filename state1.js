demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#7fc3ff';
        
        addChangeStateEventListeners();
    },
    update: function(){}

}