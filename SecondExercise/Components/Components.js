AFRAME.registerComponent('constructionzone',{
	schema:{
		event: {type: 'string', default: 'click'}
	},

	init: function(){
		console.log("dentro del componente constructionzone");
		let planePrincipal = document.createElement('a-plane');
		planePrincipal.setAttribute('position',{x:0,y:0,z:-7});
		planePrincipal.setAttribute('rotation', {x:-90, y:0, z:0});
		planePrincipal.setAttribute('width', '10');
		planePrincipal.setAttribute('height', '10');
		planePrincipal.setAttribute('color', 'black')
		document.getElementById('zone').appendChild(planePrincipal)

		console.log(planePrincipal);
	},
});

AFRAME.registerComponent('podium',{
	schema:{
		event: {type: 'string', default: 'click'}
	},

	init: function(){
		console.log("dentro del componente podium");
		let podium = document.createElement('a-plane');
		podium.setAttribute('position',{x:0,y:0,z:-7});
		podium.setAttribute('rotation', {x:-90, y:0, z:0});
		podium.setAttribute('width', '1');
		podium.setAttribute('height', '1');
		podium.setAttribute('color', 'white')
		document.getElementById('podium').appendChild(podium)

		console.log(podium);
	},
});

AFRAME.registerComponent('menu',{
	schema:{
		event: {type: 'string', default: 'click'}
	},

	init: function(){
		console.log("dentro del componente menu");
		let baseMenu = document.createElement('a-cylinder');
		baseMenu.setAttribute('position',{x:-0.5,y:1.5,z:-1});
		baseMenu.setAttribute('rotation', {x:45, y:0, z:0});
		baseMenu.setAttribute('height', '0.07');
		baseMenu.setAttribute('radius', '0.3');
		baseMenu.setAttribute('color', 'green');
		document.getElementById('menu').appendChild(baseMenu)
		console.log(baseMenu);

		let figure1 = document.createElement('a-box')
		figure1.setAttribute('position', {x:0,y:0.1,z:-0.15});
		figure1.setAttribute('width', '0.1');
		figure1.setAttribute('height', '0.1');
		figure1.setAttribute('depth', '0.1');
		figure1.setAttribute('color', 'blue');
		figure1.setAttribute('id', 'box');
		figure1.setAttribute('boxbutton')
		baseMenu.appendChild(figure1);
		console.log(figure1);

		let figure2 = document.createElement('a-sphere')
		figure2.setAttribute('position', {x:0,y:0.1,z:0.15});
		figure2.setAttribute('radius', '0.07');
		figure2.setAttribute('color', 'yellow');
		figure2.setAttribute('id', 'sphere');
		baseMenu.appendChild(figure2)
		console.log(figure2);

		let figure3 = document.createElement('a-plane')
		figure3.setAttribute('position', {x:-0.2,y:0.1,z:0});
		figure3.setAttribute('width', '0.1');
		figure3.setAttribute('height', '0.1');
		figure3.setAttribute('color', 'red');
		figure3.setAttribute('id', 'plane');
		baseMenu.appendChild(figure3)
		console.log(figure3);

		let figure4 = document.createElement('a-cylinder')
		figure4.setAttribute('position', {x:0.2,y:0.1,z:0});
		figure4.setAttribute('height', '0.07');
		figure4.setAttribute('radius', '0.08');
		figure4.setAttribute('color', 'purple');
		figure4.setAttribute('id', 'cylinder');
		baseMenu.appendChild(figure4)
		console.log(figure4);
	},
});


AFRAME.registerComponent('boxbutton', {
schema: {
    event: {type: 'string', default: 'click'},
},

init: function () {
	this.eventHandlerClick = function () {
		let podium = document.getElementById('podium');
		let podiumPosition = podium.getAttribute('position');
		console.log(podiumPosition);
		let positionY = podiumPosition + 0.5
		let figure = document.createElement('a-box')
		podium.appendChild(figure)
		figure.setAttribute('color', 'green' )
	}


},

update: function(oldData) {
    var el = this.el;
    var data = this.data;

    if(! oldData.event){
        el.addEventListener(data.event, this.eventHandlerClick);
    }
},
});
