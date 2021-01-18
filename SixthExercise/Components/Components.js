let group = false;
document.addEventListener('keypress', function(e) {
  if (e.keyCode === 113 || e.keyCode === 81){
  	let mode = document.getElementById('mode');
  	let text = mode.getAttribute('src')
  	if (group === false ){
		mode.setAttribute('src', '#modeImgGroup');
		//let entityToCopy = document.getElementById('newentity');
		//if (entityToCopy){
			let newEntity = document.createElement('a-entity');
			let podium = document.getElementById('podium');
			let scene = document.querySelector('a-scene');
			newEntity.setAttribute('static-body', {});
			newEntity.setAttribute('class', "remote");
			newEntity.setAttribute('id', "fatherofgroup");
			newEntity.setAttribute('material', 'color:#c1c1c1');
			newEntity.setAttribute('position', podium.getAttribute('position'));
			newEntity.setAttribute('mixin', 'cube');
			scene.appendChild(newEntity);
			console.log('group');
			group = true;
			console.log(group);
		//}

	}else{
  		mode.setAttribute('src', '#modeImgNormal');
  		let father = document.getElementById('fatherofgroup');
  		console.log(father);
  		father.removeAttribute('id');
  		group=false;
		console.log('group');
	}
  }
});


function createEntity(entity){

	let podium = document.getElementById('podium');
	let newEntity = document.createElement('a-entity');
	newEntity.setAttribute('static-body', {});
	newEntity.setAttribute('class', entity + " remote");
	newEntity.setAttribute('removeattributemenu',{} );
	newEntity.setAttribute('posibilityofgroup',{} );
	newEntity.setAttribute('position',{x:0,y:0,z:0} );
	newEntity.setAttribute('id', 'entitytochange')
	newEntity.setAttribute('material', 'color:#c1c1c1');
	newEntity.setAttribute('clickable', {});
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

AFRAME.registerComponent('posibilityofgroup',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			if (group === true) {
				let father = document.getElementById('fatherofgroup');
				console.log(father)
				elX = el.object3D.position.x;
				elY = el.object3D.position.y;
				elZ = el.object3D.position.z;
				console.log(el.object3D.position.x)
				console.log(el.object3D.position.y)
				console.log(el.object3D.position.z)
				let newEl = document.createElement('a-entity');
				newEl.setAttribute('position', {x:elX,y:elY,z:elZ});
				newEl.setAttribute('id', 'newentity');
				newEl.setAttribute('mixin', el.getAttribute('mixin'));
				newEl.setAttribute('scale', el.getAttribute('scale'));
				newEl.setAttribute('material', el.getAttribute('material'));
				newEl.setAttribute('color', el.getAttribute('color'));
				newEl.setAttribute('class', "remote");
				newEl.setAttribute('editable', {});
				console.log(newEl.object3D.position.x);
				console.log(newEl.object3D.position.y);
				console.log(newEl.object3D.position.z);
				console.log('prueba')
				el.remove()
				father.appendChild(newEl)
			}
		});
	}
});

AFRAME.registerComponent('changeattribute',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
            console.log(entityToChange.hasChildNodes());
            console.log(entityToChange.childNodes.length);
            console.log(entityToChange.firstChild);
            entityToChange.setAttribute('material', el.getAttribute('material'))
		});
	}
});

AFRAME.registerComponent('removeattributemenu',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let menu = document.getElementById('attributemenu')
			if (menu){
				menu.remove();
			}
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
		});
	}
});

AFRAME.registerComponent('sizedownx',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			entityToChange.object3D.scale.x -= 1;
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

AFRAME.registerComponent('sizedowny',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			entityToChange.object3D.scale.y -= 1;
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

AFRAME.registerComponent('sizedownz',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			entityToChange.object3D.scale.z -= 1;
			console.log(entityToChange.object3D.scale.z)
		});
	}
});

