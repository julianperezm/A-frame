
AFRAME.registerComponent('nowinnertowinner', {
schema: {
    event: {type: 'string', default: 'click'},
},

init: function () {
    this.eventHandlerClick = function () {
        let text = document.getElementById('WinnerTxt');
        console.log(text)
        let value = text.getAttribute("value");
        console.log(value)
        if( value === "Pulsa el boton para ganar"){
            console.log("He entrado")
            text.setAttribute('value', 'Enhorabuena!!')
            text.setAttribute("scale",{x:3,y:3,z:3});
            text.setAttribute('textwinner', 'Winner');
        }else{
            text.setAttribute('value','Pulsa el boton para ganar')
            text.setAttribute("scale",{x:1,y:1,z:1});
            text.setAttribute('textwinner','noWinner');
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


  
  