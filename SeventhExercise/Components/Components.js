let group = false;
let created = false;
let hasVehiclesGltfs= false;
let hasVehicles= false;
let hasPlants= false;
let hasPlantsGltfs= false;
let hasAnimals= false;
let hasAnimalsGltfs = false;
let hasGadgets= false;
let hasGadgetsGltfs = false;

function coloredOnSelect() {
	let showeditor = document.getElementById('showeditor');
	let showhandler = document.getElementById('showhandler');
	//let cubeclick = document.getElementById('cubeClick');

	showeditor.addEventListener('raycaster-intersected', function () {
		showeditor.setAttribute('material',"color:#adadad; opacity: 0.5");
	});
	showeditor.addEventListener('raycaster-intersected-cleared', function () {
		showeditor.setAttribute('material',"color:white; opacity: 0.25");
	});
	showhandler.addEventListener('raycaster-intersected', function () {
		showhandler.setAttribute('material',"color:#adadad; opacity: 0.25");
	});
	showhandler.addEventListener('raycaster-intersected-cleared', function () {
		showhandler.setAttribute('material',"color:white; opacity: 0.25");
	});
}

AFRAME.registerComponent('handlereditor',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let mode = document.getElementById('mode');

			let text = mode.getAttribute('src')
			if (group === false ){
				mode.setAttribute('src', '#modeImgGroup');
				let newEntity = document.createElement('a-box');
				let podium = document.getElementById('podium');
				console.log(podium)
				let scene = document.querySelector('a-scene');
				newEntity.setAttribute('static-body', {});
				newEntity.setAttribute('class', "remote");
				newEntity.setAttribute('mixin', 'cube');
				newEntity.setAttribute('src', '#handlerImg');
				newEntity.setAttribute('id', "fatherofgroup");
				newEntity.setAttribute('position', podium.getAttribute('position'));
				scene.appendChild(newEntity);
				console.log('group');
				group = true;
				console.log(group);
			}else{
				mode.setAttribute('src', '#modeImgNormal');
				let newEl = document.getElementsByClassName('newen');
				for (let elem of newEl){
					elem.removeAttribute('animation');
				}
				//console.log(newEl)
				//console.log(newEl)
				let father = document.getElementById('fatherofgroup');
				console.log(father);
				father.removeAttribute('id');
				group=false;
				console.log('group');
	}
		});
	}
});