AFRAME.registerComponent('axisselector',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let menu= document.createElement('a-box');
			menu.setAttribute('src', '#attributeAxisImg');
			menu.setAttribute('position', {x:2.3,y:0.6,z:0});
			menu.setAttribute('width', '1.5');
			menu.setAttribute('height', '1');
			menu.setAttribute('depth', '0.1');

			let att = document.getElementById('attributemenu');
			att.appendChild(menu);

			let sizeChooserUpx = document.createElement('a-text');
			sizeChooserUpx.setAttribute('id', 'buttonupx');
			sizeChooserUpx.setAttribute('class', 'remote');
			sizeChooserUpx.setAttribute('position', '1.63 0.72 0.11');
			sizeChooserUpx.setAttribute('value', '+');
			sizeChooserUpx.setAttribute('sizeupx', {});
			sizeChooserUpx.setAttribute('clickable', {});
			att.appendChild(sizeChooserUpx);

			let sizeChooserDownX = document.createElement('a-text');
			sizeChooserDownX.setAttribute('id', 'buttondownx');
			sizeChooserDownX.setAttribute('class', 'remote');
			sizeChooserDownX.setAttribute('position', '1.9 0.72 0.11');
			sizeChooserDownX.setAttribute('value', '-');
			sizeChooserDownX.setAttribute('sizedownx', {});
			sizeChooserDownX.setAttribute('clickable', {});
			att.appendChild(sizeChooserDownX);


			let sizeChooserUpY = document.createElement('a-text');
			sizeChooserUpY.setAttribute('id', 'buttonupY');
			sizeChooserUpY.setAttribute('class', 'remote');
			sizeChooserUpY.setAttribute('position', '2.05 0.4 0.11');
			sizeChooserUpY.setAttribute('value', '+');
			sizeChooserUpY.setAttribute('sizeupy', {});
			sizeChooserUpY.setAttribute('clickable', {});
			att.appendChild(sizeChooserUpY);

			let sizeChooserDownY = document.createElement('a-text');
			sizeChooserDownY.setAttribute('id', 'buttondowny');
			sizeChooserDownY.setAttribute('class', 'remote');
			sizeChooserDownY.setAttribute('position', '2.35 0.4 0.11');
			sizeChooserDownY.setAttribute('value', '-');
			sizeChooserDownY.setAttribute('sizedownY', {});
			sizeChooserDownY.setAttribute('clickable', {});
			att.appendChild(sizeChooserDownY);

			let sizeChooserUpZ = document.createElement('a-text');
			sizeChooserUpZ.setAttribute('id', 'buttonupZ');
			sizeChooserUpZ.setAttribute('class', 'remote');
			sizeChooserUpZ.setAttribute('position', '2.5 0.72 0.11');
			sizeChooserUpZ.setAttribute('value', '+');
			sizeChooserUpZ.setAttribute('sizeupz', {});
			sizeChooserUpZ.setAttribute('clickable', {});
			att.appendChild(sizeChooserUpZ);

			let sizeChooserDownZ = document.createElement('a-text');
			sizeChooserDownZ.setAttribute('id', 'buttondownz');
			sizeChooserDownZ.setAttribute('class', 'remote');
			sizeChooserDownZ.setAttribute('position', '2.8 0.72 0.11');
			sizeChooserDownZ.setAttribute('value', '-');
			sizeChooserDownZ.setAttribute('sizedownz', {});
			sizeChooserDownZ.setAttribute('clickable', {});
			att.appendChild(sizeChooserDownZ);
		});
	}
});

