
document.addEventListener('keypress', function(e) {
  if (e.keyCode === 113 || e.keyCode === 81){
  	let mode = document.getElementById('mode');
  	let text = mode.getAttribute('value')
  	if (text === 'Mode: Normal' ){
		mode.setAttribute('value', 'Mode: Group');
		let newEntity = document.createElement('a-entity');
		newEntity.setAttribute('static-body', {});
		newEntity.setAttribute('class', "fatherofgroup remote");
		newEntity.setAttribute('material', 'color:#c1c1c1');
		newEntity.setAttribute('position', {x:0.6,y:0,z:1})
		newEntity.setAttribute('mixin', 'cube');
		mode.appendChild(newEntity);
		mode.addEventListener('click' ,function (event) {
			console.log(event.srcElement)
		})

	}else{
  		mode.setAttribute('value', 'Mode: Normal');
  		document.removeEventListener('click' ,function (event) {

		})
	}
  }
});

function createEntity(entity){

	let podium = document.getElementById('podium');
	let newEntity = document.createElement('a-entity');
	newEntity.setAttribute('static-body', {});
	newEntity.setAttribute('class', entity + " remote");
	newEntity.setAttribute('editentity',{} );
	newEntity.setAttribute('material', 'color:white');
	switch (entity) {
		case 'cube':
			newEntity.setAttribute('mixin', 'cube');
			break;
		case 'sphere':
			newEntity.setAttribute('mixin', 'sphere')
			break;
		case 'plane':
			newEntity.setAttribute('mixin', 'plane')
			break;
		case 'cylinder':
			newEntity.setAttribute('mixin', 'cylinder')
			break;
	}

	podium.appendChild(newEntity)

	//setEditable()
}

function setClickable(){
	console.log('dentro de clickable')
	let cubeFig = document.querySelector('#cubeClick')
	console.log(cubeFig);
	let sphereFig = document.querySelector('#sphereClick')
	let planeFig = document.querySelector('#planeClick')
	let cylinderFig = document.querySelector('#cylinderClick')

	cubeFig.addEventListener('grab-start', function(){
		createEntity('cube')
		console.log('dentro1')
	});

	sphereFig.addEventListener('grab-start', function(){
		createEntity('sphere')
	});

	planeFig.addEventListener('grab-start', function(){
		createEntity('plane')
	});

	cylinderFig.addEventListener('grab-start', function(){
		createEntity('cylinder')
	});
}
AFRAME.registerComponent('changeattribute',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = el.parentNode
            console.log(entityToChange.hasChildNodes());
            console.log(entityToChange.childNodes.length);
            console.log(entityToChange.firstChild)
            entityToChange.setAttribute('material', el.getAttribute('material'))
			//entityToChange.removeChild(entityToChange.firstChild)
            /*if (entityToChange.hasChildNodes()){
                console.log('he entrado en el if');
                console.log(entityToChange.childNodes.length);
                while (entityToChange.childNodes.length >= 1){
					console.log(entityToChange.childNodes.length);
					entityToChange.removeChild(entityToChange.firstChild);
					//console.log('hola')
                }
            }*/
		});
	}
});

