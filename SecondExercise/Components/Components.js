
AFRAME.registerComponent('constructionzone',{
	schema:{
		event: {type: 'string', default: 'click'}
	},

	init: function(){
		console.log("dentro del componente constructionzone");
		let planePrincipal = document.createElement('a-plane');
		planePrincipal.setAttribute('position',{x:0,y:-0.5,z:-7});
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
		let podium = document.createElement('a-sphere');
		podium.setAttribute('position',{x:0,y:0,z:-7});
		podium.setAttribute('radius', 0.08)
		podium.setAttribute('color', 'red')
		podium.setAttribute('id', 'podium')
		console.log(podium);
		//document.getElementById('podium').appendChild(podium)
		let j = document.getElementsByClassName('podium')
		j[0].appendChild(podium)
	},
});

AFRAME.registerComponent('boxbutton', {
schema: {
    event: {type: 'string', default: 'click'},
},

init: function () {

	this.eventHandlerClick = function () {
		let podium = document.getElementById('podium');
		console.log(podium);
		let podiumPosition = podium.getAttribute('position');
		console.log(podiumPosition);
		let newBox = document.getElementById('newbox')
		if (newBox) {
			newBox.remove()
		} else {
			let figure = document.createElement('a-box')
			podium.appendChild(figure)
			figure.setAttribute('color', 'blue' )
			figure.setAttribute('id', 'newbox')
		}
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

AFRAME.registerComponent('spherebutton', {
schema: {
    event: {type: 'string', default: 'click'},
},

init: function () {
	console.log("Dentro de spherebutton");
	this.eventHandlerClick = function () {
		console.log("Dentro de spherebutton");
		let podium = document.getElementById('podium');
		console.log(podium);
		let podiumPosition = podium.getAttribute('position');
		console.log(podiumPosition);
		newSphere = document.getElementById('newsphere')
		if (newSphere) {
			newSphere.remove()
		} else {
			let figure = document.createElement('a-sphere')
			podium.appendChild(figure)
			figure.setAttribute('color', 'yellow' )
			figure.setAttribute('id', 'newsphere')
		}
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

AFRAME.registerComponent('planebutton', {
schema: {
    event: {type: 'string', default: 'click'},
},

init: function () {

	this.eventHandlerClick = function () {
		let podium = document.getElementById('podium');
		console.log(podium);
		let podiumPosition = podium.getAttribute('position');
		console.log(podiumPosition);
		newPlane = document.getElementById('newplane')
		if (newPlane) {
			newPlane.remove()
		} else {
			let figure = document.createElement('a-plane')
			podium.appendChild(figure)
			figure.setAttribute('color', 'red' )
			figure.setAttribute('id', 'newplane')
		}

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

AFRAME.registerComponent('cylinderbutton', {
schema: {
    event: {type: 'string', default: 'click'},
},

init: function () {

	this.eventHandlerClick = function () {

		let podium = document.getElementById('podium');
		console.log(podium);
		let podiumPosition = podium.getAttribute('position');
		console.log(podiumPosition);
		let newCilinder = document.getElementById('newcilinder')
		if (newCilinder) {
			console.log(true);
			newCilinder.remove()
		} else {
			let figure = document.createElement('a-cylinder')
			podium.appendChild(figure)
			figure.setAttribute('color', 'purple' )
			figure.setAttribute('id', 'newcilinder')
		}

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

AFRAME.registerComponent('menu',{
	schema:{
		event: {type: 'string', default: 'click'}
	},
	//animation="property: rotation; to: 0 360 0; loop: true; dur: 10000">
	//animation="property: object3D.position.y; to: 2.2; dir: alternate; dur: 2000; loop: true"
	init: function(){
		console.log("dentro del componente menu");
		let baseMenu = document.createElement('a-cylinder');
		baseMenu.setAttribute('position',{x:-0.5,y:1,z:-1});
		baseMenu.setAttribute('rotation', {x:0, y:0, z:0});
		baseMenu.setAttribute('height', '0.02');
		baseMenu.setAttribute('radius', '0.3');
		baseMenu.setAttribute('color', 'green');
		baseMenu.setAttribute('animation', 'property:rotation;to:0 360 0;loop:true;dur:10000')
		document.getElementById('menu').appendChild(baseMenu)
		console.log(baseMenu);

		let figure1 = document.createElement('a-box')
		figure1.setAttribute('position', {x:0,y:0.1,z:-0.15});
		figure1.setAttribute('width', '0.1');
		figure1.setAttribute('height', '0.1');
		figure1.setAttribute('depth', '0.1');
		figure1.setAttribute('color', 'blue');
		figure1.setAttribute('id', 'box');
		figure1.setAttribute('boxbutton', {event:'click'})
		figure1.setAttribute('animation', 'property: object3D.position.y; to: 0.15; dir: alternate; dur: 2000; loop: true')
		baseMenu.appendChild(figure1);
		console.log(figure1);

		let figure2 = document.createElement('a-sphere')
		figure2.setAttribute('position', {x:0,y:0.1,z:0.15});
		figure2.setAttribute('radius', '0.07');
		figure2.setAttribute('color', 'yellow');
		figure2.setAttribute('id', 'sphere');
		figure2.setAttribute('spherebutton', {event:'click'})
		figure2.setAttribute('animation', 'property: object3D.position.y; to: 0.15; dir: alternate; dur: 2000; loop: true')
		baseMenu.appendChild(figure2)
		console.log(figure2);

		let figure3 = document.createElement('a-plane')
		figure3.setAttribute('position', {x:-0.2,y:0.1,z:0});
		figure3.setAttribute('width', '0.1');
		figure3.setAttribute('height', '0.1');
		figure3.setAttribute('color', 'red');
		figure3.setAttribute('id', 'plane');
		figure3.setAttribute('planebutton', {event:'click'})
		figure3.setAttribute('animation', 'property: object3D.position.y; to: 0.15; dir: alternate; dur: 2000; loop: true')
		baseMenu.appendChild(figure3)
		console.log(figure3);

		let figure4 = document.createElement('a-cylinder')
		figure4.setAttribute('position', {x:0.2,y:0.1,z:0});
		figure4.setAttribute('height', '0.07');
		figure4.setAttribute('radius', '0.08');
		figure4.setAttribute('color', 'purple');
		figure4.setAttribute('id', 'cylinder');
		figure4.setAttribute('cylinderbutton', {event:'click'})
		figure4.setAttribute('animation', 'property: object3D.position.y; to: 0.15; dir: alternate; dur: 2000; loop: true')
		baseMenu.appendChild(figure4)
		console.log(figure4);
	},
});