document.addEventListener('keypress', function(e) {
  if (e.keyCode === 113 || e.keyCode === 81){
  	let mode = document.getElementById('mode');

  	let text = mode.getAttribute('src')
  	if (group === false ){
		mode.setAttribute('src', '#modeImgGroup');
		//let entityToCopy = document.getElementById('newentity');
		//if (entityToCopy){
		//<a-entity class="remote" gltf-model="#handler" position="3.7 0.3 4.4"  scale="0.003 0.008 0.003" rotation="0 90 0" grabbable stretchable ></a-entity>
		let newEntity = document.createElement('a-box');
		let podium = document.getElementById('podium');
		let scene = document.querySelector('a-scene');
		newEntity.setAttribute('static-body', {});
		newEntity.setAttribute('class', "remote");
		newEntity.setAttribute('mixin', 'cube');
		newEntity.setAttribute('src', '#handlerImg');
		newEntity.setAttribute('id', "fatherofgroup");
		newEntity.setAttribute('position', podium.getAttribute('position'));
		scene.appendChild(newEntity);
		console.log('group');
		group = true;
		console.log(group);
		//}

	}else{
  		mode.setAttribute('src', '#modeImgNormal');
		let newEl = document.getElementsByClassName('newen');
		for (let elem of newEl){
			elem.removeAttribute('animation');
		}
		//console.log(newEl)
		//console.log(newEl)
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
	//let podiumEntity = document.querySelector('#entitytochange');

	if (created){
		let elToChange = document.getElementById('entitytochange');
		let menu = document.getElementById('attributemenu');
		console.log(menu)
			if (menu){
				menu.remove();
			}
			console.log("Dentro de posibilidad de cambio");
			console.log(elToChange);
			if (elToChange){
				elToChange.remove()
			}
	}

	let newEntity = document.createElement('a-entity');
	newEntity.setAttribute('static-body', {});
	newEntity.setAttribute('class', entity + " remote");
	newEntity.setAttribute('removeattributemenu',{} );
	newEntity.setAttribute('posibilityofgroup',{} );
	newEntity.setAttribute('position',{x:0,y:0,z:0} );
	newEntity.setAttribute('id', 'entitytochange')
	newEntity.setAttribute('material', 'color:#c1c1c1');
	switch (entity) {
		case 'cube':
			newEntity.setAttribute('mixin', 'cube');
			break;
		case 'sphere':
			newEntity.setAttribute('mixin', 'sphere');
			break;
		case 'plane':
			newEntity.setAttribute('mixin', 'plane');
			break;
		case 'cylinder':
			newEntity.setAttribute('mixin', 'cylinder');
			break;
		case 'car1':
			newEntity.setAttribute('gltf-model', '#model3');
			newEntity.setAttribute('scale',{x:0.001,y:0.001,z:0.001});
			newEntity.setAttribute('grabbable',{});
			newEntity.setAttribute('stretchable',{});
			newEntity.setAttribute('hoverable',{});
			newEntity.setAttribute('draggable',{});
			newEntity.setAttribute('droppable',{});
			newEntity.setAttribute('shadow',{});
			console.log(newEntity)
			break;
		case 'car2':
			newEntity.setAttribute('gltf-model', '#cybertruck');
			newEntity.setAttribute('scale',{x:0.003,y:0.003,z:0.003});
			newEntity.setAttribute('grabbable',{});
			newEntity.setAttribute('stretchable',{});
			newEntity.setAttribute('hoverable',{});
			newEntity.setAttribute('draggable',{});
			newEntity.setAttribute('droppable',{});
			newEntity.setAttribute('shadow',{});
			console.log(newEntity)
			break;
		case 'car3':
			newEntity.setAttribute('gltf-model', '#lamborghini');
			newEntity.setAttribute('scale',{x:0.002,y:0.002,z:0.002});
			newEntity.setAttribute('grabbable',{});
			newEntity.setAttribute('stretchable',{});
			newEntity.setAttribute('hoverable',{});
			newEntity.setAttribute('draggable',{});
			newEntity.setAttribute('droppable',{});
			newEntity.setAttribute('shadow',{});
			console.log(newEntity)
			break;
		case 'tree1':
			newEntity.setAttribute('gltf-model', '#trees');
			newEntity.setAttribute('scale',{x:0.001,y:0.001,z:0.001});
			newEntity.setAttribute('grabbable',{});
			newEntity.setAttribute('stretchable',{});
			newEntity.setAttribute('hoverable',{});
			newEntity.setAttribute('draggable',{});
			newEntity.setAttribute('droppable',{});
			newEntity.setAttribute('shadow',{});
			break;
		case 'animal1':
			newEntity.setAttribute('gltf-model', '#shiba');
			newEntity.setAttribute('scale',{x:0.1,y:0.1,z:0.1});
			newEntity.setAttribute('grabbable',{});
			newEntity.setAttribute('stretchable',{});
			newEntity.setAttribute('hoverable',{});
			newEntity.setAttribute('draggable',{});
			newEntity.setAttribute('droppable',{});
			newEntity.setAttribute('shadow',{});
			break;
		case 'gadget1':
			newEntity.setAttribute('gltf-model', '#iMac');
			newEntity.setAttribute('scale',{x:0.8,y:0.8,z:0.8});
			newEntity.setAttribute('rotation',{x:0,y:180,z:0});
			newEntity.setAttribute('grabbable',{});
			newEntity.setAttribute('stretchable',{});
			newEntity.setAttribute('hoverable',{});
			newEntity.setAttribute('draggable',{});
			newEntity.setAttribute('droppable',{});
			newEntity.setAttribute('shadow',{});
			break;
	}

	created = true;
	podium.appendChild(newEntity)
}

function setClickable(){
	if (hasVehiclesGltfs) {
		let car1 = document.getElementById('car1');
		let car2 = document.getElementById('car2');
		let car3 = document.getElementById('car3');

		console.log('dentro de clickable con vehiclesgltfs')
		//let tree1 = document.querySelector('#tree1');

		car1.addEventListener('grab-start', function () {
			createEntity('car1')
			console.log('dentro2')
		});
		car1.addEventListener('raycaster-intersected', function () {
			car1.setAttribute('scale', {x: 0.00016, y: 0.00016, z: 0.00016});
		});
		car1.addEventListener('raycaster-intersected-cleared', function () {
			car1.setAttribute('scale', {x: 0.00015, y: 0.00015, z: 0.00015});
		});
		car2.addEventListener('grab-start', function () {
			createEntity('car2')
			console.log('dentro2')
		});
		car2.addEventListener('raycaster-intersected', function () {
			car2.setAttribute('scale', {x: 0.0005, y: 0.0005, z: 0.0005});
		});
		car2.addEventListener('raycaster-intersected-cleared', function () {
			car2.setAttribute('scale', {x: 0.0004, y: 0.0004, z: 0.0004});
		});
		car3.addEventListener('grab-start', function () {
			createEntity('car3')
			console.log('dentro2')
		});
		car3.addEventListener('raycaster-intersected', function () {
			car3.setAttribute('scale', {x: 0.0003, y: 0.0003, z: 0.0003});
		});
		car3.addEventListener('raycaster-intersected-cleared', function () {
			car3.setAttribute('scale', {x: 0.0002, y: 0.0002, z: 0.0002});
		});
		hasVehiclesGltfs = false;
	}else if(hasPlantsGltfs){
		let tree1 = document.getElementById('tree1');
		console.log('dentro de clickable con tree')
		tree1.addEventListener('grab-start', function(){
			createEntity('tree1')
			console.log('dentro2')
		});
		tree1.addEventListener('raycaster-intersected', function () {
			tree1.setAttribute('scale',{x:0.00016,y:0.00016,z:0.00016});
		});
		tree1.addEventListener('raycaster-intersected-cleared', function () {
			tree1.setAttribute('scale',{x:0.00015,y:0.00015,z:0.00015});
		});
		hasPlantsGltfs = false;
	}else if(hasAnimalsGltfs){
		let animal1 = document.getElementById('animal1');
		console.log('dentro de clickable con animal')
		animal1.addEventListener('grab-start', function(){
			createEntity('animal1')
			console.log('dentro2')
		});
		animal1.addEventListener('raycaster-intersected', function () {
			animal1.setAttribute('scale',{x:0.008,y:0.008,z:0.008});
		});
		animal1.addEventListener('raycaster-intersected-cleared', function () {
			animal1.setAttribute('scale',{x:0.007,y:0.007,z:0.007});
		});
		hasAnimalsGltfs = false;

	}else if(hasGadgetsGltfs){
		let gadget1 = document.getElementById('gadget1');
		console.log('dentro de clickable con animal')
		gadget1.addEventListener('grab-start', function(){
			createEntity('gadget1')
			console.log('dentro2')
		});
		gadget1.addEventListener('raycaster-intersected', function () {
			gadget1.setAttribute('scale',{x:0.06,y:0.06,z:0.06});
		});
		gadget1.addEventListener('raycaster-intersected-cleared', function () {
			gadget1.setAttribute('scale',{x:0.05,y:0.05,z:0.05});
		});
		hasGadgetsGltfs = false;
	}else{
		console.log('dentro de clickable')
		let cubeFig = document.querySelector('#cubeClick')
		console.log(cubeFig);
		let sphereFig = document.querySelector('#sphereClick')
		//let planeFig = document.querySelector('#planeClick')
		let cylinderFig = document.querySelector('#cylinderClick')


		cubeFig.addEventListener('grab-start', function(){
			createEntity('cube')
			console.log('dentro1')
		});
		cubeFig.addEventListener('raycaster-intersected', function () {
			cubeFig.setAttribute('scale',{x:1.5,y:1.5,z:1.5});
		});
		cubeFig.addEventListener('raycaster-intersected-cleared', function () {
			cubeFig.setAttribute('scale',{x:1,y:1,z:1});
		});

		sphereFig.addEventListener('grab-start', function(){
			createEntity('sphere')
		});
		sphereFig.addEventListener('raycaster-intersected', function () {
			sphereFig.setAttribute('scale',{x:1.5,y:1.5,z:1.5});
		});
		sphereFig.addEventListener('raycaster-intersected-cleared', function () {
			sphereFig.setAttribute('scale',{x:1,y:1,z:1});
		});
/*
		planeFig.addEventListener('grab-start', function(){
			createEntity('plane')
		});
		planeFig.addEventListener('raycaster-intersected', function () {
			planeFig.setAttribute('scale',{x:1.5,y:1.5,z:1.5});
		});
		planeFig.addEventListener('raycaster-intersected-cleared', function () {
			planeFig.setAttribute('scale',{x:1,y:1,z:1});
		});
 */
		cylinderFig.addEventListener('grab-start', function(){
			createEntity('cylinder')
			console.log('dentro2')
		});
		cylinderFig.addEventListener('raycaster-intersected', function () {
			cylinderFig.setAttribute('scale',{x:1.5,y:1.5,z:1.5});
		});
		cylinderFig.addEventListener('raycaster-intersected-cleared', function () {
			cylinderFig.setAttribute('scale',{x:1,y:1,z:1});
		});

	}
}


 AFRAME.registerComponent('wireframe', {
   dependencies: ['material'],
   init: function () {
     this.el.components.material.material.wireframe = true;
   }
 });


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
				newEl.setAttribute('animation', 'property: object3D.position.y; to: 0.1; dir: alternate; dur: 800; loop: true')
				newEl.setAttribute('src', '#handlerImg');
				newEl.setAttribute('id', 'newentity');
				newEl.setAttribute('mixin', el.getAttribute('mixin'));
				newEl.setAttribute('scale', el.getAttribute('scale'));
				newEl.setAttribute('opacity', '0.5');
				newEl.setAttribute('material', el.getAttribute('material') );
				newEl.setAttribute('class', "remote newen");
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
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:2,y:2,z:2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
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
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:0.17,y:0.17,z:0.17});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:0.12,y:0.12,z:0.12});
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
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:0.2,y:0.2,z:0.2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:0.14,y:0.14,z:0.14});
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
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:0.17,y:0.17,z:0.17});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:0.12,y:0.12,z:0.12});
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
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:0.2,y:0.2,z:0.2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:0.14,y:0.14,z:0.14});
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
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:0.17,y:0.17,z:0.17});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:0.12,y:0.12,z:0.12});
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
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:0.2,y:0.2,z:0.2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:0.14,y:0.14,z:0.14});
		});
	}
});