AFRAME.registerComponent('editentity', {
	schema:{
	    active:{type:'boolean', default: false},
		colors: {default: ['#ff2828', '#fcb235', '#fff240','#aaff4f','#39ff28','#35fc9a','#40f9ff',
			'#4f9bff','#6328ff','#dd35fc','#ff40cf','#ff4f71']}
	},

	init: function () {
		let el = this.el;
		let data = this.data;

		this.el.addEventListener('grab-start', function(){
            console.log(el.hasChildNodes());

		    if (data.active === false){
		        data.active = true;
		        let colors = data.colors;
                console.log(el.getAttribute('class'));


                for (let color of colors) {
                    let colorButton = document.createElement('a-entity');
                    if (el.getAttribute('class').search('sphere') >= 0) {
                        colorButton.setAttribute('geometry', {primitive: 'sphere', radius: 0.08});
                    } else if (el.getAttribute('class').search('plane') >= 0) {
                        colorButton.setAttribute('geometry', {primitive: 'plane', width: 0.15, height: 0.15});
                    } else if (el.getAttribute('class').search('cube') >= 0) {
                        colorButton.setAttribute('geometry', {
                            primitive: 'box',
                            width: 0.15,
                            height: 0.15,
                            depth: 0.15
                        });
                    } else {
                        colorButton.setAttribute('geometry', {primitive: 'cylinder', radius: 0.08, height: 0.1});
                    }
                    colorButton.setAttribute('class', 'button');
                    //colorButton.setAttribute('id', 'colours');
                    colorButton.setAttribute('position', ((colors.indexOf(color) * 0.2) - 1.1) + " 0.7 0.01");
                    colorButton.setAttribute('material', 'color :' + color);
                    colorButton.setAttribute('clickable', {});
                    colorButton.setAttribute('changeattribute', {})
                    el.appendChild(colorButton)
                }
            }


			/*let tableForEdit = document.createElement('a-entity')
			tableForEdit.setAttribute('geometry', {primitive:'plane', width:1, height:0.5});
			tableForEdit.setAttribute('material','color:white');
			tableForEdit.setAttribute('stretchable', {});
			tableForEdit.setAttribute('position', '0 1 0');

			let colors = data.colors

			for (let color of colors){
				let colorButton = document.createElement('a-entity');
				colorButton.setAttribute('geometry', {primitive:'box', width:0.1, height:0.1, depth:0.025});
				colorButton.setAttribute('class', 'button');
				colorButton.setAttribute('position', ((colors.indexOf(color)*0.2)-0.3)+" 0.125 0.01");
				colorButton.setAttribute('material','color :' + color);
				colorButton.setAttribute('clickable', {});
				colorButton.setAttribute('changeattribute', {})
				tableForEdit.appendChild(colorButton)
			}

			el.appendChild(tableForEdit)*/
		});

	}
});


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
		podium.setAttribute('position',{x:-0.4,y:2,z:0});
		podium.setAttribute('radius', 0.01);
		podium.setAttribute('color', 'red');
		podium.setAttribute('id', 'podium');
		console.log(podium);
		//document.getElementById('podium').appendChild(podium)
		let j = document.getElementsByClassName('podium');
		j[0].appendChild(podium)
	},
});

