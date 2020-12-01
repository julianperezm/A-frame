
document.addEventListener('keypress', function(e) {
  if (e.keyCode === 113 || e.keyCode === 81){
  	let mode = document.getElementById('mode');
  	let text = mode.getAttribute('src')
  	if (text === '#modeImgNormal' ){
		mode.setAttribute('src', '#modeImgGroup');
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
  		mode.setAttribute('src', '#modeImgNormal');
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
	newEntity.setAttribute('removeattributemenu',{} );
	newEntity.setAttribute('id', 'entitytochange')
	newEntity.setAttribute('material', 'color:#c1c1c1');
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
			let entityToChange = document.getElementById('entitytochange')
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

AFRAME.registerComponent('removeattributemenu',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let menu = document.getElementById('attributemenu')
			menu.remove();
			el.removeAttribute('id')
		});
	}
});

AFRAME.registerComponent('sizeupx',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			entityToChange.object3D.scale.x += 1;
			let textX = document.getElementById('textx')
			console.log(textX.getAttribute('value'))
			textX.setAttribute('value',entityToChange.object3D.scale.x )
		});
	}
});

AFRAME.registerComponent('sizedownx',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			entityToChange.object3D.scale.x -= 1;
			let textX = document.getElementById('textx')
			console.log(textX.getAttribute('value'))
			textX.setAttribute('value',entityToChange.object3D.scale.x )
		});
	}
});

AFRAME.registerComponent('sizeupy',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			entityToChange.object3D.scale.y += 1;
		});
	}
});

AFRAME.registerComponent('sizeupz',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			entityToChange.object3D.scale.z += 1;
			console.log(entityToChange.object3D.scale.z)

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
			let entityToChange = document.getElementById('entitytochange')
			let colors = data.colors;
			console.log(el.getAttribute('class'));

			let attributesSelector= document.createElement('a-plane');
			attributesSelector.setAttribute('src', '#attributeSelectorImg');
			attributesSelector.setAttribute('id', 'attributemenu');
			attributesSelector.setAttribute('position', {x:11.1,y:4,z:4});
			attributesSelector.setAttribute('width', '6');
			attributesSelector.setAttribute('height', '6');

			let scene = document.querySelector('a-scene')
			scene.appendChild(attributesSelector)

			for (let color of colors) {
				let colorButton = document.createElement('a-entity');
				if (el.getAttribute('class').search('sphere') >= 0) {
					colorButton.setAttribute('geometry', {primitive: 'sphere', radius: 0.25});
				} else if (el.getAttribute('class').search('plane') >= 0) {
					colorButton.setAttribute('geometry', {primitive: 'plane', width: 0.25, height: 0.25});
				} else if (el.getAttribute('class').search('cube') >= 0) {
					colorButton.setAttribute('geometry', {
						primitive: 'box',
						width: 0.25,
						height: 0.25,
						depth: 0.25
					});
				} else {
					colorButton.setAttribute('geometry', {primitive: 'cylinder', radius: 0.25, height: 0.25});
				}
				colorButton.setAttribute('class', 'button');
				//colorButton.setAttribute('id', 'colours');
				colorButton.setAttribute('position', ((colors.indexOf(color) * 0.45) - 2.5) + " -1 0.01");
				colorButton.setAttribute('material', 'color :' + color);
				colorButton.setAttribute('clickable', {});
				colorButton.setAttribute('changeattribute', {})
				attributesSelector.appendChild(colorButton)


                let sizeChooserUpx = document.createElement('a-text');
                sizeChooserUpx.setAttribute('id', 'buttonupx');
                sizeChooserUpx.setAttribute('class', 'remote');
                sizeChooserUpx.setAttribute('position', '-2.11 0.54 0');
                sizeChooserUpx.setAttribute('scale', '2.5 2.5 2.5');
                sizeChooserUpx.setAttribute('value', '+');
                sizeChooserUpx.setAttribute('sizeupx', {});
                sizeChooserUpx.setAttribute('clickable', {});
                attributesSelector.appendChild(sizeChooserUpx);

                let sizeChooserDownY = document.createElement('a-text');
                sizeChooserDownY.setAttribute('id', 'buttondownx');
                sizeChooserDownY.setAttribute('class', 'remote');
                sizeChooserDownY.setAttribute('position', '-1.45 0.57 0');
                sizeChooserDownY.setAttribute('scale', '3 3 3');
                sizeChooserDownY.setAttribute('value', '-');
                sizeChooserDownY.setAttribute('sizedownx', {});
                sizeChooserDownY.setAttribute('clickable', {});
                attributesSelector.appendChild(sizeChooserDownY);

                let sizex = document.createElement('a-text');
                sizex.setAttribute('id', 'textx');
                sizex.setAttribute('position', '-1.725 0 0');
                sizex.setAttribute('scale', '1.5 1.5 1.5');
                attributesSelector.appendChild(sizex);


                let sizeChooserUpY = document.createElement('a-text');
                sizeChooserUpY.setAttribute('id', 'buttonupY');
                sizeChooserUpY.setAttribute('class', 'remote');
                sizeChooserUpY.setAttribute('position', '-0.4 0.54 0');
                sizeChooserUpY.setAttribute('scale', '2.5 2.5 2.5');
                sizeChooserUpY.setAttribute('value', '+');
                sizeChooserUpY.setAttribute('sizeupy', {});
                sizeChooserUpY.setAttribute('clickable', {});
                attributesSelector.appendChild(sizeChooserUpY);

                let sizeChooserUpZ = document.createElement('a-text');
                sizeChooserUpZ.setAttribute('id', 'buttonupZ');
                sizeChooserUpZ.setAttribute('class', 'remote');
                sizeChooserUpZ.setAttribute('position', '1.3 0.54 0');
                sizeChooserUpZ.setAttribute('scale', '2.5 2.5 2.5');
                sizeChooserUpZ.setAttribute('value', '+');
                sizeChooserUpZ.setAttribute('sizeupz', {});
                sizeChooserUpZ.setAttribute('clickable', {});
                attributesSelector.appendChild(sizeChooserUpZ);

            }
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
		podium.setAttribute('position',{x:6.8,y:2.98,z:4.2});
		podium.setAttribute('radius', 0.01);
		podium.setAttribute('color', 'red');
		podium.setAttribute('id', 'podium');

		console.log(podium);
		//document.getElementById('podium').appendChild(podium)
		let j = document.getElementsByClassName('podium');
		j[0].appendChild(podium)
	},
});