/*
AFRAME.registerComponent('sliderActionX',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			if(evt.detail.intersection.point.x >= 0){
			evt.detail.intersection.point.x = evt.detail.intersection.point.x*2;
			}
		entity.setAttribute('scale', (2+evt.detail.intersection.point.x) + " " +(2+evt.detail.intersection.point.x) + " " +(2+evt.detail.intersection.point.x));
		});
	}
});
*/

AFRAME.registerComponent('axisselector',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let menu= document.createElement('a-box');
			menu.setAttribute('src', '#attributeAxisImg');
			menu.setAttribute('position', {x:0.3,y:0.1,z:0});
			menu.setAttribute('width', '0.25');
			menu.setAttribute('height', '0.1');
			menu.setAttribute('depth', '0.01');

			let att = document.getElementById('attributemenu');
			att.appendChild(menu);

			let sizeChooserUpx = document.createElement('a-text');
			sizeChooserUpx.setAttribute('id', 'buttonupx');
			sizeChooserUpx.setAttribute('class', 'remote');
			sizeChooserUpx.setAttribute('position', '0.19 0.119 0.011');
			sizeChooserUpx.setAttribute('value', '+');
			sizeChooserUpx.setAttribute('scale', '0.12 0.12 0.12');
			sizeChooserUpx.setAttribute('sizeupx', {});
			sizeChooserUpx.setAttribute('clickable', {});
			att.appendChild(sizeChooserUpx);

			let sizeChooserDownX = document.createElement('a-text');
			sizeChooserDownX.setAttribute('id', 'buttondownx');
			sizeChooserDownX.setAttribute('class', 'remote');
			sizeChooserDownX.setAttribute('position', '0.24 0.119 0.011');
			sizeChooserDownX.setAttribute('value', '-');
			sizeChooserDownX.setAttribute('scale', '0.14 0.14 0.14');
			sizeChooserDownX.setAttribute('sizedownx', {});
			sizeChooserDownX.setAttribute('clickable', {});
			att.appendChild(sizeChooserDownX);


			let sizeChooserUpY = document.createElement('a-text');
			sizeChooserUpY.setAttribute('id', 'buttonupY');
			sizeChooserUpY.setAttribute('class', 'remote');
			sizeChooserUpY.setAttribute('position', '0.27 0.08 0.011');
			sizeChooserUpY.setAttribute('value', '+');
			sizeChooserUpY.setAttribute('scale', '0.12 0.12 0.12');
			sizeChooserUpY.setAttribute('sizeupy', {});
			sizeChooserUpY.setAttribute('clickable', {});
			att.appendChild(sizeChooserUpY);

			let sizeChooserDownY = document.createElement('a-text');
			sizeChooserDownY.setAttribute('id', 'buttondowny');
			sizeChooserDownY.setAttribute('class', 'remote');
			sizeChooserDownY.setAttribute('position', '0.31 0.08 0.011');
			sizeChooserDownY.setAttribute('value', '-');
			sizeChooserDownY.setAttribute('scale', '0.14 0.14 0.14');
			sizeChooserDownY.setAttribute('sizedownY', {});
			sizeChooserDownY.setAttribute('clickable', {});
			att.appendChild(sizeChooserDownY);

			let sizeChooserUpZ = document.createElement('a-text');
			sizeChooserUpZ.setAttribute('id', 'buttonupZ');
			sizeChooserUpZ.setAttribute('class', 'remote');
			sizeChooserUpZ.setAttribute('position', '0.34 0.119 0.011');
			sizeChooserUpZ.setAttribute('value', '+');
			sizeChooserUpZ.setAttribute('scale', '0.12 0.12 0.12');
			sizeChooserUpZ.setAttribute('sizeupz', {});
			sizeChooserUpZ.setAttribute('clickable', {});
			att.appendChild(sizeChooserUpZ);

			let sizeChooserDownZ = document.createElement('a-text');
			sizeChooserDownZ.setAttribute('id', 'buttondownz');
			sizeChooserDownZ.setAttribute('class', 'remote');
			sizeChooserDownZ.setAttribute('position', '0.39 0.119 0.011');
			sizeChooserDownZ.setAttribute('value', '-');
			sizeChooserDownZ.setAttribute('scale', '0.14 0.14 0.14');
			sizeChooserDownZ.setAttribute('sizedownz', {});
			sizeChooserDownZ.setAttribute('clickable', {});
			att.appendChild(sizeChooserDownZ);
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:1.5,y:1.5,z:1.5});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	}
});