/*
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
			let newEl = document.createElement('a-entity');
			newEl.setAttribute('mixin', 'cube');
			newEl.setAttribute('static-body', '');
			newEl.setAttribute('class', " remote");
			podium.appendChild(newEl)
		});
	}
});
*/
/*
AFRAME.registerComponent('menu',{
	schema:{
		event: {type: 'string', default: 'click'}
	},
	//animation="property: rotation; to: 0 360 0; loop: true; dur: 10000">
	//animation="property: object3D.position.y; to: 2.2; dir: alternate; dur: 2000; loop: true"
	init: function(){
		console.log("dentro del componente menu");
		let baseMenu = document.createElement('a-cylinder');
		baseMenu.setAttribute('position',{x:-2,y:1.2,z:0});
		baseMenu.setAttribute('rotation', {x:0, y:0, z:0});
		baseMenu.setAttribute('height', '0.04');
		baseMenu.setAttribute('radius', '0.7');
		baseMenu.setAttribute('color', 'green');
		baseMenu.setAttribute('animation', 'property:rotation;to:0 360 0;loop:true;dur:10000')
		document.getElementById('menu').appendChild(baseMenu)
		console.log(baseMenu);

		let figure1 = document.createElement('a-box')
		figure1.setAttribute('position', {x:0,y:0.3,z:-0.3});
		figure1.setAttribute('width', '0.2');
		figure1.setAttribute('height', '0.2');
		figure1.setAttribute('depth', '0.2');
		figure1.setAttribute('color', 'blue');
		figure1.setAttribute('id', 'cubeClick');
		figure1.setAttribute('class', 'button')
		figure1.setAttribute('clickable', {})
		figure1.setAttribute('animation', 'property: object3D.position.y; to: 0.15; dir: alternate; dur: 2000; loop: true')
		baseMenu.appendChild(figure1);
		console.log(figure1);

		let figure2 = document.createElement('a-sphere')
		figure2.setAttribute('position', {x:0,y:0.3,z:0.3});
		figure2.setAttribute('radius', '0.1');
		figure2.setAttribute('color', 'yellow');
		figure2.setAttribute('id', 'sphereClick');
		figure2.setAttribute('class', 'button')
		figure2.setAttribute('clickable', {})
		figure2.setAttribute('spherebutton', {active: true})
		figure2.setAttribute('animation', 'property: object3D.position.y; to: 0.15; dir: alternate; dur: 2000; loop: true')
		baseMenu.appendChild(figure2)
		console.log(figure2);

		let figure3 = document.createElement('a-plane')
		figure3.setAttribute('position', {x:-0.3,y:0.3,z:0});
		figure3.setAttribute('width', '0.2');
		figure3.setAttribute('height', '0.2');
		figure3.setAttribute('color', 'red');
		figure3.setAttribute('id', 'planeClick');
		figure3.setAttribute('planebutton', {active: true})
		figure3.setAttribute('class', 'button')
		figure3.setAttribute('clickable', {})
		figure3.setAttribute('animation', 'property: object3D.position.y; to: 0.15; dir: alternate; dur: 2000; loop: true')
		baseMenu.appendChild(figure3)
		console.log(figure3);

		let figure4 = document.createElement('a-cylinder')
		figure4.setAttribute('position', {x:0.3,y:0.3,z:0});
		figure4.setAttribute('height', '0.07');
		figure4.setAttribute('radius', '0.08');
		figure4.setAttribute('color', 'purple');
		figure4.setAttribute('id', 'cylinderClick');
		figure4.setAttribute('cylinderbutton', {active:true})
		figure4.setAttribute('class', 'button')
		figure4.setAttribute('clickable', {})
		figure4.setAttribute('animation', 'property: object3D.position.y; to: 0.15; dir: alternate; dur: 2000; loop: true')
		baseMenu.appendChild(figure4)
		console.log(figure4);

		setClickable()
	},
});*/
/*
AFRAME.registerComponent('menu',{
	schema:{
		event: {type: 'string', default: 'click'}
	},
	//animation="property: rotation; to: 0 360 0; loop: true; dur: 10000">
	//animation="property: object3D.position.y; to: 2.2; dir: alternate; dur: 2000; loop: true"
	init: function(){
		console.log("dentro del componente menu");
		let baseMenu = document.createElement('a-plane');
		baseMenu.setAttribute('position',{x:-2,y:1.25,z:0});
		baseMenu.setAttribute('rotation', {x:0, y:0, z:0});
		baseMenu.setAttribute('height', '1.5');
		baseMenu.setAttribute('width', '1.5');
		baseMenu.setAttribute('rotation', {x:-90,y:0,z:0});
		baseMenu.setAttribute('src', '#FiguresSelectorImg');
		//baseMenu.setAttribute('animation', 'property:rotation;to:0 360 0;loop:true;dur:10000')
		document.getElementById('menu').appendChild(baseMenu)
		console.log(baseMenu);

		let figure1 = document.createElement('a-box')
		figure1.setAttribute('position', {x:-0.35,y:0.4,z:0});
		figure1.setAttribute('width', '0.15');
		figure1.setAttribute('height', '0.15');
		figure1.setAttribute('depth', '0.15');
		figure1.setAttribute('color', '#c1c1c1');
		figure1.setAttribute('id', 'cubeClick');
		figure1.setAttribute('class', 'button')
		figure1.setAttribute('clickable', {})
		//figure1.setAttribute('animation', 'property: object3D.position.z; to: 0.15; dir: alternate; dur: 2000; loop: true')
		baseMenu.appendChild(figure1);
		console.log(figure1);

		let figure2 = document.createElement('a-sphere')
		figure2.setAttribute('position', {x:-0.35,y:-0.5,z:0});
		figure2.setAttribute('radius', '0.1');
		figure2.setAttribute('color', '#c1c1c1');
		figure2.setAttribute('id', 'sphereClick');
		figure2.setAttribute('class', 'button')
		figure2.setAttribute('clickable', {})
		figure2.setAttribute('spherebutton', {active: true})
		//figure2.setAttribute('animation', 'property: object3D.position.y; to: 0.15; dir: alternate; dur: 2000; loop: true')
		baseMenu.appendChild(figure2)
		console.log(figure2);

		let figure3 = document.createElement('a-plane')
		figure3.setAttribute('position', {x:-0.35,y:-0.13,z:0.05});
		figure3.setAttribute('width', '0.2');
		figure3.setAttribute('height', '0.2');
		figure3.setAttribute('color', '#c1c1c1');
		figure3.setAttribute('id', 'planeClick');
		figure3.setAttribute('planebutton', {active: true})
		figure3.setAttribute('class', 'button')
		figure3.setAttribute('clickable', {})
		//figure3.setAttribute('animation', 'property: object3D.position.y; to: 0.15; dir: alternate; dur: 2000; loop: true')
		baseMenu.appendChild(figure3)
		console.log(figure3);

		let figure4 = document.createElement('a-cylinder')
		figure4.setAttribute('position', {x:-0.35,y:0.15,z:0});
		figure4.setAttribute('height', '0.07');
		figure4.setAttribute('radius', '0.08');
		figure4.setAttribute('color', '#c1c1c1');
		figure4.setAttribute('id', 'cylinderClick');
		figure4.setAttribute('cylinderbutton', {active:true})
		figure4.setAttribute('class', 'button')
		figure4.setAttribute('clickable', {})
		figure4.setAttribute('animation', 'property: object3D.position.y; to: 0.15; dir: alternate; dur: 2000; loop: true')
		baseMenu.appendChild(figure4)
		console.log(figure4);

		setClickable()
	},
});
*/
AFRAME.registerComponent('menu',{

	init: function(){
		console.log("dentro del componente menu");
		let baseMenu = document.createElement('a-plane');
		baseMenu.setAttribute('position',{x:0,y:6.55,z:4});
		baseMenu.setAttribute('height', '3');
		baseMenu.setAttribute('width', '5.98');
		baseMenu.setAttribute('src', '#FiguresSelectorImg');
		document.getElementById('menu').appendChild(baseMenu)

		let figure1 = document.createElement('a-plane');
		figure1.setAttribute('position', {x:1.5,y:4,z:4});
		figure1.setAttribute('width', '2.98');
		figure1.setAttribute('height', '2');
		figure1.setAttribute('id', 'cubeClick');
		figure1.setAttribute('class', 'button');
		figure1.setAttribute('clickable', {});
		figure1.setAttribute('src', '#cubeImg');
		document.getElementById('menu').appendChild(figure1)

		let figure2 = document.createElement('a-plane');
		figure2.setAttribute('position', {x:-1.5,y:4,z:4});
		figure2.setAttribute('width', '2.98');
		figure2.setAttribute('height', '2');
		figure2.setAttribute('id', 'cylinderClick');
		figure2.setAttribute('class', 'button');
		figure2.setAttribute('clickable', {});
		figure2.setAttribute('src', '#cylinderImg');
		document.getElementById('menu').appendChild(figure2)

		let figure3 = document.createElement('a-plane');
		figure3.setAttribute('position', {x:-1.5,y:1.96,z:4});
		figure3.setAttribute('width', '2.98');
		figure3.setAttribute('height', '2');
		figure3.setAttribute('id', 'planeClick');
		figure3.setAttribute('class', 'button');
		figure3.setAttribute('clickable', {});
		figure3.setAttribute('src', '#planeImg');
		document.getElementById('menu').appendChild(figure3)

		let figure4 = document.createElement('a-plane');
		figure4.setAttribute('position', {x:1.5,y:1.96,z:4});
		figure4.setAttribute('width', '2.98');
		figure4.setAttribute('height', '2');
		figure4.setAttribute('id', 'sphereClick');
		figure4.setAttribute('class', 'button');
		figure4.setAttribute('clickable', {});
		figure4.setAttribute('src', '#sphereImg');
		document.getElementById('menu').appendChild(figure4)

		setClickable()
	},
});
