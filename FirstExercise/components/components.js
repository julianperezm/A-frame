AFRAME.registerComponent('textWinner', {
    console.log("Update");
    schema: {
      state: {type: 'string', default: 'noWinner'},
      
    },
    
    update: function(oldData) {
        console.log("Update");
    },
  });


AFRAME.registerComponent('noWinnerToWinner', {
schema: {
    event: {type: 'string', default: 'click'},
},

init: function () {
    this.eventHandlerClick = function () {
        var text = document.getElementById('WinnerTxt');
        console.log(text)
        var value = text.getAttribute("value");

        if( value === "Pulsa el boton para ganar"){
            text.setAttribute("value", {value: '¡¡Enhorabuena has ganado!!'})
            text.setAttribute('textWinner', {state: 'Winner'});
        }else{
            text.setAttribute("value", {value: 'Pulsa el boton para ganar'})
            text.setAttribute('textWinner', {state: 'noWinner'});
        }
    };
},

update: function(oldData) {
    var el = this.el;
    var data = this.data;
    
    if(! oldData.event){ 
        el.addEventListener(data.event, this.eventHandlerClick);
    }
},
});