function sliderActionX(evt) {
	var entity = document.querySelector('#entitytochange');

	if(evt.detail.intersection.point.x >= 0){
		evt.detail.intersection.point.x = evt.detail.intersection.point.x*2;
	}
	//entity.object3D.scale.x = 1+evt.detail.intersection.point.x;
	/*let textX = document.getElementById('textx');
			console.log(textX.getAttribute('value'));
			textX.setAttribute('value',entity.object3D.scale.x )*/
	entity.setAttribute('scale', (2+evt.detail.intersection.point.x) + " " +(2+evt.detail.intersection.point.x) + " " +(2+evt.detail.intersection.point.x));
}

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
			let colors = data.colors;
			console.log(el.getAttribute('class'));

			let attributesSelector= document.createElement('a-box');
			attributesSelector.setAttribute('src', '#attributeSelectorImg');
			attributesSelector.setAttribute('id', 'attributemenu');
			attributesSelector.setAttribute('position', {x:6,y:4,z:5});
			attributesSelector.setAttribute('width', '3');
			attributesSelector.setAttribute('height', '2.2');
			attributesSelector.setAttribute('depth', '0.1');

			let axisBtn= document.createElement('a-sphere');
			axisBtn.setAttribute('id', 'attributemenu');
			axisBtn.setAttribute('axisselector', "");
			axisBtn.setAttribute('position', {x:1.05,y:0.8,z:0});
			axisBtn.setAttribute('radius', '0.1');
			axisBtn.setAttribute('color', 'white');
			axisBtn.setAttribute('clickable', "");
			axisBtn.setAttribute('static-body', {});
			axisBtn.setAttribute('class', " remote");

			let sliderX = document.createElement('a-gui-slider');
			sliderX.setAttribute('id', "slider");
			sliderX.setAttribute('class', "remote");
			sliderX.setAttribute('width', "2.5");
			sliderX.setAttribute('height', "1.5");
			sliderX.setAttribute('percent', "0.2");
			sliderX.setAttribute('gui-interactable', "");
			sliderX.setAttribute('gui-item', "");
			sliderX.setAttribute('gui-slider', "");
			sliderX.setAttribute('position', "0 0.35 0.049");
			sliderX.setAttribute('clickable', "");
			sliderX.setAttribute('hoverable', "");
			sliderX.setAttribute('onclick', "sliderActionX");
			sliderX.setAttribute('onhover', "sliderActionX");
			sliderX.setAttribute('border-color', "white");
			sliderX.setAttribute('background-color', "#8a8a8a");
			sliderX.setAttribute('active-color', "#f5cf5d");

			let scene = document.querySelector('a-scene');
			scene.appendChild(attributesSelector);
			attributesSelector.appendChild(sliderX);
			attributesSelector.appendChild(axisBtn);



			for (let color of colors) {
				let colorButton = document.createElement('a-entity');
				if (el.getAttribute('class').search('sphere') >= 0) {
					colorButton.setAttribute('geometry', {primitive: 'sphere', radius: 0.1});
					colorButton.setAttribute('position', ((colors.indexOf(color) * 0.23) - 1.27) + " -0.8 0.01");
				} else if (el.getAttribute('class').search('plane') >= 0) {
					colorButton.setAttribute('geometry', {primitive: 'plane', width: 0.1, height: 0.1});
					colorButton.setAttribute('position', ((colors.indexOf(color) * 0.23) - 1.27) + " -0.8 0.11");
				} else if (el.getAttribute('class').search('cube') >= 0) {
					colorButton.setAttribute('geometry', {
						primitive: 'box',
						width: 0.1,
						height: 0.1,
						depth: 0.1
					});
					colorButton.setAttribute('position', ((colors.indexOf(color) * 0.23) - 1.27) + " -0.8 0.01");
				} else {
					colorButton.setAttribute('geometry', {primitive: 'cylinder', radius: 0.1, height: 0.1});
					colorButton.setAttribute('position', ((colors.indexOf(color) * 0.23) - 1.27) + " -0.8 0.01");
				}
				colorButton.setAttribute('class', 'button');
				//colorButton.setAttribute('id', 'colours');
				colorButton.setAttribute('material', 'color :' + color);
				colorButton.setAttribute('clickable', {});
				colorButton.setAttribute('changeattribute', {})
				attributesSelector.appendChild(colorButton)

				 let sizex = document.createElement('a-text');
                sizex.setAttribute('id', 'textx');
                sizex.setAttribute('position', '-0.35 2.25 1');
                attributesSelector.appendChild(sizex);
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
		podium.setAttribute('position',{x:3.7,y:4,z:5});
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
		let baseMenu = document.createElement('a-box');
		baseMenu.setAttribute('position',{x:-0.95,y:5.5,z:4});
		baseMenu.setAttribute('id','basemenu');
		baseMenu.setAttribute('height', '1');
		baseMenu.setAttribute('depth', '0.2');
		baseMenu.setAttribute('width', '2.1');
		baseMenu.setAttribute('color', 'black');
		document.getElementById('menu').appendChild(baseMenu)
		let baseMenuImg = document.createElement('a-plane');
		baseMenuImg.setAttribute('position',{x:0,y:0,z:0.11});
		baseMenuImg.setAttribute('height', '1');
		baseMenuImg.setAttribute('width', '2');
		baseMenuImg.setAttribute('src', '#FiguresSelectorImg');
		document.getElementById('basemenu').appendChild(baseMenuImg)

		let figure1 = document.createElement('a-box');
		figure1.setAttribute('position', {x:-0.4,y:4.4,z:4});
		figure1.setAttribute('width', '1');
		figure1.setAttribute('height', '1');
		figure1.setAttribute('depth', '0.2');
		figure1.setAttribute('id', 'figure1');
		document.getElementById('menu').appendChild(figure1);
		let figure11 = document.createElement('a-plane');
		figure11.setAttribute('position', {x:0,y:0,z:0.11});
		figure11.setAttribute('width', '1');
		figure11.setAttribute('height', '1');
		figure11.setAttribute('src', '#cubeImg');
		document.getElementById('figure1').appendChild(figure11)
		let figure12 = document.createElement('a-box');
		figure12.setAttribute('position', {x:0,y:-0.2,z:0.3});
		figure12.setAttribute('width', '0.3');
		figure12.setAttribute('depth', '0.3');
		figure12.setAttribute('height', '0.3');
		figure12.setAttribute('id', 'cubeClick');
		figure12.setAttribute('class', ' cube button');
		figure12.setAttribute('animation', 'property:rotation;to:0 360 180;loop:true;dur:20000')
		figure12.setAttribute('clickable', {});
		figure12.setAttribute('editentity',{} );
		figure12.setAttribute('color','#c1c1c1' );
		document.getElementById('figure1').appendChild(figure12)


		let figure2 = document.createElement('a-box');
		figure2.setAttribute('position', {x:-1.5,y:4.4,z:4});
		figure2.setAttribute('width', '1');
		figure2.setAttribute('height', '1');
		figure2.setAttribute('depth', '0.2');
		figure2.setAttribute('id', 'figure2');
		document.getElementById('menu').appendChild(figure2);
		let figure21 = document.createElement('a-plane');
		figure21.setAttribute('position', {x:0,y:0,z:0.11});
		figure21.setAttribute('width', '1');
		figure21.setAttribute('height', '1');
		figure21.setAttribute('src', '#cylinderImg');
		document.getElementById('figure2').appendChild(figure21);
		let figure22 = document.createElement('a-cylinder');
		figure22.setAttribute('position', {x:0,y:-0.2,z:0.3});
		figure22.setAttribute('radius', '0.2');
		figure22.setAttribute('height', '0.3');
		figure22.setAttribute('id', 'cylinderClick');
		figure22.setAttribute('class', 'cylinder button');
		figure22.setAttribute('animation', 'property:rotation;to:0 360 180;loop:true;dur:20000')
		figure22.setAttribute('clickable', {});
		figure22.setAttribute('editentity',{} );
		figure22.setAttribute('color','#c1c1c1' );
		document.getElementById('figure2').appendChild(figure22);

		let figure3 = document.createElement('a-box');
		figure3.setAttribute('position', {x:-1.5,y:3.3,z:4});
		figure3.setAttribute('width', '1');
		figure3.setAttribute('height', '1');
		figure3.setAttribute('depth', '0.2');
		figure3.setAttribute('id', 'figure3');
		document.getElementById('menu').appendChild(figure3);
		let figure31 = document.createElement('a-plane');
		figure31.setAttribute('position', {x:0,y:0,z:0.11});
		figure31.setAttribute('width', '1');
		figure31.setAttribute('height', '1');
		figure31.setAttribute('src', '#planeImg');
		document.getElementById('figure3').appendChild(figure31);
		let figure32 = document.createElement('a-plane');
		figure32.setAttribute('position', {x:0,y:-0.15,z:0.31});
		figure32.setAttribute('width', '0.3');
		figure32.setAttribute('height', '0.3');
		figure32.setAttribute('id', 'planeClick');
		figure32.setAttribute('class', 'plane button');
		figure32.setAttribute('clickable', {});
		figure32.setAttribute('editentity',{} );
		figure32.setAttribute('color','#c1c1c1' );
		figure32.setAttribute('animation', 'property:rotation;to:0 0 180;loop:true;dur:20000');
		document.getElementById('figure3').appendChild(figure32);


		let figure4 = document.createElement('a-box');
		figure4.setAttribute('position', {x:-0.4,y:3.3,z:4});
		figure4.setAttribute('width', '1');
		figure4.setAttribute('height', '1');
		figure4.setAttribute('depth', '0.2');
		figure4.setAttribute('id', 'figure4');
		document.getElementById('menu').appendChild(figure4);
		let figure41 = document.createElement('a-plane');
		figure41.setAttribute('position', {x:0,y:0,z:0.11});
		figure41.setAttribute('width', '1');
		figure41.setAttribute('height', '1');
		figure41.setAttribute('src', '#sphereImg');
		document.getElementById('figure4').appendChild(figure41);
		let figure42 = document.createElement('a-sphere');
		figure42.setAttribute('position', {x:0,y:-0.15,z:0.31});
		figure42.setAttribute('radius', '0.2');
		figure42.setAttribute('id', 'sphereClick');
		figure42.setAttribute('class', 'sphere button');
		figure42.setAttribute('clickable', {});
		figure42.setAttribute('editentity',{} );
		figure42.setAttribute('color','#c1c1c1' );
		figure42.setAttribute('animation', 'property:rotation;to:0 360 180;loop:true;dur:20000');
		document.getElementById('figure4').appendChild(figure42)

		let fig = document.createElement('a-box');
		fig.setAttribute('position', {x:3.7,y:5.4,z:4});
		fig.setAttribute('width', '2.1');
		fig.setAttribute('height', '0.5');
		fig.setAttribute('depth', '0.2');
		fig.setAttribute('id', 'fig');
		fig.setAttribute('color', 'black');
		document.getElementById('menu').appendChild(fig);
		let fig31 = document.createElement('a-plane');
		fig31.setAttribute('position', {x:0,y:0,z:0.11});
		fig31.setAttribute('width', '2');
		fig31.setAttribute('height', '0.5');
		fig31.setAttribute('src', '#figureSelectedImg');
		document.getElementById('fig').appendChild(fig31);

		let figure5 = document.createElement('a-cylinder');
		figure5.setAttribute('position', {x:3.7,y:4,z:4.1});
		figure5.setAttribute('rotation', {x:90,y:0,z:0});
		figure5.setAttribute('radius', '0.8');
		figure5.setAttribute('height', '0.05');
		figure5.setAttribute('color', '#92D95D')
		document.getElementById('menu').appendChild(figure5);
		let figure6 = document.createElement('a-cylinder');
		figure6.setAttribute('position', {x:3.7,y:4,z:4.15});
		figure6.setAttribute('rotation', {x:90,y:0,z:0});
		figure6.setAttribute('radius', '0.7');
		figure6.setAttribute('height', '0.05');
		figure6.setAttribute('color', '#F7B739')
		document.getElementById('menu').appendChild(figure6);
		let figure7 = document.createElement('a-cylinder');
		figure7.setAttribute('position', {x:3.7,y:4,z:4.20});
		figure7.setAttribute('rotation', {x:90,y:0,z:0});
		figure7.setAttribute('radius', '0.6');
		figure7.setAttribute('height', '0.05');
		figure7.setAttribute('color', '#FF1247')
		document.getElementById('menu').appendChild(figure7);
		let figure8 = document.createElement('a-cylinder');
		figure8.setAttribute('position', {x:3.7,y:4,z:4.25});
		figure8.setAttribute('rotation', {x:90,y:0,z:0});
		figure8.setAttribute('radius', '0.5');
		figure8.setAttribute('height', '0.05');
		figure8.setAttribute('color', '#EE157A')
		document.getElementById('menu').appendChild(figure8);
		let figure9 = document.createElement('a-cylinder');
		figure9.setAttribute('position', {x:3.7,y:4,z:4.3});
		figure9.setAttribute('rotation', {x:90,y:0,z:0});
		figure9.setAttribute('radius', '0.4');
		figure9.setAttribute('height', '0.05');
		figure9.setAttribute('color', '#BC36F6')
		document.getElementById('menu').appendChild(figure9);
		let figure10 = document.createElement('a-cylinder');
		figure10.setAttribute('position', {x:3.7,y:4,z:4.35});
		figure10.setAttribute('rotation', {x:90,y:0,z:0});
		figure10.setAttribute('radius', '0.3');
		figure10.setAttribute('height', '0.05');
		figure10.setAttribute('color', '#2bb5ff');
		document.getElementById('menu').appendChild(figure10);
		setClickable()
	},
});