/*
AFRAME.registerComponent('sliderActionX',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			if(evt.detail.intersection.point.x >= 0){
			evt.detail.intersection.point.x = evt.detail.intersection.point.x*2;
			}
		entity.setAttribute('scale', (2+evt.detail.intersection.point.x) + " " +(2+evt.detail.intersection.point.x) + " " +(2+evt.detail.intersection.point.x));
		});
	}
});
*/


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
			attributesSelector.setAttribute('position', {x:-0.225,y:1.4,z:-0.6});
			attributesSelector.setAttribute('width', '0.3');
			attributesSelector.setAttribute('height', '0.3');
			attributesSelector.setAttribute('depth', '0.01');

			let axisBtn= document.createElement('a-sphere');
			axisBtn.setAttribute('id', 'attributemenu');
			axisBtn.setAttribute('axisselector', "");
			axisBtn.setAttribute('position', {x:0.1,y:0.105,z:0});
			axisBtn.setAttribute('radius', '0.01');
			axisBtn.setAttribute('color', 'white');
			axisBtn.setAttribute('clickable', "");
			axisBtn.setAttribute('static-body', {});
			axisBtn.setAttribute('class', " remote");

			let sliderX = document.createElement('a-gui-slider');
			sliderX.setAttribute('id', "slider");
			sliderX.setAttribute('class', "remote");
			sliderX.setAttribute('width', "0.25");
			sliderX.setAttribute('height', "0.1");
			sliderX.setAttribute('percent', "0.2");
			sliderX.setAttribute('gui-interactable', "");
			sliderX.setAttribute('gui-item', "");
			sliderX.setAttribute('gui-slider', "");
			sliderX.setAttribute('position', "0 0.35 0.049");
			sliderX.setAttribute('clickable', "");
			sliderX.setAttribute('hoverable', "");
			sliderX.setAttribute('opacity', "0");
			//sliderX.setAttribute('sliderActionX', "");
			sliderX.setAttribute('onclick', "sliderActionX");
			sliderX.setAttribute('onhover', "sliderActionX");
			sliderX.setAttribute('border-color', "white");
			sliderX.setAttribute('background-color', "#8a8a8a");
			sliderX.setAttribute('active-color', "#f5cf5d");

			let scene = document.querySelector('#editor');
			scene.appendChild(attributesSelector);
			//attributesSelector.appendChild(sliderX);
			attributesSelector.appendChild(axisBtn);



			for (let color of colors) {
				let colorButton = document.createElement('a-entity');
				if (el.getAttribute('class').search('sphere') >= 0) {
					colorButton.setAttribute('geometry', {primitive: 'sphere', radius: 0.01});
					colorButton.setAttribute('position', ((colors.indexOf(color) * 0.0235) - 0.13) + " -0.11 0");
				} else if (el.getAttribute('class').search('plane') >= 0) {
					colorButton.setAttribute('geometry', {primitive: 'plane', width: 0.017, height: 0.017});
					colorButton.setAttribute('position', ((colors.indexOf(color) * 0.0235) - 0.13) + " -0.105 0.0100001");
				} else if (el.getAttribute('class').search('cube') >= 0) {
					colorButton.setAttribute('geometry', {
						primitive: 'box',
						width: 0.017,
						height: 0.017,
						depth: 0.01
					});
					colorButton.setAttribute('position', ((colors.indexOf(color) * 0.0235) - 0.13) + " -0.105 0.0100001");
				} else {
					colorButton.setAttribute('geometry', {primitive: 'cylinder', radius: 0.01, height: 0.01});
					colorButton.setAttribute('position', ((colors.indexOf(color) * 0.0235) - 0.13) + " -0.105 0.0100001");
				}
				colorButton.setAttribute('class', 'button');
				//colorButton.setAttribute('id', 'colours');
				colorButton.setAttribute('material', 'color :' + color);
				colorButton.setAttribute('clickable', {});
				colorButton.setAttribute('changeattribute', {})
				attributesSelector.appendChild(colorButton)
            }
		});
	}
});

AFRAME.registerComponent('sizeupxgltf',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			console.log(entityToChange.object3D.scale.x)
			entityToChange.object3D.scale.x += 0.001;
			entityToChange.object3D.scale.y += 0.001;
			entityToChange.object3D.scale.z += 0.001;
			console.log(entityToChange.object3D.scale.x)
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:0.2,y:0.2,z:0.2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:0.14,y:0.14,z:0.14});
		});
	}
});

AFRAME.registerComponent('sizedownxgltf',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			entityToChange.object3D.scale.x -= 0.001;
			entityToChange.object3D.scale.y -= 0.001;
			entityToChange.object3D.scale.z -= 0.001;
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:0.23,y:0.23,z:0.23});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:0.17,y:0.17,z:0.17});
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
		planePrincipal.setAttribute('color', '#c9c9c9')
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
			//document.getElementById('podium').appendChild(podium)
			let j = document.getElementsByClassName('podium');
			let podium = document.createElement('a-sphere');
			podium.setAttribute('position',{x:4.5,y:2.3,z:6});
			podium.setAttribute('radius', 0.01);
			podium.setAttribute('color', 'red');
			podium.setAttribute('id', 'podium');
			j[0].appendChild(podium)

			let figure5 = document.createElement('a-cylinder');
			figure5.setAttribute('position', {x:4.5,y:1.35,z:6});
			figure5.setAttribute('rotation', {x:0,y:0,z:0});
			figure5.setAttribute('radius', '0.6');
			figure5.setAttribute('height', '0.05');
			figure5.setAttribute('color', 'white')
			j[0].appendChild(figure5);
			let figure6 = document.createElement('a-cylinder');
			figure6.setAttribute('position', {x:4.5,y:1.4,z:6});
			figure6.setAttribute('rotation', {x:0,y:0,z:0});
			figure6.setAttribute('radius', '0.5');
			figure6.setAttribute('height', '0.05');
			figure6.setAttribute('color', 'white')
			j[0].appendChild(figure6);
			let figure7 = document.createElement('a-cylinder');
			figure7.setAttribute('position', {x:4.5,y:1.45,z:6});
			figure7.setAttribute('rotation', {x:0,y:0,z:0});
			figure7.setAttribute('radius', '0.4');
			figure7.setAttribute('height', '0.05');
			figure7.setAttribute('color', 'white')
			j[0].appendChild(figure7);

			let figure11 = document.createElement('a-cylinder');
			figure11.setAttribute('position', {x:4.5,y:0.7,z:6});
			figure11.setAttribute('rotation', {x:0,y:0,z:0});
			figure11.setAttribute('radius', '0.05');
			figure11.setAttribute('height', '1.35');
			figure11.setAttribute('color', 'white');
			j[0].appendChild(figure11);
			let figure12 = document.createElement('a-cylinder');
			figure12.setAttribute('position', {x:4.5,y:0.15,z:6});
			figure12.setAttribute('rotation', {x:0,y:0,z:0});
			figure12.setAttribute('radius', '0.3');
			figure12.setAttribute('height', '0.05');
			figure12.setAttribute('color', 'white');
			j[0].appendChild(figure12);
			let figure13 = document.createElement('a-cylinder');
			figure13.setAttribute('position', {x:4.5,y:0.1,z:6});
			figure13.setAttribute('rotation', {x:0,y:0,z:0});
			figure13.setAttribute('radius', '0.4');
			figure13.setAttribute('height', '0.05');
			figure13.setAttribute('color', 'white');
			j[0].appendChild(figure13);
	},
});


