var text, sentence;

demo.state8 = function(){};
demo.state8.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#c511b0';
        
        addChangeStateEventListeners();
        
        text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ';
        
        this.spellOutText(100, 100, 1000, text, 30, 40, '#fff');
    },
    update: function(){},
    
    spellOutText: function(x, y, width, text, fontSize, speed, fill, font) {
        var sentence = game.add.text(x, y, '', {fontSize: fontSize + 'px', fill: fill, font: font});
        var currentLine = game.add.text(10, 19, '', {fontSize: fontSize + 'px', font: font});
        currentLine.alpha = 0;
        var loop = game.time.events.loop(speed, addChar);
        
        var index = 0;
        
        function addChar() {
            sentence.text += text[index];
            currentLine.text += text[index];
            
            if (currentLine.width > width && text[index] == ' ') {
                sentence.text += '\n';
                currentLine.text = '';
            }
            
            if (index >= text.length - 1) {
                game.time.events.remove(loop);
                console.log('stop');
            }
            index++;
        }
    }

}