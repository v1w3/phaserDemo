var text, sentence;
WebFontConfig = {
    google: {
      families: ['Revalia', 'Spectral SC']
    }
};


demo.state8 = function(){};
demo.state8.prototype = {
    preload: function(){
        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    },
    create: function(){
        game.stage.backgroundColor = '#c511b0';
        
        addChangeStateEventListeners();
        
        text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ';
        
        this.spellOutText(100, 100, 1000, text, 30, 20, '#fff', 'Revalia');
        this.spellOutText(100, 500, 1000, text, 30, 10, '#000', 'Revalia');
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