AFRAME.registerComponent('editgltf', {

	init: function () {
		let el = this.el;
		let data = this.data;

		this.el.addEventListener('grab-start', function(){

			let attributesSelector= document.createElement('a-box');
			attributesSelector.setAttribute('src', '#sizes');
			attributesSelector.setAttribute('id', 'attributemenu');
			attributesSelector.setAttribute('position', {x:-0.225,y:1.4,z:-0.6});
			attributesSelector.setAttribute('width', '0.3');
			attributesSelector.setAttribute('height', '0.15');
			attributesSelector.setAttribute('depth', '0.01');

			let scene = document.querySelector('#editor');
			scene.appendChild(attributesSelector);

			let sizeChooserUpx = document.createElement('a-text');
			sizeChooserUpx.setAttribute('id', 'buttonupxgltf');
			sizeChooserUpx.setAttribute('class', 'remote');
			sizeChooserUpx.setAttribute('position', '-0.05 -0.01 0.011');
			sizeChooserUpx.setAttribute('value', '+');
			sizeChooserUpx.setAttribute('scale', '0.15 0.15 0.15');
			sizeChooserUpx.setAttribute('sizeupxgltf', {});
			sizeChooserUpx.setAttribute('clickable', {});
			attributesSelector.appendChild(sizeChooserUpx);

			let sizeChooserDownX = document.createElement('a-text');
			sizeChooserDownX.setAttribute('id', 'buttondownxgltf');
			sizeChooserDownX.setAttribute('class', 'remote');
			sizeChooserDownX.setAttribute('position', '0.04 -0.01 0.011');
			sizeChooserDownX.setAttribute('value', '-');
			sizeChooserDownX.setAttribute('scale', '0.17 0.17 0.17');
			sizeChooserDownX.setAttribute('sizedownxgltf', {});
			sizeChooserDownX.setAttribute('clickable', {});
			attributesSelector.appendChild(sizeChooserDownX);
		});
	}
});



AFRAME.registerComponent('showvehicles',{
	init:function(){
		let el = this.el;
		let showVehicles = false;
		let img = document.getElementById('vehiclesimg');
		el.addEventListener('grab-start', function () {
			if (showVehicles === false) {
				//text.setAttribute('src', '#closeeditorImg');
				img.setAttribute('src', '#closevehicles')
				showVehicles = true;

				let car1 = document.createElement('a-entity');
				car1.setAttribute('position', {x:-0.3,y:-0.23,z:0});
				car1.setAttribute('scale', {x:0.00015,y:0.00015,z:0.00015});
				car1.setAttribute('id', 'car1');
				car1.setAttribute('class', 'remote');
				car1.setAttribute('gltf-model', '#model3');
				car1.setAttribute('animation', 'property:rotation;to:0 360 0;loop:true;dur:20000')
				car1.setAttribute('clickable', {});
				car1.setAttribute('editgltf',{} );
				document.getElementById('menu').appendChild(car1);

				let car2 = document.createElement('a-entity');
				car2.setAttribute('position', {x:-0.4,y:-0.23,z:0});
				car2.setAttribute('scale', {x:0.001,y:0.001,z:0.001});
				car2.setAttribute('id', 'car2');
				car2.setAttribute('class', 'remote');
				car2.setAttribute('gltf-model', '#cybertruck');
				//car2.setAttribute('light', 'intensity: 1');
				car2.setAttribute('animation', 'property:rotation;to:0 360 0;loop:true;dur:20000')
				car2.setAttribute('clickable', {});
				car2.setAttribute('editgltf',{} );
				document.getElementById('menu').appendChild(car2);

				let car3 = document.createElement('a-entity');
				car3.setAttribute('position', {x:-0.5,y:-0.23,z:0});
				car3.setAttribute('scale', {x:0.0001,y:0.0001,z:0.0001});
				car3.setAttribute('id', 'car3');
				car3.setAttribute('class', 'remote');
				car3.setAttribute('gltf-model', '#lamborghini');
				car3.setAttribute('animation', 'property:rotation;to:0 360 0;loop:true;dur:20000')
				car3.setAttribute('clickable', {});
				car3.setAttribute('editgltf',{} );
				document.getElementById('menu').appendChild(car3);



				hasVehiclesGltfs = true;
				setClickable();
			}else{
				console.log('no muestra');
				img.setAttribute('src', '#openvehicles');
				document.getElementById('car1').remove();
				document.getElementById('car2').remove();
				document.getElementById('car3').remove();
				//document.getElementById('tree1').remove();
				showVehicles = false;
				hasVehiclesGltfs = false;

			}

		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('material',"color:#adadad; opacity: 0.5");
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('material',"color:white; opacity: 0.25");
		});
	}
});