AFRAME.registerComponent('menu',{

	init: function(){
		console.log("dentro del componente menu");
		let baseMenu = document.createElement('a-plane');
		baseMenu.setAttribute('position',{x:2.5,y:7.55,z:4});
		baseMenu.setAttribute('height', '5');
		baseMenu.setAttribute('width', '11');
		baseMenu.setAttribute('src', '#FiguresSelectorImg');
		document.getElementById('menu').appendChild(baseMenu)

		let figure1 = document.createElement('a-plane');
		figure1.setAttribute('position', {x:1.5,y:4,z:4});
		figure1.setAttribute('width', '2.98');
		figure1.setAttribute('height', '2');
		figure1.setAttribute('id', 'cubeClick');
		figure1.setAttribute('class', ' cube button');
		figure1.setAttribute('clickable', {});
		figure1.setAttribute('src', '#cubeImg');
		figure1.setAttribute('editentity',{} );
		document.getElementById('menu').appendChild(figure1)

		let figure2 = document.createElement('a-plane');
		figure2.setAttribute('position', {x:-1.5,y:4,z:4});
		figure2.setAttribute('width', '2.98');
		figure2.setAttribute('height', '2');
		figure2.setAttribute('id', 'cylinderClick');
		figure2.setAttribute('class', 'cylinder button');
		figure2.setAttribute('clickable', {});
		figure2.setAttribute('src', '#cylinderImg');
		figure2.setAttribute('editentity',{} );
		document.getElementById('menu').appendChild(figure2)

		let figure3 = document.createElement('a-plane');
		figure3.setAttribute('position', {x:-1.5,y:1.96,z:4});
		figure3.setAttribute('width', '2.98');
		figure3.setAttribute('height', '2');
		figure3.setAttribute('id', 'planeClick');
		figure3.setAttribute('class', 'plane button');
		figure3.setAttribute('clickable', {});
		figure3.setAttribute('src', '#planeImg');
		figure3.setAttribute('editentity',{} );
		document.getElementById('menu').appendChild(figure3)

		let figure4 = document.createElement('a-plane');
		figure4.setAttribute('position', {x:1.5,y:1.96,z:4});
		figure4.setAttribute('width', '2.98');
		figure4.setAttribute('height', '2');
		figure4.setAttribute('id', 'sphereClick');
		figure4.setAttribute('class', 'sphere button');
		figure4.setAttribute('clickable', {});
		figure4.setAttribute('editentity',{} );
		figure4.setAttribute('src', '#sphereImg');
		document.getElementById('menu').appendChild(figure4)

		let figure5 = document.createElement('a-plane');
		figure5.setAttribute('position', {x:5.53,y:2.98,z:4});
		figure5.setAttribute('width', '5');
		figure5.setAttribute('height', '4.05');
		figure5.setAttribute('src', '#figureSelectedImg')
		document.getElementById('menu').appendChild(figure5)

		setClickable()
	},
});
