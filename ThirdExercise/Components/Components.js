
AFRAME.registerComponent('base',{
	schema:{
		event: {type: 'string', default: 'click'}
	},

	init: function(){
		console.log("dentro del componente base");
		let planePrincipal = document.createElement('a-cylinder');
		planePrincipal.setAttribute('position',{x:0,y:0,z:0});
		planePrincipal.setAttribute('radius', 32);
		planePrincipal.setAttribute('height', 0.1);
		planePrincipal.setAttribute('color', '#b5b5b5')
		planePrincipal.setAttribute('static-body', {})
		document.getElementById('index').appendChild(planePrincipal)
		console.log(planePrincipal);

		let skyPrincipal = document.createElement('a-sky');
		skyPrincipal.setAttribute('theta-length',90 )
		skyPrincipal.setAttribute('radius',30 )
		skyPrincipal.setAttribute('color', '#b5e5ff')
		document.getElementById('index').appendChild(skyPrincipal)


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
    	active: {type: 'boolean', default: false},
	},

	init: function () {
		let el = this.el;
		let data = this.data;
		console.log("dentro de boxbutton")

		el.addEventListener('grab-start', function(){
			console.log("has clickado en el cuadrado")
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
				figure.setAttribute('color', 'blue')
				figure.setAttribute('id', 'newbox')
			}
		});
	}
});



AFRAME.registerComponent('spherebutton', {
	schema: {
    	active: {type: 'boolean', default: false},
	},

	init: function () {
		let el = this.el;
		let data = this.data;
		console.log("dentro de boxbutton")

		el.addEventListener('grab-start', function () {
			console.log("has clickado en la esfera")
			let podium = document.getElementById('podium');
			console.log(podium);
			let podiumPosition = podium.getAttribute('position');
			console.log(podiumPosition);
			let newsphere = document.getElementById('newsphere')
			if (newsphere) {
				newsphere.remove()
			} else {
				let figure = document.createElement('a-sphere')
				podium.appendChild(figure)
				figure.setAttribute('color', 'yellow')
				figure.setAttribute('id', 'newsphere')
			}
		});
	}
});

AFRAME.registerComponent('planebutton', {
	schema: {
    	active: {type: 'boolean', default: false},
	},

	init: function () {
		let el = this.el;
		let data = this.data;
		console.log("dentro de planebutton")

		el.addEventListener('grab-start', function () {
			console.log("has clickado en el plano")
			let podium = document.getElementById('podium');
			console.log(podium);
			let podiumPosition = podium.getAttribute('position');
			console.log(podiumPosition);
			let newPlane = document.getElementById('newplane')
			if (newPlane) {
				newPlane.remove()
			} else {
				let figure = document.createElement('a-plane')
				podium.appendChild(figure)
				figure.setAttribute('color', 'red')
				figure.setAttribute('id', 'newplane')
			}
		});
	}

});

AFRAME.registerComponent('cylinderbutton', {
	schema: {
    	active: {type: 'boolean', default: false},
	},

	init: function () {
		let el = this.el;
		let data = this.data;
		console.log("dentro de cylinderbutton")

		el.addEventListener('grab-start', function () {
			console.log("has clickado en el cylindro")
			let podium = document.getElementById('podium');
			console.log(podium);
			let podiumPosition = podium.getAttribute('position');
			console.log(podiumPosition);
			let newCylinder = document.getElementById('newcylinder')
			if (newCylinder) {
				newCylinder.remove()
			} else {
				let figure = document.createElement('a-cylinder')
				podium.appendChild(figure)
				figure.setAttribute('color', 'purple')
				figure.setAttribute('id', 'newcylinder')
			}
		});
	}
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
		figure1.setAttribute('class', 'button')
		figure1.setAttribute('boxbutton', true)
		figure1.setAttribute('clickable', {})
		figure1.setAttribute('animation', 'property: object3D.position.y; to: 0.15; dir: alternate; dur: 2000; loop: true')
		baseMenu.appendChild(figure1);
		console.log(figure1);

		let figure2 = document.createElement('a-sphere')
		figure2.setAttribute('position', {x:0,y:0.1,z:0.15});
		figure2.setAttribute('radius', '0.07');
		figure2.setAttribute('color', 'yellow');
		figure2.setAttribute('id', 'sphere');
		figure2.setAttribute('class', 'button')
		figure2.setAttribute('clickable', {})
		figure2.setAttribute('spherebutton', {active: true})
		figure2.setAttribute('animation', 'property: object3D.position.y; to: 0.15; dir: alternate; dur: 2000; loop: true')
		baseMenu.appendChild(figure2)
		console.log(figure2);

		let figure3 = document.createElement('a-plane')
		figure3.setAttribute('position', {x:-0.2,y:0.1,z:0});
		figure3.setAttribute('width', '0.1');
		figure3.setAttribute('height', '0.1');
		figure3.setAttribute('color', 'red');
		figure3.setAttribute('id', 'plane');
		figure3.setAttribute('planebutton', {active: true})
		figure3.setAttribute('class', 'button')
		figure3.setAttribute('clickable', {})
		figure3.setAttribute('animation', 'property: object3D.position.y; to: 0.15; dir: alternate; dur: 2000; loop: true')
		baseMenu.appendChild(figure3)
		console.log(figure3);

		let figure4 = document.createElement('a-cylinder')
		figure4.setAttribute('position', {x:0.2,y:0.1,z:0});
		figure4.setAttribute('height', '0.07');
		figure4.setAttribute('radius', '0.08');
		figure4.setAttribute('color', 'purple');
		figure4.setAttribute('id', 'cylinder');
		figure4.setAttribute('cylinderbutton', {active:true})
		figure4.setAttribute('class', 'button')
		figure4.setAttribute('clickable', {})
		figure4.setAttribute('animation', 'property: object3D.position.y; to: 0.15; dir: alternate; dur: 2000; loop: true')
		baseMenu.appendChild(figure4)
		console.log(figure4);
	},
});