AFRAME.registerComponent('showplants',{
	init:function(){
		let el = this.el;
		let showPlants = false;
		let img = document.getElementById('plantsimg');
		el.addEventListener('grab-start', function () {
			if (showPlants === false) {
				//text.setAttribute('src', '#closeeditorImg');
				img.setAttribute('src', '#closeplants')
				showPlants = true;

				let tree1 = document.createElement('a-entity');
				tree1.setAttribute('position', {x:-0.3,y:-0.35,z:0});
				tree1.setAttribute('scale', {x:0.00015,y:0.00015,z:0.00015});
				tree1.setAttribute('id', 'tree1');
				tree1.setAttribute('class', 'remote');
				tree1.setAttribute('gltf-model', '#trees');
				tree1.setAttribute('animation', 'property:rotation;to:0 360 0;loop:true;dur:20000')
				tree1.setAttribute('clickable', {});
				tree1.setAttribute('editgltf',{} );
				//model3.setAttribute('posibilityofchange',{} );
				document.getElementById('menu').appendChild(tree1);
				hasPlantsGltfs = true;
				setClickable();
			}else{
				console.log('no muestra');
				img.setAttribute('src', '#openplants');
				document.getElementById('tree1').remove();
				//document.getElementById('tree1').remove();
				showPlants = false;
				hasPlantsGltfs = false;

			}

		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('material',"color:#adadad; opacity: 0.5");
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('material',"color:white; opacity: 0.25");
		});
	}
});


AFRAME.registerComponent('showanimals',{
	init:function(){
		let el = this.el;
		let showAnimals = false;
		let img = document.getElementById('animalsimg');
		el.addEventListener('grab-start', function () {
			if (showAnimals === false) {
				//text.setAttribute('src', '#closeeditorImg');
				img.setAttribute('src', '#closeanimals')
				showAnimals = true;

				let animal1 = document.createElement('a-entity');
				animal1.setAttribute('position', {x:-0.3,y:-0.4,z:0});
				animal1.setAttribute('scale', {x:0.007,y:0.007,z:0.007});
				animal1.setAttribute('id', 'animal1');
				animal1.setAttribute('class', 'remote');
				animal1.setAttribute('gltf-model', '#shiba');
				animal1.setAttribute('animation', 'property:rotation;to:0 360 0;loop:true;dur:20000')
				animal1.setAttribute('clickable', {});
				animal1.setAttribute('editgltf',{} );
				//model3.setAttribute('posibilityofchange',{} );
				document.getElementById('menu').appendChild(animal1);
				hasAnimalsGltfs = true;
				setClickable();
			}else{
				console.log('no muestra');
				img.setAttribute('src', '#openanimals');
				document.getElementById('animal1').remove();
				//document.getElementById('tree1').remove();
				showAnimals = false;
				hasAnimalsGltfs = false;

			}

		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('material',"color:#adadad; opacity: 0.5");
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('material',"color:white; opacity: 0.25");
		});
	}
});

AFRAME.registerComponent('showgadgets',{
	init:function(){
		let el = this.el;
		let showGradgets = false;
		let img = document.getElementById('gadgetsimg');
		el.addEventListener('grab-start', function () {
			if (showGradgets === false) {
				//text.setAttribute('src', '#closeeditorImg');
				img.setAttribute('src', '#closegadgets')
				showGradgets = true;

				let gadget1 = document.createElement('a-entity');
				gadget1.setAttribute('position', {x:-0.3,y:-0.45,z:0});
				gadget1.setAttribute('scale', {x:0.05,y:0.05,z:0.05});
				gadget1.setAttribute('id', 'gadget1');
				gadget1.setAttribute('class', 'remote');
				gadget1.setAttribute('gltf-model', '#iMac');
				gadget1.setAttribute('animation', 'property:rotation;to:0 360 0;loop:true;dur:20000')
				gadget1.setAttribute('clickable', {});
				gadget1.setAttribute('editgltf',{} );
				//model3.setAttribute('posibilityofchange',{} );
				document.getElementById('menu').appendChild(gadget1);
				hasGadgetsGltfs = true;
				setClickable();
			}else{
				console.log('no muestra');
				img.setAttribute('src', '#opengadgets');
				document.getElementById('gadget1').remove();
				//document.getElementById('tree1').remove();
				showGradgets = false;
				hasGadgetsGltfs = false;

			}

		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('material',"color:#adadad; opacity: 0.5");
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('material',"color:white; opacity: 0.25");
		});
	}
});

AFRAME.registerComponent('showmorefigure',{
	init:function(){
		let el = this.el;
		let show = false;
		let img = document.getElementById('morefiguremenuimg');
		el.addEventListener('grab-start', function () {
			if (show === false) {
				show = true;
				img.setAttribute('src', '#closemore');
				let vehicles = document.createElement('a-box');
				vehicles.setAttribute('position',{x:-0.225,y:-0.225,z:0});
				vehicles.setAttribute('id','vehicles');
				vehicles.setAttribute('class','remote');
				vehicles.setAttribute('height', '0.05');
				vehicles.setAttribute('depth', '0.015');
				vehicles.setAttribute('width', '0.05');
				vehicles.setAttribute('material', 'color:white; opacity:0.25');
				vehicles.setAttribute('showvehicles', {});
				document.getElementById('menu').appendChild(vehicles)
				let vehiclesImg = document.createElement('a-plane');
				vehiclesImg.setAttribute('position',{x:0,y:0,z:0.0076});
				vehiclesImg.setAttribute('height', '0.05');
				vehiclesImg.setAttribute('id', 'vehiclesimg');
				vehiclesImg.setAttribute('width', '0.05');
				vehiclesImg.setAttribute('src', '#openvehicles');
				document.getElementById('vehicles').appendChild(vehiclesImg);
				hasVehicles = true;

				let Plants = document.createElement('a-box');
				Plants.setAttribute('position',{x:-0.225,y:-0.3,z:0});
				Plants.setAttribute('id','plants');
				Plants.setAttribute('class','remote');
				Plants.setAttribute('height', '0.05');
				Plants.setAttribute('depth', '0.015');
				Plants.setAttribute('width', '0.05');
				Plants.setAttribute('material', 'color:white; opacity:0.25');
				Plants.setAttribute('showplants', {});
				document.getElementById('menu').appendChild(Plants)
				let plantsImg = document.createElement('a-plane');
				plantsImg.setAttribute('position',{x:0,y:0,z:0.0076});
				plantsImg.setAttribute('height', '0.05');
				plantsImg.setAttribute('id', 'plantsimg');
				plantsImg.setAttribute('width', '0.05');
				plantsImg.setAttribute('src', '#openplants');
				document.getElementById('plants').appendChild(plantsImg);
				hasPlants = true;

				let animals = document.createElement('a-box');
				animals.setAttribute('position',{x:-0.225,y:-0.375,z:0});
				animals.setAttribute('id','animals');
				animals.setAttribute('class','remote');
				animals.setAttribute('height', '0.05');
				animals.setAttribute('depth', '0.015');
				animals.setAttribute('width', '0.05');
				animals.setAttribute('material', 'color:white; opacity:0.25');
				animals.setAttribute('showanimals', {});
				document.getElementById('menu').appendChild(animals)
				let animalsImg = document.createElement('a-plane');
				animalsImg.setAttribute('position',{x:0,y:0,z:0.0076});
				animalsImg.setAttribute('height', '0.05');
				animalsImg.setAttribute('id', 'animalsimg');
				animalsImg.setAttribute('width', '0.05');
				animalsImg.setAttribute('src', '#openanimals');
				document.getElementById('animals').appendChild(animalsImg);
				hasAnimals = true;

				let gadgets = document.createElement('a-box');
				gadgets.setAttribute('position',{x:-0.225,y:-0.45,z:0});
				gadgets.setAttribute('id','gadgets');
				gadgets.setAttribute('class','remote');
				gadgets.setAttribute('height', '0.05');
				gadgets.setAttribute('depth', '0.015');
				gadgets.setAttribute('width', '0.05');
				gadgets.setAttribute('material', 'color:white; opacity:0.25');
				gadgets.setAttribute('showgadgets', {});
				document.getElementById('menu').appendChild(gadgets)
				let gadgetsImg = document.createElement('a-plane');
				gadgetsImg.setAttribute('position',{x:0,y:0,z:0.0076});
				gadgetsImg.setAttribute('height', '0.05');
				gadgetsImg.setAttribute('id', 'gadgetsimg');
				gadgetsImg.setAttribute('width', '0.05');
				gadgetsImg.setAttribute('src', '#opengadgets');
				document.getElementById('gadgets').appendChild(gadgetsImg);
				hasGadgets = true;

			}else{
				console.log('no muestra');
				img.setAttribute('src', '#openmore');
				document.getElementById('vehicles').remove();
				document.getElementById('plants').remove();
				document.getElementById('animals').remove();
				document.getElementById('gadgets').remove();
				if (document.getElementById('car1')){
					document.getElementById('car1').remove();
				}
				if (document.getElementById('car2')){
					document.getElementById('car2').remove();
				}
				if (document.getElementById('car3')){
					document.getElementById('car3').remove();
				}
				if (document.getElementById('tree1')){
					document.getElementById('tree1').remove();
				}
				if (document.getElementById('animal1')){
					document.getElementById('animal1').remove();
				}
				if (document.getElementById('gadget1')){
					document.getElementById('gadget1').remove();
				}

				//document.getElementById('tree1').remove();
				show = false;
				hasVehiclesGltfs = false;
				hasPlantsGltfs = false;
				hasVehicles = false;
				hasPlants = false;
				hasAnimals = false;
				hasAnimalsGltfs = false;
				hasGadgets = false;
				hasGadgetsGltfs = false;
			}

		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('material',"color:#adadad; opacity: 0.5");
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('material',"color:white; opacity: 0.25");
		});
	}
});


AFRAME.registerComponent('showeditor',{
	init:function(){
		let el = this.el;
		let showed = false;
		let text = document.getElementById('showphoto');
		el.addEventListener('grab-start', function () {
			if (showed === false){
				text.setAttribute('src', '#closeeditorImg');
				showed = true;

				let moreFigureMenu = document.createElement('a-box');
				moreFigureMenu.setAttribute('position',{x:-0.16,y:-0.225,z:0});
				moreFigureMenu.setAttribute('id','morefiguremenu');
				moreFigureMenu.setAttribute('class','remote');
				moreFigureMenu.setAttribute('height', '0.05');
				moreFigureMenu.setAttribute('depth', '0.015');
				moreFigureMenu.setAttribute('width', '0.05');
				moreFigureMenu.setAttribute('material', 'color:white; opacity:0.25');
				moreFigureMenu.setAttribute('showmorefigure', {});
				document.getElementById('menu').appendChild(moreFigureMenu)
				let moreFigureMenuImg = document.createElement('a-plane');
				moreFigureMenuImg.setAttribute('position',{x:0,y:0,z:0.0076});
				moreFigureMenuImg.setAttribute('height', '0.05');
				moreFigureMenuImg.setAttribute('id', 'morefiguremenuimg');
				moreFigureMenuImg.setAttribute('width', '0.05');
				moreFigureMenuImg.setAttribute('src', '#openmore');
				document.getElementById('morefiguremenu').appendChild(moreFigureMenuImg);
/*
				let baseMenu = document.createElement('a-box');
				baseMenu.setAttribute('position',{x:0,y:-0.25,z:0});
				baseMenu.setAttribute('id','basemenu');
				baseMenu.setAttribute('height', '0.1');
				baseMenu.setAttribute('depth', '0.015');
				baseMenu.setAttribute('width', '0.25');
				baseMenu.setAttribute('material', 'color:black');
				document.getElementById('menu').appendChild(baseMenu)
				let baseMenuImg = document.createElement('a-plane');
				baseMenuImg.setAttribute('position',{x:0,y:0,z:0.0076});
				baseMenuImg.setAttribute('height', '0.1');
				baseMenuImg.setAttribute('width', '0.25');
				baseMenuImg.setAttribute('src', '#FiguresSelectorImg');
				document.getElementById('basemenu').appendChild(baseMenuImg);

				let figure1 = document.createElement('a-box');
				figure1.setAttribute('position', {x:-0.065,y:-0.37,z:0});
				figure1.setAttribute('width', '0.12');
				figure1.setAttribute('height', '0.12');
				figure1.setAttribute('depth', '0.015');
				figure1.setAttribute('id', 'figure1');
				figure1.setAttribute('material', 'color:white');
				document.getElementById('menu').appendChild(figure1);
				let figure11 = document.createElement('a-plane');
				figure11.setAttribute('position', {x:0,y:0,z:0.0076});
				figure11.setAttribute('width', '0.12');
				figure11.setAttribute('height', '0.12');
				figure11.setAttribute('src', '#cubeImg');
				document.getElementById('figure1').appendChild(figure11)

 */
				let figure12 = document.createElement('a-box');
				figure12.setAttribute('position', {x:-0.09,y:-0.225,z:-0.025});
				figure12.setAttribute('width', '0.05');
				figure12.setAttribute('depth', '0.05');
				figure12.setAttribute('height', '0.05');
				figure12.setAttribute('id', 'cubeClick');
				figure12.setAttribute('class', ' cube button');
				//figure12.setAttribute('animation', 'property:rotation;to:0 360 0;loop:true;dur:20000')
				figure12.setAttribute('clickable', {});
				figure12.setAttribute('editentity',{} );
				figure12.setAttribute('posibilityofchange',{} );
				figure12.setAttribute('color','#c1c1c1' );
				document.getElementById('menu').appendChild(figure12)
				/*
				let figure2 = document.createElement('a-box');
				figure2.setAttribute('position', {x:0.065,y:-0.37,z:0});
				figure2.setAttribute('width', '0.12');
				figure2.setAttribute('height', '0.12');
				figure2.setAttribute('depth', '0.015');
				figure2.setAttribute('material', 'color:white;');
				figure2.setAttribute('id', 'figure2');
				document.getElementById('menu').appendChild(figure2);
				let figure21 = document.createElement('a-plane');
				figure21.setAttribute('position', {x:0,y:0,z:0.0076});
				figure21.setAttribute('width', '0.12');
				figure21.setAttribute('height', '0.12');
				figure21.setAttribute('src', '#cylinderImg');
				document.getElementById('figure2').appendChild(figure21);

				 */
				let figure22 = document.createElement('a-cylinder');
				figure22.setAttribute('position', {x:-0.02,y:-0.225,z:-0.025});
				figure22.setAttribute('radius', '0.03');
				figure22.setAttribute('height', '0.05');
				figure22.setAttribute('id', 'cylinderClick');
				figure22.setAttribute('class', 'cylinder button');
				//figure22.setAttribute('animation', 'property:rotation;to:0 360 0;loop:true;dur:20000')
				figure22.setAttribute('clickable', {});
				figure22.setAttribute('editentity',{} );
				figure22.setAttribute('posibilityofchange',{} );
				figure22.setAttribute('color','#c1c1c1' );
				document.getElementById('menu').appendChild(figure22);
/*
				let figure3 = document.createElement('a-box');
				figure3.setAttribute('position', {x:0.065,y:-0.5,z:0});
				figure3.setAttribute('width', '0.12');
				figure3.setAttribute('height', '0.12');
				figure3.setAttribute('depth', '0.015');
				figure3.setAttribute('id', 'figure3');
				figure3.setAttribute('material', 'color:white;');
				document.getElementById('menu').appendChild(figure3);
				let figure31 = document.createElement('a-plane');
				figure31.setAttribute('position', {x:0,y:0,z:0.0076});
				figure31.setAttribute('width', '0.12');
				figure31.setAttribute('height', '0.12');
				figure31.setAttribute('src', '#planeImg');
				document.getElementById('figure3').appendChild(figure31);


				let figure32 = document.createElement('a-plane');
				figure32.setAttribute('position', {x:0.05,y:-0.225,z:-0.0225});
				figure32.setAttribute('width', '0.05');
				figure32.setAttribute('height', '0.05');
				figure32.setAttribute('id', 'planeClick');
				figure32.setAttribute('class', 'plane button');
				figure32.setAttribute('posibilityofchange',{} );
				figure32.setAttribute('clickable', {});
				figure32.setAttribute('editentity',{} );
				figure32.setAttribute('color','#c1c1c1' );
				//figure32.setAttribute('animation', 'property:rotation;to:0 0 180;loop:true;dur:20000');
				document.getElementById('menu').appendChild(figure32);

 */
/*
				let figure4 = document.createElement('a-box');
				figure4.setAttribute('position', {x:-0.065,y:-0.5,z:0});
				figure4.setAttribute('width', '0.12');
				figure4.setAttribute('height', '0.12');
				figure4.setAttribute('depth', '0.015');
				figure4.setAttribute('id', 'figure4');
				figure4.setAttribute('material', 'color:white;');
				document.getElementById('menu').appendChild(figure4);
				let figure41 = document.createElement('a-plane');
				figure41.setAttribute('position', {x:0,y:0,z:0.0076});
				figure41.setAttribute('width', '0.12');
				figure41.setAttribute('height', '0.12');
				figure41.setAttribute('src', '#sphereImg');
				document.getElementById('figure4').appendChild(figure41);

 */
				let figure42 = document.createElement('a-sphere');
				figure42.setAttribute('position', {x:0.06,y:-0.225,z:-0.0225});
				figure42.setAttribute('radius', '0.035');
				figure42.setAttribute('id', 'sphereClick');
				figure42.setAttribute('class', 'sphere button');
				figure42.setAttribute('posibilityofchange',{} );
				figure42.setAttribute('clickable', {});
				figure42.setAttribute('editentity',{} );
				figure42.setAttribute('color','#c1c1c1' );
				//figure42.setAttribute('animation', 'property:rotation;to:0 360 180;loop:true;dur:20000');
				document.getElementById('menu').appendChild(figure42)


				setClickable()


			}else{
				text.setAttribute('src', '#openeditorImg');
				document.getElementById('cubeClick').remove();
				document.getElementById('cylinderClick').remove();
				//document.getElementById('figure32').remove();
				document.getElementById('sphereClick').remove();
				//document.getElementById('basemenu').remove();
				document.getElementById('morefiguremenu').remove();
				if (document.getElementById('car1')){
					document.getElementById('car1').remove();
				}
				if (document.getElementById('car2')){
					document.getElementById('car2').remove();
				}
				if (document.getElementById('car3')){
					document.getElementById('car3').remove();
				}
				if(hasVehicles){
					document.getElementById('vehicles').remove();
				}
				hasVehiclesGltfs=false;
				hasVehicles=false;

				if (document.getElementById('tree1')){
					document.getElementById('tree1').remove();
				}
				if(hasPlants){
					document.getElementById('plants').remove();
				}
				hasPlantsGltfs=false;
				hasPlants=false;

				if (hasAnimals){
					document.getElementById('animals').remove();
				}
				if (document.getElementById('animal1')){
					document.getElementById('animal1').remove();
				}
				hasAnimals = false;

				if (hasGadgets){
					document.getElementById('gadgets').remove();
				}
				if (document.getElementById('gadget1')){
					document.getElementById('gadget1').remove();
				}
				hasGadgets = false;

				showed = false;
			}

		});
	}
});