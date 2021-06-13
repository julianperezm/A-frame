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
let transparent = false;
let hide = false;
let fathers = false;
let hasEnv1 = false;
let hasEnv2 = false;
let hasEnv3 = false;
let hasEnv4 = false;
let hasEnv5 = false;

function coloredOnSelect() {
	let showeditor = document.getElementById('showeditor');
	let showhandler = document.getElementById('showhandler');
	let deletehandler = document.getElementById('deletehandler');
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
	deletehandler.addEventListener('raycaster-intersected', function () {
		deletehandler.setAttribute('material',"color:#adadad; opacity: 0.25");
	});
	deletehandler.addEventListener('raycaster-intersected-cleared', function () {
		deletehandler.setAttribute('material',"color:white; opacity: 0.25");
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
				let instructionpos = document.getElementById('showhandler');
				console.log(podium);
				let scene = document.querySelector('a-scene');
				newEntity.setAttribute('static-body', {});
				newEntity.setAttribute('class', "remote handler");
				newEntity.setAttribute('mixin', 'cube');
				newEntity.setAttribute('src', '#handlerImg');
				newEntity.setAttribute('id', "fatherofgroup");
				newEntity.setAttribute('position', podium.getAttribute('position'));
				scene.appendChild(newEntity);
				console.log('group');
				group = true;
				console.log(group);

				let instructions= document.createElement('a-box');
				instructions.setAttribute('src', '#instructionsimg');
				instructions.setAttribute('id', 'instructiosmenu');
				instructions.setAttribute('position', {x:0,y:0.1,z:0});
				instructions.setAttribute('rotation', {x:0,y:-5,z:0});
				instructions.setAttribute('width', '0.2');
				instructions.setAttribute('height', '0.1');
				instructions.setAttribute('depth', '0.01');
 				instructionpos.appendChild(instructions);

			}else{
				mode.setAttribute('src', '#modeImgNormal');
				let father = document.getElementById('fatherofgroup');
				let instructions = document.getElementById('instructiosmenu');
				group=false;
				if (fathers === false){
					console.log(father)
					father.remove();
					instructions.remove()

				}else{
					let newEl = document.getElementsByClassName('newen');
					for (let elem of newEl){
						elem.removeAttribute('animation');
					}

					//console.log(newEl)
					//console.log(newEl)
					console.log(father);
					father.removeAttribute('id');
					instructions.remove()

					console.log('group');
				}
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
		let instructionpos = document.getElementById('showhandler');
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
		let instructions= document.createElement('a-box');
		instructions.setAttribute('src', '#instructionsimg');
		instructions.setAttribute('id', 'instructiosmenu');
		instructions.setAttribute('position', {x:0,y:0.1,z:0});
		instructions.setAttribute('rotation', {x:0,y:-5,z:0});
		instructions.setAttribute('width', '0.3');
		instructions.setAttribute('height', '0.14');
		instructions.setAttribute('depth', '0.01');
		instructionpos.appendChild(instructions);

	}else{
  		mode.setAttribute('src', '#modeImgNormal');
				let father = document.getElementById('fatherofgroup');
				let instructions = document.getElementById('instructiosmenu');
				group=false;
				if (fathers === false){
					console.log(father)
					father.remove();
					instructions.remove()

				}else{
					let newEl = document.getElementsByClassName('newen');
					for (let elem of newEl){
						elem.removeAttribute('animation');
					}

					//console.log(newEl)
					//console.log(newEl)
					console.log(father);
					father.removeAttribute('id');
					instructions.remove()

					console.log('group');
				}
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
		case 'tree2':
			newEntity.setAttribute('gltf-model', '#furtree');
			newEntity.setAttribute('scale',{x:0.001,y:0.001,z:0.001});
			newEntity.setAttribute('grabbable',{});
			newEntity.setAttribute('stretchable',{});
			newEntity.setAttribute('hoverable',{});
			newEntity.setAttribute('draggable',{});
			newEntity.setAttribute('droppable',{});
			newEntity.setAttribute('shadow',{});
			break;
		case 'tree3':
			newEntity.setAttribute('gltf-model', '#monsteratree');
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
		case 'animal2':
			newEntity.setAttribute('gltf-model', '#rabbit');
			newEntity.setAttribute('scale',{x:0.01,y:0.01,z:0.01});
			newEntity.setAttribute('grabbable',{});
			newEntity.setAttribute('stretchable',{});
			newEntity.setAttribute('hoverable',{});
			newEntity.setAttribute('draggable',{});
			newEntity.setAttribute('droppable',{});
			newEntity.setAttribute('shadow',{});
			break;
		case 'animal3':
			newEntity.setAttribute('gltf-model', '#horse');
			newEntity.setAttribute('scale',{x:0.001,y:0.001,z:0.001});
			newEntity.setAttribute('rotation',{x:0,y:90,z:0});
			newEntity.setAttribute('grabbable',{});
			newEntity.setAttribute('stretchable',{});
			newEntity.setAttribute('hoverable',{});
			newEntity.setAttribute('draggable',{});
			newEntity.setAttribute('droppable',{});
			newEntity.setAttribute('shadow',{});
			break;
		case 'gadget1':
			newEntity.setAttribute('gltf-model', '#iphone11');
			newEntity.setAttribute('scale',{x:0.001,y:0.001,z:0.001});
			newEntity.setAttribute('rotation',{x:90,y:0,z:0});
			newEntity.setAttribute('grabbable',{});
			newEntity.setAttribute('stretchable',{});
			newEntity.setAttribute('hoverable',{});
			newEntity.setAttribute('draggable',{});
			newEntity.setAttribute('droppable',{});
			newEntity.setAttribute('shadow',{});
			break;
		case 'gadget2':
			newEntity.setAttribute('gltf-model', '#ipad');
			newEntity.setAttribute('scale',{x:0.001,y:0.001,z:0.001});
			newEntity.setAttribute('rotation',{x:90,y:0,z:0});
			newEntity.setAttribute('grabbable',{});
			newEntity.setAttribute('stretchable',{});
			newEntity.setAttribute('hoverable',{});
			newEntity.setAttribute('draggable',{});
			newEntity.setAttribute('droppable',{});
			newEntity.setAttribute('shadow',{});
			break;
		case 'gadget3':
			newEntity.setAttribute('gltf-model', '#watch');
			newEntity.setAttribute('scale',{x:0.001,y:0.001,z:0.001});
			newEntity.setAttribute('rotation',{x:90,y:0,z:0});
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
		let tree2 = document.getElementById('tree2');
		console.log('dentro de clickable con tree')
		tree2.addEventListener('grab-start', function(){
			createEntity('tree2')
			console.log('dentro2')
		});
		tree2.addEventListener('raycaster-intersected', function () {
			tree2.setAttribute('scale',{x:0.00016,y:0.00016,z:0.00016});
		});
		tree2.addEventListener('raycaster-intersected-cleared', function () {
			tree2.setAttribute('scale',{x:0.00015,y:0.00015,z:0.00015});
		});
		let tree3 = document.getElementById('tree3');
		console.log('dentro de clickable con tree')
		tree3.addEventListener('grab-start', function(){
			createEntity('tree3')
			console.log('dentro2')
		});
		tree3.addEventListener('raycaster-intersected', function () {
			tree3.setAttribute('scale',{x:0.00009,y:0.00009,z:0.00009});
		});
		tree3.addEventListener('raycaster-intersected-cleared', function () {
			tree3.setAttribute('scale',{x:0.00008,y:0.00008,z:0.00008});
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
		let animal2 = document.getElementById('animal2');
		console.log('dentro de clickable con animal')
		animal2.addEventListener('grab-start', function(){
			createEntity('animal2')
			console.log('dentro2')
		});
		animal2.addEventListener('raycaster-intersected', function () {
			animal2.setAttribute('scale',{x:0.003,y:0.003,z:0.003});
		});
		animal2.addEventListener('raycaster-intersected-cleared', function () {
			animal2.setAttribute('scale',{x:0.002,y:0.002,z:0.002});
		});
		let animal3 = document.getElementById('animal3');
		console.log('dentro de clickable con animal')
		animal3.addEventListener('grab-start', function(){
			createEntity('animal3')
			console.log('dentro2')
		});
		animal3.addEventListener('raycaster-intersected', function () {
			animal3.setAttribute('scale',{x:0.00008,y:0.00008,z:0.00008});
		});
		animal3.addEventListener('raycaster-intersected-cleared', function () {
			animal3.setAttribute('scale',{x:0.00007,y:0.00007,z:0.00007});
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
			gadget1.setAttribute('scale',{x:0.0004,y:0.0004,z:0.0004});
		});
		gadget1.addEventListener('raycaster-intersected-cleared', function () {
			gadget1.setAttribute('scale',{x:0.0003,y:0.0003,z:0.0003});
		});
		let gadget2 = document.getElementById('gadget2');
		console.log('dentro de clickable con animal')
		gadget2.addEventListener('grab-start', function(){
			createEntity('gadget2')
			console.log('dentro2')
		});
		gadget2.addEventListener('raycaster-intersected', function () {
			gadget2.setAttribute('scale',{x:0.0004,y:0.0004,z:0.0004});
		});
		gadget2.addEventListener('raycaster-intersected-cleared', function () {
			gadget2.setAttribute('scale',{x:0.0003,y:0.0003,z:0.0003});
		});
		let gadget3 = document.getElementById('gadget3');
		console.log('dentro de clickable con animal')
		gadget3.addEventListener('grab-start', function(){
			createEntity('gadget3')
			console.log('dentro2')
		});
		gadget3.addEventListener('raycaster-intersected', function () {
			gadget3.setAttribute('scale',{x:0.0004,y:0.0004,z:0.0004});
		});
		gadget3.addEventListener('raycaster-intersected-cleared', function () {
			gadget3.setAttribute('scale',{x:0.0003,y:0.0003,z:0.0003});
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
				newEl.setAttribute('rotation', el.getAttribute('rotation'))
				newEl.setAttribute('material', el.getAttribute('material') );
				newEl.setAttribute('transparent', el.getAttribute('transparent') );
				newEl.setAttribute('class', "remote newen");
				newEl.setAttribute('editable', {});
				newEl.setAttribute('editable', {});
				console.log(newEl.object3D.position.x);
				console.log(newEl.object3D.position.y);
				console.log(newEl.object3D.position.z);
				console.log('prueba')
				el.remove()
				father.appendChild(newEl)
				fathers = true;
			}
		});
	}
});

AFRAME.registerComponent('deletehandler',{
	init:function(){
		let el = this.el;
		let newEl = document.getElementsByClassName('handler');
		btnhnd = document.getElementById('modehnd');
		el.addEventListener('grab-start', function () {
			if (hide === false){
				for (let elem of newEl){
					elem.setAttribute("material","opacity: 0");

					//elem.setAttribute('hidden', "true");
				}
				btnhnd.setAttribute('src', '#Unhideimg')
				hide = true;
				console.log(newEl)
			}else{

				for (let elem of newEl){
					elem.setAttribute("material","opacity: 1");
					console.log(newEl)
					//elem.remove('hidden');
				}
				btnhnd.setAttribute('src', '#hideimg')
				hide = false;
				console.log(newEl)
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
			console.log(el)
			let menu = document.getElementById('attributemenu')
			if (menu){
				menu.remove();
			}
			el.removeAttribute('id')
		});
	}
});

AFRAME.registerComponent('metalnessup',{
	init:function() {
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			if (entityToChange.components.material.material.metalness >= 0 && entityToChange.components.material.material.metalness <= 1){
				entityToChange.components.material.material.metalness += 0.1;
				let metalnessText = document.getElementById('metalnessText');
				metalnessText.setAttribute('value', Math.round(entityToChange.components.material.material.metalness * 100) + '%');
			}
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:2,y:2,z:2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	}
});

AFRAME.registerComponent('metalnessdown',{
	init:function() {
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			if (entityToChange.components.material.material.metalness >= 0 && entityToChange.components.material.material.metalness <= 1){
				entityToChange.components.material.material.metalness -= 0.1;
				let metalnessText = document.getElementById('metalnessText');
				metalnessText.setAttribute('value', Math.round(entityToChange.components.material.material.metalness * 100) + '%');
			}
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:2,y:2,z:2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	}
});

AFRAME.registerComponent('roughnessup',{
	init:function() {
		let el = this.el;
		let entityToChange = document.getElementById('entitytochange')
		//entityToChange.components.material.material.emissive ='red';
		el.addEventListener('grab-start', function () {

			if (entityToChange.components.material.material.roughness >= 0 && entityToChange.components.material.material.roughness <= 1){
				entityToChange.components.material.material.roughness += 0.1;
				let roughnessText = document.getElementById('roughnessText');
				console.log(opacityText)
				roughnessText.setAttribute('value', Math.round(entityToChange.components.material.material.roughness * 100) + '%');
			}
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:2,y:2,z:2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	}
});
AFRAME.registerComponent('roughnessdown',{
	init:function() {
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			if (entityToChange.components.material.material.roughness >= 0 && entityToChange.components.material.material.roughness <= 1){
				entityToChange.components.material.material.roughness -= 0.1;
				let roughnessText = document.getElementById('roughnessText');
				console.log(opacityText)
				roughnessText.setAttribute('value', Math.round(entityToChange.components.material.material.roughness * 100) + '%');
			}
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:2,y:2,z:2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	}
});

AFRAME.registerComponent('sizeupx',{
	init:function() {
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			entityToChange.object3D.scale.x += 0.5;
			//entityToChange.components.material.material.metalness += 0.1;
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:2,y:2,z:2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	}
});

AFRAME.registerComponent('opacityup',{
	init:function() {
		let el = this.el;
		let entityToChange = document.getElementById('entitytochange')
		el.addEventListener('grab-start', function () {
			if (entityToChange.components.material.material.opacity >= 0 && entityToChange.components.material.material.opacity <= 1){
				entityToChange.components.material.material.opacity += 0.1;
				let opacityText = document.getElementById('opacityText');
				console.log(opacityText)
				opacityText.setAttribute('value', Math.trunc(entityToChange.components.material.material.opacity * 100) + '%');
			}
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:2,y:2,z:2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	}
});

AFRAME.registerComponent('opacitydown',{
	init:function() {
		let el = this.el;
		let entityToChange = document.getElementById('entitytochange')
		el.addEventListener('grab-start', function () {
			if (entityToChange.components.material.material.opacity >= 0 && entityToChange.components.material.material.opacity <= 1){
				entityToChange.components.material.material.opacity -= 0.1;
				let opacityText = document.getElementById('opacityText');
				console.log(opacityText)
				opacityText.setAttribute('value', Math.trunc(entityToChange.components.material.material.opacity * 100) + '%');
			}


		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:2,y:2,z:2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	}
});

AFRAME.registerComponent('sizedownx',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			entityToChange.object3D.scale.x -= 0.5;
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:2,y:2,z:2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	}
});

AFRAME.registerComponent('sizeupy',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			entityToChange.object3D.scale.y += 0.5;
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:2,y:2,z:2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	}
});

AFRAME.registerComponent('sizedowny',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			entityToChange.object3D.scale.y -= 0.5;
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:2,y:2,z:2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	}
});

AFRAME.registerComponent('sizeupz',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			entityToChange.object3D.scale.z += 0.5;
			console.log(entityToChange.object3D.scale.z)
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:2,y:2,z:2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	}
});

AFRAME.registerComponent('sizedownz',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			entityToChange.object3D.scale.z -= 0.5;
			console.log(entityToChange.object3D.scale.z)
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:2,y:2,z:2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	}
});

AFRAME.registerComponent('rotationupx',{
	init:function() {
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			entityToChange.object3D.rotation.x += 0.5;
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:2,y:2,z:2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	}
});

AFRAME.registerComponent('rotationdownx',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			entityToChange.object3D.rotation.x -= 0.5;
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:2,y:2,z:2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	}
});

AFRAME.registerComponent('rotationupy',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			entityToChange.object3D.rotation.y += 0.5;
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:2,y:2,z:2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	}
});

AFRAME.registerComponent('rotationdowny',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			entityToChange.object3D.rotation.y -= 0.5;
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:2,y:2,z:2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	}
});

AFRAME.registerComponent('rotationupz',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			entityToChange.object3D.rotation.z += 0.5;
			console.log(entityToChange.object3D.scale.z)
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:2,y:2,z:2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	}
});

AFRAME.registerComponent('rotationdownz',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			let entityToChange = document.getElementById('entitytochange')
			entityToChange.object3D.rotation.z -= 0.5;
			console.log(entityToChange.object3D.scale.z)
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:2,y:2,z:2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	}
});


AFRAME.registerComponent('dotransparent',{
	init:function(){
		let el = this.el;
		let img = document.getElementById('transparentMenuImg');
		let entityToChange = document.getElementById('entitytochange')
		el.addEventListener('grab-start', function () {
			if (transparent === false) {

				img.setAttribute('src', '#transparenttrue');
				entityToChange.components.material.material.transparent = true;
				transparent = true;
			}else{
				img.setAttribute('src', '#transparentfalse');
				entityToChange.components.material.material.transparent = false;
				transparent = false;
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
AFRAME.registerComponent('env1',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			env = document.getElementById('env')

			if (env) {
				env.remove()
			}
			env = document.createElement('a-entity')
			env.setAttribute('environment',"preset:forest")
			env.setAttribute('id',"env")
			let scene = document.querySelector('#scn');
			console.log(scene)
			scene.appendChild(env);


		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('material',"color:#adadad; opacity: 0.5");
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('material',"color:white; opacity: 0.25");
		});
	}
});
AFRAME.registerComponent('env2',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			env = document.getElementById('env');

			if (env) {
				env.remove()
			}
			env = document.createElement('a-entity')
			env.setAttribute('environment',"preset:dream")
			env.setAttribute('id',"env")
			let scene = document.querySelector('#scn');
			console.log(scene)
			scene.appendChild(env);



		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('material',"color:#adadad; opacity: 0.5");
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('material',"color:white; opacity: 0.25");
		});
	}
});
AFRAME.registerComponent('env3',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			env = document.getElementById('env')

			if (env) {
				env.remove()
			}
				env = document.createElement('a-entity')
			env.setAttribute('environment',"preset:japan")
			env.setAttribute('id',"env")
			let scene = document.querySelector('#scn');
			console.log(scene)
			scene.appendChild(env);


		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('material',"color:#adadad; opacity: 0.5");
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('material',"color:white; opacity: 0.25");
		});
	}
});
AFRAME.registerComponent('env4',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			env = document.getElementById('env')

			if (env) {
				env.remove()
			}
				env = document.createElement('a-entity')
			env.setAttribute('environment',"preset:yavapai")
			env.setAttribute('id',"env")
			let scene = document.querySelector('#scn');
			console.log(scene)
			scene.appendChild(env);

		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('material',"color:#adadad; opacity: 0.5");
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('material',"color:white; opacity: 0.25");
		});
	}
});

AFRAME.registerComponent('env5',{
	init:function(){
		let el = this.el;
		el.addEventListener('grab-start', function () {
			env = document.getElementById('env')

			if (env) {
				env.remove()
			}
				env = document.createElement('a-entity')
				env.setAttribute('environment',"preset:default")
				env.setAttribute('id',"env")
				let scene = document.querySelector('#scn');
				console.log(scene)
				scene.appendChild(env);

		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('material',"color:#adadad; opacity: 0.5");
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('material',"color:white; opacity: 0.25");
		});
	}
});

AFRAME.registerComponent('selectenv',{
	init:function(){
		let el = this.el;
		let show = false;
		el.addEventListener('grab-start', function () {
		//tip = document.getElementById('tip');
		if (show === false){
			show = true;
			console.log("Abierto menú")
			let env1 = document.createElement('a-box');
			env1.setAttribute('position',{x:0,y:0.1,z:0});
			env1.setAttribute('rotation',{x:0,y:-25,z:0});
			env1.setAttribute('id','env1');
			env1.setAttribute('class','remote');
			env1.setAttribute('height', '0.1');
			env1.setAttribute('depth', '0.01');
			env1.setAttribute('width', '0.15');
			env1.setAttribute('material', 'color:white; opacity:0.25');
			env1.setAttribute('env1', {});
			document.getElementById('menuenv').appendChild(env1)
			let env1Img = document.createElement('a-plane');
			env1Img.setAttribute('position',{x:0,y:0,z:0});
			env1Img.setAttribute('height', '0.1');
			env1Img.setAttribute('id', 'env1Img');
			env1Img.setAttribute('width', '0.15');
			env1Img.setAttribute('src', '#forestimg');
			document.getElementById('env1').appendChild(env1Img);
			hasEnv1 = true;


			let env2 = document.createElement('a-box');
			env2.setAttribute('position',{x:0,y:0.22,z:0});
			env2.setAttribute('rotation',{x:0,y:-25,z:0});
			env2.setAttribute('id','env2');
			env2.setAttribute('class','remote');
			env2.setAttribute('height', '0.1');
			env2.setAttribute('depth', '0.01');
			env2.setAttribute('width', '0.15');
			env2.setAttribute('material', 'color:white; opacity:0.25');
			env2.setAttribute('env2', {});
			document.getElementById('menuenv').appendChild(env2)
			let env2Img = document.createElement('a-plane');
			env2Img.setAttribute('position',{x:0,y:0,z:0});
			env2Img.setAttribute('height', '0.1');
			env2Img.setAttribute('id', 'env2Img');
			env2Img.setAttribute('width', '0.15');
			env2Img.setAttribute('src', '#dreamimg');
			document.getElementById('env2').appendChild(env2Img);
			hasEnv2 = true;

			let env3 = document.createElement('a-box');
			env3.setAttribute('position',{x:0,y:0.34,z:0});
			env3.setAttribute('rotation',{x:0,y:-25,z:0});
			env3.setAttribute('id','env3');
			env3.setAttribute('class','remote');
			env3.setAttribute('height', '0.1');
			env3.setAttribute('depth', '0.01');
			env3.setAttribute('width', '0.15');
			env3.setAttribute('material', 'color:white; opacity:0.25');
			env3.setAttribute('env3', {});
			document.getElementById('menuenv').appendChild(env3)
			let env3Img = document.createElement('a-plane');
			env3Img.setAttribute('position',{x:0,y:0,z:0});
			env3Img.setAttribute('height', '0.1');
			env3Img.setAttribute('id', 'env3Img');
			env3Img.setAttribute('width', '0.15');
			env3Img.setAttribute('src', '#japanimg');
			document.getElementById('env3').appendChild(env3Img);
			hasEnv3 = true;

			let env4 = document.createElement('a-box');
			env4.setAttribute('position',{x:0,y:0.46,z:0});
			env4.setAttribute('rotation',{x:0,y:-25,z:0});
			env4.setAttribute('id','env4');
			env4.setAttribute('class','remote');
			env4.setAttribute('height', '0.1');
			env4.setAttribute('depth', '0.01');
			env4.setAttribute('width', '0.15');
			env4.setAttribute('material', 'color:white; opacity:0.25');
			env4.setAttribute('env4', {});
			document.getElementById('menuenv').appendChild(env4)
			let env4Img = document.createElement('a-plane');
			env4Img.setAttribute('position',{x:0,y:0,z:0});
			env4Img.setAttribute('height', '0.1');
			env4Img.setAttribute('id', 'env4Img');
			env4Img.setAttribute('width', '0.15');
			env4Img.setAttribute('src', '#Yavapaiimg');
			document.getElementById('env4').appendChild(env4Img);
			hasEnv4 = true;

			let env5 = document.createElement('a-box');
			env5.setAttribute('position',{x:0,y:0.58,z:0});
			env5.setAttribute('rotation',{x:0,y:-25,z:0});
			env5.setAttribute('id','env5');
			env5.setAttribute('class','remote');
			env5.setAttribute('height', '0.1');
			env5.setAttribute('depth', '0.01');
			env5.setAttribute('width', '0.15');
			env5.setAttribute('material', 'color:white; opacity:0.25');
			env5.setAttribute('env5', {});
			document.getElementById('menuenv').appendChild(env5)
			let env5Img = document.createElement('a-plane');
			env5Img.setAttribute('position',{x:0,y:0,z:0.0});
			env5Img.setAttribute('height', '0.1');
			env5Img.setAttribute('id', 'env4Img');
			env5Img.setAttribute('width', '0.15');
			env5Img.setAttribute('src', '#defaultimg');
			document.getElementById('env5').appendChild(env5Img);
			hasEnv5 = true;
			tip.setAttribute('visible', 'false')
		}else{
			document.getElementById('env1').remove();
			document.getElementById('env2').remove();
			document.getElementById('env3').remove();
			document.getElementById('env4').remove();
			document.getElementById('env5').remove();
			//tip.setAttribute('visible', 'true')
			show = false
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
			attributesSelector.setAttribute('position', {x:-0.45,y:1.3,z:-0.6});
			attributesSelector.setAttribute('rotation', {x:0,y:0,z:0});
			attributesSelector.setAttribute('width', '0.3');
			attributesSelector.setAttribute('height', '0.14');
			attributesSelector.setAttribute('depth', '0.01');
			let scene = document.querySelector('#editor');
			scene.appendChild(attributesSelector);


			let scaleMenu= document.createElement('a-box');
			scaleMenu.setAttribute('src', '#attributeAxisImg');
			scaleMenu.setAttribute('id', 'scalemenu');
			scaleMenu.setAttribute('position', {x:0,y:0.15,z:0});
			scaleMenu.setAttribute('width', '0.3');
			scaleMenu.setAttribute('height', '0.14');
			scaleMenu.setAttribute('depth', '0.01');
			attributesSelector.appendChild(scaleMenu);

			let sizeChooserUpx = document.createElement('a-box');
			sizeChooserUpx.setAttribute('position',{x:-0.12,y:0.022,z:0.0045});
			sizeChooserUpx.setAttribute('id','buttonupx');
			sizeChooserUpx.setAttribute('class','remote');
			sizeChooserUpx.setAttribute('height', '0.02');
			sizeChooserUpx.setAttribute('depth', '0.001');
			sizeChooserUpx.setAttribute('width', '0.02');
			sizeChooserUpx.setAttribute('material', 'color:#5E5E5E;');
			sizeChooserUpx.setAttribute('sizeupx', {});
			document.getElementById('scalemenu').appendChild(sizeChooserUpx);
			let sizeChooserUpxImg = document.createElement('a-text');
			sizeChooserUpxImg.setAttribute('position',{x:-0.008,y:0.004,z:0.0011});
			sizeChooserUpxImg.setAttribute('id', 'sizeChooserUpxImg');
			sizeChooserUpxImg.setAttribute('value', '+');
			sizeChooserUpxImg.setAttribute('scale', '0.1 0.1 0.1');
			sizeChooserUpxImg.setAttribute('color', 'black');
			document.getElementById('buttonupx').appendChild(sizeChooserUpxImg);


			let sizeChooserDownX = document.createElement('a-box');
			sizeChooserDownX.setAttribute('position',{x:-0.06,y:0.022,z:0.0045});
			sizeChooserDownX.setAttribute('id','buttondownx');
			sizeChooserDownX.setAttribute('class','remote');
			sizeChooserDownX.setAttribute('height', '0.02');
			sizeChooserDownX.setAttribute('depth', '0.001');
			sizeChooserDownX.setAttribute('width', '0.02');
			sizeChooserDownX.setAttribute('material', 'color:#5E5E5E;');
			sizeChooserDownX.setAttribute('sizedownx', {});
			document.getElementById('scalemenu').appendChild(sizeChooserDownX);
			let sizeChooserDownxImg = document.createElement('a-text');
			sizeChooserDownxImg.setAttribute('position',{x:-0.008,y:0.004,z:0.0011});
			sizeChooserDownxImg.setAttribute('id', 'sizeChooserDownxImg');
			sizeChooserDownxImg.setAttribute('value', '-');
			sizeChooserDownxImg.setAttribute('scale', '0.16 0.16 0.16');
			sizeChooserDownxImg.setAttribute('color', 'black');
			document.getElementById('buttondownx').appendChild(sizeChooserDownxImg);

			let sizeChooserUpY = document.createElement('a-box');
			sizeChooserUpY.setAttribute('position',{x:-0.025,y:-0.03,z:0.0045});
			sizeChooserUpY.setAttribute('id','buttonupY');
			sizeChooserUpY.setAttribute('class','remote');
			sizeChooserUpY.setAttribute('height', '0.02');
			sizeChooserUpY.setAttribute('depth', '0.001');
			sizeChooserUpY.setAttribute('width', '0.02');
			sizeChooserUpY.setAttribute('material', 'color:#5E5E5E;');
			sizeChooserUpY.setAttribute('sizeupy', {});
			document.getElementById('scalemenu').appendChild(sizeChooserUpY);
			let sizeChooserUpYImg = document.createElement('a-text');
			sizeChooserUpYImg.setAttribute('position',{x:-0.008,y:0.004,z:0.0011});
			sizeChooserUpYImg.setAttribute('id', 'sizeChooserDownxImg');
			sizeChooserUpYImg.setAttribute('value', '+');
			sizeChooserUpYImg.setAttribute('scale', '0.1 0.1	0.1');
			sizeChooserUpYImg.setAttribute('color', 'black');
			document.getElementById('buttonupY').appendChild(sizeChooserUpYImg);

			let sizeChooserDownY = document.createElement('a-box');
			sizeChooserDownY.setAttribute('position',{x:0.032,y:-0.03,z:0.0045});
			sizeChooserDownY.setAttribute('id','buttondowny');
			sizeChooserDownY.setAttribute('class','remote');
			sizeChooserDownY.setAttribute('height', '0.02');
			sizeChooserDownY.setAttribute('depth', '0.001');
			sizeChooserDownY.setAttribute('width', '0.02');
			sizeChooserDownY.setAttribute('material', 'color:#5E5E5E;');
			sizeChooserDownY.setAttribute('sizedownY', {});
			document.getElementById('scalemenu').appendChild(sizeChooserDownY);
			let sizeChooserDownYImg = document.createElement('a-text');
			sizeChooserDownYImg.setAttribute('position',{x:-0.008,y:0.004,z:0.0011});
			sizeChooserDownYImg.setAttribute('id', 'sizeChooserDownYImg');
			sizeChooserDownYImg.setAttribute('value', '-');
			sizeChooserDownYImg.setAttribute('scale', '0.16 0.16	0.16');
			sizeChooserDownYImg.setAttribute('color', 'black');
			document.getElementById('buttondowny').appendChild(sizeChooserDownYImg);

			let sizeChooserUpZ = document.createElement('a-box');
			sizeChooserUpZ.setAttribute('position',{x:0.06,y:0.022,z:0.0045});
			sizeChooserUpZ.setAttribute('id','buttonupZ');
			sizeChooserUpZ.setAttribute('class','remote');
			sizeChooserUpZ.setAttribute('height', '0.02');
			sizeChooserUpZ.setAttribute('depth', '0.001');
			sizeChooserUpZ.setAttribute('width', '0.02');
			sizeChooserUpZ.setAttribute('material', 'color:#5E5E5E;');
			sizeChooserUpZ.setAttribute('sizeupz', {});
			document.getElementById('scalemenu').appendChild(sizeChooserUpZ);
			let sizeChooserUpZImg = document.createElement('a-text');
			sizeChooserUpZImg.setAttribute('position',{x:-0.008,y:0.004,z:0.0011});
			sizeChooserUpZImg.setAttribute('id', 'sizeChooserUpZImg');
			sizeChooserUpZImg.setAttribute('value', '+');
			sizeChooserUpZImg.setAttribute('scale', '0.1 0.1	0.1');
			sizeChooserUpZImg.setAttribute('color', 'black');
			document.getElementById('buttonupZ').appendChild(sizeChooserUpZImg);

			let sizeChooserDownZ = document.createElement('a-box');
			sizeChooserDownZ.setAttribute('position',{x:0.12,y:0.022,z:0.0045});
			sizeChooserDownZ.setAttribute('id','buttondownz');
			sizeChooserDownZ.setAttribute('class','remote');
			sizeChooserDownZ.setAttribute('height', '0.02');
			sizeChooserDownZ.setAttribute('depth', '0.001');
			sizeChooserDownZ.setAttribute('width', '0.02');
			sizeChooserDownZ.setAttribute('material', 'color:#5E5E5E;');
			sizeChooserDownZ.setAttribute('sizedownz', {});
			document.getElementById('scalemenu').appendChild(sizeChooserDownZ);
			let sizeChooserDownZImg = document.createElement('a-text');
			sizeChooserDownZImg.setAttribute('position',{x:-0.008,y:0.004,z:0.0011});
			sizeChooserDownZImg.setAttribute('id', 'sizeChooserDownZImg');
			sizeChooserDownZImg.setAttribute('value', '-');
			sizeChooserDownZImg.setAttribute('scale', '0.16 0.16 0.16');
			sizeChooserDownZImg.setAttribute('color', 'black');
			document.getElementById('buttondownz').appendChild(sizeChooserDownZImg);

			let rotationMenu= document.createElement('a-box');
			rotationMenu.setAttribute('src', '#rotationimg');
			rotationMenu.setAttribute('id', 'rotationmenu');
			rotationMenu.setAttribute('position', {x:0.31,y:0.15,z:0});
			rotationMenu.setAttribute('width', '0.3');
			rotationMenu.setAttribute('height', '0.14');
			rotationMenu.setAttribute('depth', '0.01');
			attributesSelector.appendChild(rotationMenu);

			let transparentMenu = document.createElement('a-box');
			transparentMenu.setAttribute('position',{x:0.31,y:0,z:0});
			transparentMenu.setAttribute('id','transparentMenu');
			transparentMenu.setAttribute('class','remote');
			transparentMenu.setAttribute('height', '0.14');
			transparentMenu.setAttribute('depth', '0.015');
			transparentMenu.setAttribute('width', '0.3');
			transparentMenu.setAttribute('material', 'color:white; opacity:0.25');
			transparentMenu.setAttribute('dotransparent', {});
			attributesSelector.appendChild(transparentMenu)
			let transparentMenuImg = document.createElement('a-plane');
			transparentMenuImg.setAttribute('position',{x:0,y:0,z:0});
			transparentMenuImg.setAttribute('height', '0.14');
			transparentMenuImg.setAttribute('id', 'transparentMenuImg');
			transparentMenuImg.setAttribute('width', '0.3');
			transparentMenuImg.setAttribute('src', '#transparentfalse');
			document.getElementById('transparentMenu').appendChild(transparentMenuImg);

            let rotationChooserUpx = document.createElement('a-box');
			rotationChooserUpx.setAttribute('position',{x:-0.12,y:0.022,z:0.0045});
			rotationChooserUpx.setAttribute('id','buttonrotationupx');
			rotationChooserUpx.setAttribute('class','remote');
			rotationChooserUpx.setAttribute('height', '0.02');
			rotationChooserUpx.setAttribute('depth', '0.001');
			rotationChooserUpx.setAttribute('width', '0.02');
			rotationChooserUpx.setAttribute('material', 'color:#5E5E5E;');
			rotationChooserUpx.setAttribute('rotationupx', {});
			document.getElementById('rotationmenu').appendChild(rotationChooserUpx);
			let rotationChooserUpxImg = document.createElement('a-text');
			rotationChooserUpxImg.setAttribute('position',{x:-0.008,y:0.004,z:0.0011});
			rotationChooserUpxImg.setAttribute('id', 'rotationChooserUpxImg');
			rotationChooserUpxImg.setAttribute('value', '+');
			rotationChooserUpxImg.setAttribute('scale', '0.1 0.1 0.1');
			rotationChooserUpxImg.setAttribute('color', 'black');
            document.getElementById('buttonrotationupx').appendChild(rotationChooserUpxImg);

            let rotationChooserDownx = document.createElement('a-box');
			rotationChooserDownx.setAttribute('position',{x:-0.06,y:0.022,z:0.0045});
			rotationChooserDownx.setAttribute('id','buttonrotationdownx');
			rotationChooserDownx.setAttribute('class','remote');
			rotationChooserDownx.setAttribute('height', '0.02');
			rotationChooserDownx.setAttribute('depth', '0.001');
			rotationChooserDownx.setAttribute('width', '0.02');
			rotationChooserDownx.setAttribute('material', 'color:#5E5E5E;');
			rotationChooserDownx.setAttribute('rotationdownx', {});
			document.getElementById('rotationmenu').appendChild(rotationChooserDownx);
			let rotationChooserDownxImg = document.createElement('a-text');
			rotationChooserDownxImg.setAttribute('position',{x:-0.008,y:0.004,z:0.0011});
			rotationChooserDownxImg.setAttribute('id', 'rotationChooserDownxImg');
			rotationChooserDownxImg.setAttribute('value', '-');
			rotationChooserDownxImg.setAttribute('scale', '0.16 0.16 0.16');
			rotationChooserDownxImg.setAttribute('color', 'black');
			document.getElementById('buttonrotationdownx').appendChild(rotationChooserDownxImg);

			let rotationChooserUpY = document.createElement('a-box');
			rotationChooserUpY.setAttribute('position',{x:-0.027,y:-0.03,z:0.0045});
			rotationChooserUpY.setAttribute('id','buttonrotationupY');
			rotationChooserUpY.setAttribute('class','remote');
			rotationChooserUpY.setAttribute('height', '0.02');
			rotationChooserUpY.setAttribute('depth', '0.001');
			rotationChooserUpY.setAttribute('width', '0.02');
			rotationChooserUpY.setAttribute('material', 'color:#5E5E5E;');
			rotationChooserUpY.setAttribute('rotationupy', {});
			document.getElementById('rotationmenu').appendChild(rotationChooserUpY);
			let rotationChooserUpYImg = document.createElement('a-text');
			rotationChooserUpYImg.setAttribute('position',{x:-0.008,y:0.004,z:0.0011});
			rotationChooserUpYImg.setAttribute('id', 'rotationChooserUpYImg');
			rotationChooserUpYImg.setAttribute('value', '+');
			rotationChooserUpYImg.setAttribute('scale', '0.1 0.1	0.1');
			rotationChooserUpYImg.setAttribute('color', 'black');
			document.getElementById('buttonrotationupY').appendChild(rotationChooserUpYImg);

			let rotationChooserDownY = document.createElement('a-box');
			rotationChooserDownY.setAttribute('position',{x:0.030,y:-0.03,z:0.0045});
			rotationChooserDownY.setAttribute('id','buttonrotationdowny');
			rotationChooserDownY.setAttribute('class','remote');
			rotationChooserDownY.setAttribute('height', '0.02');
			rotationChooserDownY.setAttribute('depth', '0.001');
			rotationChooserDownY.setAttribute('width', '0.02');
			rotationChooserDownY.setAttribute('material', 'color:#5E5E5E;');
			rotationChooserDownY.setAttribute('rotationdownY', {});
			document.getElementById('rotationmenu').appendChild(rotationChooserDownY);
			let rotationChooserDownYImg = document.createElement('a-text');
			rotationChooserDownYImg.setAttribute('position',{x:-0.008,y:0.004,z:0.0011});
			rotationChooserDownYImg.setAttribute('id', 'rotationChooserDownYImg');
			rotationChooserDownYImg.setAttribute('value', '-');
			rotationChooserDownYImg.setAttribute('scale', '0.16 0.16	0.16');
			rotationChooserDownYImg.setAttribute('color', 'black');
			document.getElementById('buttonrotationdowny').appendChild(rotationChooserDownYImg);

			let rotationChooserUpZ = document.createElement('a-box');
			rotationChooserUpZ.setAttribute('position',{x:0.055,y:0.022,z:0.0045});
			rotationChooserUpZ.setAttribute('id','buttorotationnupZ');
			rotationChooserUpZ.setAttribute('class','remote');
			rotationChooserUpZ.setAttribute('height', '0.02');
			rotationChooserUpZ.setAttribute('depth', '0.001');
			rotationChooserUpZ.setAttribute('width', '0.02');
			rotationChooserUpZ.setAttribute('material', 'color:#5E5E5E;');
			rotationChooserUpZ.setAttribute('rotationupz', {});
			document.getElementById('rotationmenu').appendChild(rotationChooserUpZ);
			let rotationChooserUpZImg = document.createElement('a-text');
			rotationChooserUpZImg.setAttribute('position',{x:-0.008,y:0.004,z:0.0011});
			rotationChooserUpZImg.setAttribute('id', 'rotationChooserUpZImg');
			rotationChooserUpZImg.setAttribute('value', '+');
			rotationChooserUpZImg.setAttribute('scale', '0.1 0.1	0.1');
			rotationChooserUpZImg.setAttribute('color', 'black');
			document.getElementById('buttorotationnupZ').appendChild(rotationChooserUpZImg);

			let rotationChooserDownZ = document.createElement('a-box');
			rotationChooserDownZ.setAttribute('position',{x:0.115,y:0.022,z:0.0045});
			rotationChooserDownZ.setAttribute('id','buttonrotationdownz');
			rotationChooserDownZ.setAttribute('class','remote');
			rotationChooserDownZ.setAttribute('height', '0.02');
			rotationChooserDownZ.setAttribute('depth', '0.001');
			rotationChooserDownZ.setAttribute('width', '0.02');
			rotationChooserDownZ.setAttribute('material', 'color:#5E5E5E;');
			rotationChooserDownZ.setAttribute('rotationdownz', {});
			document.getElementById('rotationmenu').appendChild(rotationChooserDownZ);
			let rotationChooserDownZImg = document.createElement('a-text');
			rotationChooserDownZImg.setAttribute('position',{x:-0.008,y:0.004,z:0.0011});
			rotationChooserDownZImg.setAttribute('id', 'rotationChooserDownZImg');
			rotationChooserDownZImg.setAttribute('value', '-');
			rotationChooserDownZImg.setAttribute('scale', '0.16 0.16 0.16');
			rotationChooserDownZImg.setAttribute('color', 'black');
			document.getElementById('buttonrotationdownz').appendChild(rotationChooserDownZImg);



			let materialMenu= document.createElement('a-box');
			materialMenu.setAttribute('src', '#materialimg');
			materialMenu.setAttribute('id', 'materialMenu');
			materialMenu.setAttribute('position', {x:0.62,y:0.077,z:0});
			materialMenu.setAttribute('width', '0.3');
			materialMenu.setAttribute('height', '0.285');
			materialMenu.setAttribute('depth', '0.01');
			attributesSelector.appendChild(materialMenu);
			let metalnessUp = document.createElement('a-box');
			metalnessUp.setAttribute('position',{x:-0.07725,y:-0.045,z:0.0045});
			metalnessUp.setAttribute('id','metalnessUp');
			metalnessUp.setAttribute('class','remote');
			metalnessUp.setAttribute('height', '0.015');
			metalnessUp.setAttribute('depth', '0.001');
			metalnessUp.setAttribute('width', '0.015');
			metalnessUp.setAttribute('material', 'color:#5E5E5E;');
			metalnessUp.setAttribute('metalnessup', {});
			document.getElementById('materialMenu').appendChild(metalnessUp);
			let metalnessUpImg = document.createElement('a-text');
			metalnessUpImg.setAttribute('position',{x:-0.015,y:0.004,z:0.0011});
			metalnessUpImg.setAttribute('id', 'metalnessUpImg');
			metalnessUpImg.setAttribute('value', '+');
			metalnessUpImg.setAttribute('scale', '0.16 0.16 0.16');
			metalnessUpImg.setAttribute('color', 'black');
			document.getElementById('metalnessUp').appendChild(metalnessUpImg);
			let metalnessDown = document.createElement('a-box');
			metalnessDown.setAttribute('position',{x:0.085,y:-0.042,z:0.0045});
			metalnessDown.setAttribute('id','metalnessDown');
			metalnessDown.setAttribute('class','remote');
			metalnessDown.setAttribute('height', '0.015');
			metalnessDown.setAttribute('depth', '0.001');
			metalnessDown.setAttribute('width', '0.015');
			metalnessDown.setAttribute('material', 'color:#5E5E5E;');
			metalnessDown.setAttribute('metalnessdown', {});
			document.getElementById('materialMenu').appendChild(metalnessDown);
			let metalnessDownImg = document.createElement('a-text');
			metalnessDownImg.setAttribute('position',{x:-0.015,y:0.004,z:0.0011});
			metalnessDownImg.setAttribute('id', 'metalnessDownImg');
			metalnessDownImg.setAttribute('value', '-');
			metalnessDownImg.setAttribute('scale', '0.16 0.16 0.16');
			metalnessDownImg.setAttribute('color', 'black');
			document.getElementById('metalnessDown').appendChild(metalnessDownImg);
			let metalnessText = document.createElement('a-text');
			metalnessText.setAttribute('position',{x:-0.04,y:-0.042,z:0.005});
			metalnessText.setAttribute('id', 'metalnessText');
			metalnessText.setAttribute('value', '0%');
			metalnessText.setAttribute('scale', '0.14 0.14 0.14');
			metalnessText.setAttribute('color', 'black');
			document.getElementById('materialMenu').appendChild(metalnessText);

			let roughnessUp = document.createElement('a-box');
			roughnessUp.setAttribute('position',{x:-0.07725,y:0.0325,z:0.0045});
			roughnessUp.setAttribute('id','roughnessUp');
			roughnessUp.setAttribute('class','remote');
			roughnessUp.setAttribute('height', '0.015');
			roughnessUp.setAttribute('depth', '0.001');
			roughnessUp.setAttribute('width', '0.015');
			roughnessUp.setAttribute('material', 'color:#5E5E5E;');
			roughnessUp.setAttribute('roughnessup', {});
			document.getElementById('materialMenu').appendChild(roughnessUp);
			let roughnessUpImg = document.createElement('a-text');
			roughnessUpImg.setAttribute('position',{x:-0.015,y:0.004,z:0.0011});
			roughnessUpImg.setAttribute('id', 'roughnessUpImg');
			roughnessUpImg.setAttribute('value', '+');
			roughnessUpImg.setAttribute('scale', '0.16 0.16 0.16');
			roughnessUpImg.setAttribute('color', 'black');
			document.getElementById('roughnessUp').appendChild(roughnessUpImg);
			let roughnessDown = document.createElement('a-box');
			roughnessDown.setAttribute('position',{x:0.085,y:0.035,z:0.0045});
			roughnessDown.setAttribute('id','roughnessDown');
			roughnessDown.setAttribute('class','remote');
			roughnessDown.setAttribute('height', '0.015');
			roughnessDown.setAttribute('depth', '0.001');
			roughnessDown.setAttribute('width', '0.015');
			roughnessDown.setAttribute('material', 'color:#5E5E5E;');
			roughnessDown.setAttribute('roughnessdown', {});
			document.getElementById('materialMenu').appendChild(roughnessDown);
			let roughnessDownImg = document.createElement('a-text');
			roughnessDownImg.setAttribute('position',{x:-0.015,y:0.004,z:0.0011});
			roughnessDownImg.setAttribute('id', 'metalnessDownImg');
			roughnessDownImg.setAttribute('value', '-');
			roughnessDownImg.setAttribute('scale', '0.16 0.16 0.16');
			roughnessDownImg.setAttribute('color', 'black');
			document.getElementById('roughnessDown').appendChild(roughnessDownImg);
			let roughnessText = document.createElement('a-text');
			roughnessText.setAttribute('position',{x:-0.04,y:0.035,z:0.005});
			roughnessText.setAttribute('id', 'roughnessText');
			roughnessText.setAttribute('value', '50%');
			roughnessText.setAttribute('scale', '0.14 0.14 0.14');
			roughnessText.setAttribute('color', 'black');
			document.getElementById('materialMenu').appendChild(roughnessText);

			let opacityUp = document.createElement('a-box');
			opacityUp.setAttribute('position',{x:-0.07725,y:-0.12,z:0.0045});
			opacityUp.setAttribute('id','opacityUp');
			opacityUp.setAttribute('class','remote');
			opacityUp.setAttribute('height', '0.015');
			opacityUp.setAttribute('depth', '0.001');
			opacityUp.setAttribute('width', '0.015');
			opacityUp.setAttribute('material', 'color:#5E5E5E;');
			opacityUp.setAttribute('opacityup', {});
			document.getElementById('materialMenu').appendChild(opacityUp);
			let opacityUpImg = document.createElement('a-text');
			opacityUpImg.setAttribute('position',{x:-0.015,y:0.004,z:0.0011});
			opacityUpImg.setAttribute('id', 'roughnessUpImg');
			opacityUpImg.setAttribute('value', '+');
			opacityUpImg.setAttribute('scale', '0.16 0.16 0.16');
			opacityUpImg.setAttribute('color', 'black');
			document.getElementById('opacityUp').appendChild(opacityUpImg);
			let opacityDown = document.createElement('a-box');
			opacityDown.setAttribute('position',{x:0.085,y:-0.12,z:0.0045});
			opacityDown.setAttribute('id','opacityDown');
			opacityDown.setAttribute('class','remote');
			opacityDown.setAttribute('height', '0.015');
			opacityDown.setAttribute('depth', '0.001');
			opacityDown.setAttribute('width', '0.015');
			opacityDown.setAttribute('material', 'color:#5E5E5E;');
			opacityDown.setAttribute('opacitydown', {});
			document.getElementById('materialMenu').appendChild(opacityDown);
			let opacityDownImg = document.createElement('a-text');
			opacityDownImg.setAttribute('position',{x:-0.015,y:0.004,z:0.0011});
			opacityDownImg.setAttribute('id', 'metalnessDownImg');
			opacityDownImg.setAttribute('value', '-');
			opacityDownImg.setAttribute('scale', '0.16 0.16 0.16');
			opacityDownImg.setAttribute('color', 'black');
			document.getElementById('opacityDown').appendChild(opacityDownImg);
			let opacitityText = document.createElement('a-text');
			opacitityText.setAttribute('position',{x:-0.04,y:-0.12,z:0.005});
			opacitityText.setAttribute('id', 'opacityText');
			opacitityText.setAttribute('value', '100%');
			opacitityText.setAttribute('scale', '0.14 0.14 0.14');
			opacitityText.setAttribute('color', 'black');
			document.getElementById('materialMenu').appendChild(opacitityText);


			for (let color of colors) {
				let colorButton = document.createElement('a-entity');
				if (el.getAttribute('class').search('sphere') >= 0) {
					colorButton.setAttribute('geometry', {primitive: 'sphere', radius: 0.01});
					colorButton.setAttribute('position', ((colors.indexOf(color) * 0.0235) - 0.13) + " -0.025 0");
				} else if (el.getAttribute('class').search('plane') >= 0) {
					colorButton.setAttribute('geometry', {primitive: 'plane', width: 0.017, height: 0.017});
					colorButton.setAttribute('position', ((colors.indexOf(color) * 0.0235) - 0.13) + " -0.025 0.0100001");
				} else if (el.getAttribute('class').search('cube') >= 0) {
					colorButton.setAttribute('geometry', {
						primitive: 'box',
						width: 0.017,
						height: 0.017,
						depth: 0.01
					});
					colorButton.setAttribute('position', ((colors.indexOf(color) * 0.0235) - 0.13) + " -0.025 0.0100001");
				} else {
					colorButton.setAttribute('geometry', {primitive: 'cylinder', radius: 0.01, height: 0.01});
					colorButton.setAttribute('position', ((colors.indexOf(color) * 0.0235) - 0.13) + " -0.025 0.0100001");
				}
				colorButton.setAttribute('class', 'button');
				//colorButton.setAttribute('id', 'colours');
				colorButton.setAttribute('material', ' color :' + color);
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
			el.setAttribute('scale',{x:2,y:2,z:2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
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
			el.setAttribute('scale',{x:2,y:2,z:2});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	}
});
AFRAME.registerComponent('base',{
	schema:{
		event: {type: 'string', default: 'click'}
	},

	init: function(){
		console.log("dentro del componente base");

		let skyPrincipal = document.createElement('a-sky');
		skyPrincipal.setAttribute('theta-length',90 )
		skyPrincipal.setAttribute('radius',30 )
		skyPrincipal.setAttribute('color', '#000000')
		document.getElementById('index').appendChild(skyPrincipal)

	},
});

AFRAME.registerComponent('gotoeditor',{

	init: function(){
		let el = this.el;
		this.el.addEventListener('grab-start', function(){
			window.location.assign("../FinalVersion/Desktop.html");
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:1.1,y:1.1,z:1.1});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	},


});
AFRAME.registerComponent('gotoeditorglasses',{

	init: function(){
		let el = this.el;
		this.el.addEventListener('grab-start', function(){
			window.location.assign("../FinalVersion/Glasses.html");
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:1.1,y:1.1,z:1.1});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	},


});


AFRAME.registerComponent('gotohome',{

	init: function(){
		let el = this.el;
		this.el.addEventListener('grab-start', function(){
			window.location.assign("../Home/HomeDesktop.html");
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:1.1,y:1.1,z:1.1});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	},


});

AFRAME.registerComponent('gotohomeglasses',{

	init: function(){
		let el = this.el;
		this.el.addEventListener('grab-start', function(){
			window.location.assign("../Home/HomeGlasses.html");
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:1.1,y:1.1,z:1.1});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	},
});

AFRAME.registerComponent('goinstructionglasses',{

	init: function(){
		let el = this.el;
		this.el.addEventListener('grab-start', function(){
			window.location.assign("../Home/instructionsGlasses.html");
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:1.1,y:1.1,z:1.1});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
	},
});

AFRAME.registerComponent('gotoinstructiondesktop',{

	init: function(){
		let el = this.el;
		this.el.addEventListener('grab-start', function(){
			window.location.assign("../Home/instructionsDesktop.html");
		});
		el.addEventListener('raycaster-intersected', function () {
			el.setAttribute('scale',{x:1.1,y:1.1,z:1.1});
		});
		el.addEventListener('raycaster-intersected-cleared', function () {
			el.setAttribute('scale',{x:1,y:1,z:1});
		});
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
			attributesSelector.setAttribute('position', {x:-0.225,y:1.3,z:-0.6});
			attributesSelector.setAttribute('rotation', {x:-15,y:0,z:0});
			attributesSelector.setAttribute('width', '0.3');
			attributesSelector.setAttribute('height', '0.14');
			attributesSelector.setAttribute('depth', '0.01');

			let scene = document.querySelector('#editor');
			scene.appendChild(attributesSelector);

			let sizeChooserUpx = document.createElement('a-box');
			sizeChooserUpx.setAttribute('position',{x:-0.05,y:-0.015,z:0.0045});
			sizeChooserUpx.setAttribute('id','buttonupxgltf');
			sizeChooserUpx.setAttribute('class','remote');
			sizeChooserUpx.setAttribute('height', '0.02');
			sizeChooserUpx.setAttribute('depth', '0.001');
			sizeChooserUpx.setAttribute('width', '0.02');
			sizeChooserUpx.setAttribute('material', 'color:#5E5E5E;');
			sizeChooserUpx.setAttribute('sizeupxgltf', {});
			document.getElementById('attributemenu').appendChild(sizeChooserUpx);
			let sizeChooserUpxImg = document.createElement('a-text');
			sizeChooserUpxImg.setAttribute('position',{x:-0.008,y:0.004,z:0.0011});
			sizeChooserUpxImg.setAttribute('id', 'sizeChooserUpxImg');
			sizeChooserUpxImg.setAttribute('value', '+');
			sizeChooserUpxImg.setAttribute('scale', '0.15 0.15 0.15');
			sizeChooserUpxImg.setAttribute('color', 'black');
			document.getElementById('buttonupxgltf').appendChild(sizeChooserUpxImg);


			let sizeChooserDownX = document.createElement('a-box');
			sizeChooserDownX.setAttribute('position',{x:0.04,y:-0.015,z:0.0045});
			sizeChooserDownX.setAttribute('id','buttondownxgltf');
			sizeChooserDownX.setAttribute('class','remote');
			sizeChooserDownX.setAttribute('height', '0.02');
			sizeChooserDownX.setAttribute('depth', '0.001');
			sizeChooserDownX.setAttribute('width', '0.02');
			sizeChooserDownX.setAttribute('material', 'color:#5E5E5E;');
			sizeChooserDownX.setAttribute('sizedownxgltf', {});
			document.getElementById('attributemenu').appendChild(sizeChooserDownX);
			let sizeChooserDownxImg = document.createElement('a-text');
			sizeChooserDownxImg.setAttribute('position',{x:-0.008,y:0.004,z:0.0011});
			sizeChooserDownxImg.setAttribute('id', 'sizeChooserDownxImg');
			sizeChooserDownxImg.setAttribute('value', '-');
			sizeChooserDownxImg.setAttribute('scale', '0.2 0.2 0.2');
			sizeChooserDownxImg.setAttribute('color', 'black');
			document.getElementById('buttondownxgltf').appendChild(sizeChooserDownxImg);


			let rotationMenu= document.createElement('a-box');
			rotationMenu.setAttribute('src', '#rotationimg');
			rotationMenu.setAttribute('id', 'rotationmenu');
			rotationMenu.setAttribute('position', {x:0,y:0.15,z:0});
			rotationMenu.setAttribute('width', '0.3');
			rotationMenu.setAttribute('height', '0.14');
			rotationMenu.setAttribute('depth', '0.01');
			attributesSelector.appendChild(rotationMenu);

            let rotationChooserUpx = document.createElement('a-box');
			rotationChooserUpx.setAttribute('position',{x:-0.12,y:0.022,z:0.0045});
			rotationChooserUpx.setAttribute('id','buttonrotationupx');
			rotationChooserUpx.setAttribute('class','remote');
			rotationChooserUpx.setAttribute('height', '0.02');
			rotationChooserUpx.setAttribute('depth', '0.001');
			rotationChooserUpx.setAttribute('width', '0.02');
			rotationChooserUpx.setAttribute('material', 'color:#5E5E5E;');
			rotationChooserUpx.setAttribute('rotationupx', {});
			document.getElementById('rotationmenu').appendChild(rotationChooserUpx);
			let rotationChooserUpxImg = document.createElement('a-text');
			rotationChooserUpxImg.setAttribute('position',{x:-0.008,y:0.004,z:0.0011});
			rotationChooserUpxImg.setAttribute('id', 'rotationChooserUpxImg');
			rotationChooserUpxImg.setAttribute('value', '+');
			rotationChooserUpxImg.setAttribute('scale', '0.1 0.1 0.1');
			rotationChooserUpxImg.setAttribute('color', 'black');
            document.getElementById('buttonrotationupx').appendChild(rotationChooserUpxImg);

            let rotationChooserDownx = document.createElement('a-box');
			rotationChooserDownx.setAttribute('position',{x:-0.06,y:0.022,z:0.0045});
			rotationChooserDownx.setAttribute('id','buttonrotationdownx');
			rotationChooserDownx.setAttribute('class','remote');
			rotationChooserDownx.setAttribute('height', '0.02');
			rotationChooserDownx.setAttribute('depth', '0.001');
			rotationChooserDownx.setAttribute('width', '0.02');
			rotationChooserDownx.setAttribute('material', 'color:#5E5E5E;');
			rotationChooserDownx.setAttribute('rotationdownx', {});
			document.getElementById('rotationmenu').appendChild(rotationChooserDownx);
			let rotationChooserDownxImg = document.createElement('a-text');
			rotationChooserDownxImg.setAttribute('position',{x:-0.008,y:0.004,z:0.0011});
			rotationChooserDownxImg.setAttribute('id', 'rotationChooserDownxImg');
			rotationChooserDownxImg.setAttribute('value', '-');
			rotationChooserDownxImg.setAttribute('scale', '0.16 0.16 0.16');
			rotationChooserDownxImg.setAttribute('color', 'black');
			document.getElementById('buttonrotationdownx').appendChild(rotationChooserDownxImg);

			let rotationChooserUpY = document.createElement('a-box');
			rotationChooserUpY.setAttribute('position',{x:-0.027,y:-0.03,z:0.0045});
			rotationChooserUpY.setAttribute('id','buttonrotationupY');
			rotationChooserUpY.setAttribute('class','remote');
			rotationChooserUpY.setAttribute('height', '0.02');
			rotationChooserUpY.setAttribute('depth', '0.001');
			rotationChooserUpY.setAttribute('width', '0.02');
			rotationChooserUpY.setAttribute('material', 'color:#5E5E5E;');
			rotationChooserUpY.setAttribute('rotationupy', {});
			document.getElementById('rotationmenu').appendChild(rotationChooserUpY);
			let rotationChooserUpYImg = document.createElement('a-text');
			rotationChooserUpYImg.setAttribute('position',{x:-0.008,y:0.004,z:0.0011});
			rotationChooserUpYImg.setAttribute('id', 'rotationChooserUpYImg');
			rotationChooserUpYImg.setAttribute('value', '+');
			rotationChooserUpYImg.setAttribute('scale', '0.1 0.1	0.1');
			rotationChooserUpYImg.setAttribute('color', 'black');
			document.getElementById('buttonrotationupY').appendChild(rotationChooserUpYImg);

			let rotationChooserDownY = document.createElement('a-box');
			rotationChooserDownY.setAttribute('position',{x:0.030,y:-0.03,z:0.0045});
			rotationChooserDownY.setAttribute('id','buttonrotationdowny');
			rotationChooserDownY.setAttribute('class','remote');
			rotationChooserDownY.setAttribute('height', '0.02');
			rotationChooserDownY.setAttribute('depth', '0.001');
			rotationChooserDownY.setAttribute('width', '0.02');
			rotationChooserDownY.setAttribute('material', 'color:#5E5E5E;');
			rotationChooserDownY.setAttribute('rotationdownY', {});
			document.getElementById('rotationmenu').appendChild(rotationChooserDownY);
			let rotationChooserDownYImg = document.createElement('a-text');
			rotationChooserDownYImg.setAttribute('position',{x:-0.008,y:0.004,z:0.0011});
			rotationChooserDownYImg.setAttribute('id', 'rotationChooserDownYImg');
			rotationChooserDownYImg.setAttribute('value', '-');
			rotationChooserDownYImg.setAttribute('scale', '0.16 0.16	0.16');
			rotationChooserDownYImg.setAttribute('color', 'black');
			document.getElementById('buttonrotationdowny').appendChild(rotationChooserDownYImg);

			let rotationChooserUpZ = document.createElement('a-box');
			rotationChooserUpZ.setAttribute('position',{x:0.055,y:0.022,z:0.0045});
			rotationChooserUpZ.setAttribute('id','buttorotationnupZ');
			rotationChooserUpZ.setAttribute('class','remote');
			rotationChooserUpZ.setAttribute('height', '0.02');
			rotationChooserUpZ.setAttribute('depth', '0.001');
			rotationChooserUpZ.setAttribute('width', '0.02');
			rotationChooserUpZ.setAttribute('material', 'color:#5E5E5E;');
			rotationChooserUpZ.setAttribute('rotationupz', {});
			document.getElementById('rotationmenu').appendChild(rotationChooserUpZ);
			let rotationChooserUpZImg = document.createElement('a-text');
			rotationChooserUpZImg.setAttribute('position',{x:-0.008,y:0.004,z:0.0011});
			rotationChooserUpZImg.setAttribute('id', 'rotationChooserUpZImg');
			rotationChooserUpZImg.setAttribute('value', '+');
			rotationChooserUpZImg.setAttribute('scale', '0.1 0.1	0.1');
			rotationChooserUpZImg.setAttribute('color', 'black');
			document.getElementById('buttorotationnupZ').appendChild(rotationChooserUpZImg);

			let rotationChooserDownZ = document.createElement('a-box');
			rotationChooserDownZ.setAttribute('position',{x:0.115,y:0.022,z:0.0045});
			rotationChooserDownZ.setAttribute('id','buttonrotationdownz');
			rotationChooserDownZ.setAttribute('class','remote');
			rotationChooserDownZ.setAttribute('height', '0.02');
			rotationChooserDownZ.setAttribute('depth', '0.001');
			rotationChooserDownZ.setAttribute('width', '0.02');
			rotationChooserDownZ.setAttribute('material', 'color:#5E5E5E;');
			rotationChooserDownZ.setAttribute('rotationdownz', {});
			document.getElementById('rotationmenu').appendChild(rotationChooserDownZ);
			let rotationChooserDownZImg = document.createElement('a-text');
			rotationChooserDownZImg.setAttribute('position',{x:-0.008,y:0.004,z:0.0011});
			rotationChooserDownZImg.setAttribute('id', 'rotationChooserDownZImg');
			rotationChooserDownZImg.setAttribute('value', '-');
			rotationChooserDownZImg.setAttribute('scale', '0.16 0.16 0.16');
			rotationChooserDownZImg.setAttribute('color', 'black');
			document.getElementById('buttonrotationdownz').appendChild(rotationChooserDownZImg);

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
				let tree2 = document.createElement('a-entity');
				tree2.setAttribute('position', {x:-0.4,y:-0.35,z:0});
				tree2.setAttribute('scale', {x:0.00015,y:0.00015,z:0.00015});
				tree2.setAttribute('id', 'tree2');
				tree2.setAttribute('class', 'remote');
				tree2.setAttribute('gltf-model', '#furtree');
				tree2.setAttribute('animation', 'property:rotation;to:0 360 0;loop:true;dur:20000')
				tree2.setAttribute('clickable', {});
				tree2.setAttribute('editgltf',{} );
				//model3.setAttribute('posibilityofchange',{} );
				document.getElementById('menu').appendChild(tree2);
				let tree3 = document.createElement('a-entity');
				tree3.setAttribute('position', {x:-0.5,y:-0.35,z:0});
				tree3.setAttribute('scale', {x:0.00008,y:0.00008,z:0.00008});
				tree3.setAttribute('id', 'tree3');
				tree3.setAttribute('class', 'remote');
				tree3.setAttribute('gltf-model', '#monsteratree');
				//tree3.setAttribute('animation', 'property:rotation;to:0 0 360;loop:true;dur:20000')
				tree3.setAttribute('clickable', {});
				tree3.setAttribute('editgltf',{} );
				//model3.setAttribute('posibilityofchange',{} );
				document.getElementById('menu').appendChild(tree3);
				hasPlantsGltfs = true;
				setClickable();
			}else{
				console.log('no muestra');
				img.setAttribute('src', '#openplants');
				document.getElementById('tree1').remove();
				document.getElementById('tree2').remove();
				document.getElementById('tree3').remove();
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
				document.getElementById('menu').appendChild(animal1);

				let animal2 = document.createElement('a-entity');
				animal2.setAttribute('position', {x:-0.4,y:-0.4,z:0});
				animal2.setAttribute('scale', {x:0.002,y:0.002,z:0.002});
				animal2.setAttribute('id', 'animal2');
				animal2.setAttribute('class', 'remote');
				animal2.setAttribute('gltf-model', '#rabbit');
				animal2.setAttribute('animation', 'property:rotation;to:0 360 0;loop:true;dur:20000')
				animal2.setAttribute('clickable', {});
				animal2.setAttribute('editgltf',{} );
				document.getElementById('menu').appendChild(animal2);

				let animal3 = document.createElement('a-entity');
				animal3.setAttribute('position', {x:-0.5,y:-0.4,z:0});
				animal3.setAttribute('scale', {x:0.00007,y:0.00007,z:0.00007});
				animal3.setAttribute('rotation', {x:0,y:90,z:0});
				animal3.setAttribute('id', 'animal3');
				animal3.setAttribute('class', 'remote');
				animal3.setAttribute('gltf-model', '#horse');
				animal3.setAttribute('animation', 'property:rotation;to:0 360 0;loop:true;dur:20000')
				animal3.setAttribute('clickable', {});
				animal3.setAttribute('editgltf',{} );
				document.getElementById('menu').appendChild(animal3);
				hasAnimalsGltfs = true;
				setClickable();
			}else{
				console.log('no muestra');
				img.setAttribute('src', '#openanimals');
				document.getElementById('animal1').remove();
				document.getElementById('animal2').remove();
				document.getElementById('animal3').remove();
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
				gadget1.setAttribute('scale', {x:0.0003,y:0.0003,z:0.0003});
				gadget1.setAttribute('rotation', {x:90,y:0,z:0});
				gadget1.setAttribute('id', 'gadget1');
				gadget1.setAttribute('class', 'remote');
				gadget1.setAttribute('gltf-model', '#iphone11');
				gadget1.setAttribute('animation', 'property:rotation;to:0 0 -360;loop:true;dur:20000')
				gadget1.setAttribute('clickable', {});
				gadget1.setAttribute('editgltf',{} );
				//model3.setAttribute('posibilityofchange',{} );
				document.getElementById('menu').appendChild(gadget1);

				let gadget2 = document.createElement('a-entity');
				gadget2.setAttribute('position', {x:-0.4,y:-0.45,z:0});
				gadget2.setAttribute('scale', {x:0.0003,y:0.0003,z:0.0003});
				gadget2.setAttribute('rotation', {x:90,y:0,z:0});
				gadget2.setAttribute('id', 'gadget2');
				gadget2.setAttribute('class', 'remote');
				gadget2.setAttribute('gltf-model', '#ipad');
				gadget2.setAttribute('animation', 'property:rotation;to:0 0 -360;loop:true;dur:20000')
				gadget2.setAttribute('clickable', {});
				gadget2.setAttribute('editgltf',{} );
				//model3.setAttribute('posibilityofchange',{} );
				document.getElementById('menu').appendChild(gadget2);

				let gadget3 = document.createElement('a-entity');
				gadget3.setAttribute('position', {x:-0.5,y:-0.45,z:0});
				gadget3.setAttribute('scale', {x:0.0003,y:0.0003,z:0.0003});
				gadget3.setAttribute('rotation', {x:90,y:0,z:0});
				gadget3.setAttribute('id', 'gadget3');
				gadget3.setAttribute('class', 'remote');
				gadget3.setAttribute('gltf-model', '#watch');
				gadget3.setAttribute('animation', 'property:rotation;to:0 0 -360;loop:true;dur:20000')
				gadget3.setAttribute('clickable', {});
				gadget3.setAttribute('editgltf',{} );
				//model3.setAttribute('posibilityofchange',{} );
				document.getElementById('menu').appendChild(gadget3);
				hasGadgetsGltfs = true;
				setClickable();
			}else{
				console.log('no muestra');
				img.setAttribute('src', '#opengadgets');
				document.getElementById('gadget1').remove();
				document.getElementById('gadget2').remove();
				document.getElementById('gadget3').remove();
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
				if (document.getElementById('tree2')){
					document.getElementById('tree2').remove();
				}
				if (document.getElementById('tree3')){
					document.getElementById('tree3').remove();
				}
				if (document.getElementById('animal1')){
					document.getElementById('animal1').remove();
				}
				if (document.getElementById('animal2')){
					document.getElementById('animal2').remove();
				}
				if (document.getElementById('animal3')){
					document.getElementById('animal3').remove();
				}
				if (document.getElementById('gadget1')){
					document.getElementById('gadget1').remove();
				}
				if (document.getElementById('gadget2')){
					document.getElementById('gadget2').remove();
				}
				if (document.getElementById('gadget3')){
					document.getElementById('gadget3').remove();
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
				if (document.getElementById('tree2')){
					document.getElementById('tree2').remove();
				}
				if (document.getElementById('tree3')){
					document.getElementById('tree3').remove();
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
				if (document.getElementById('animal2')){
					document.getElementById('animal2').remove();
				}
				if (document.getElementById('animal3')){
					document.getElementById('animal3').remove();
				}
				hasAnimals = false;

				if (hasGadgets){
					document.getElementById('gadgets').remove();
				}
				if (document.getElementById('gadget1')){
					document.getElementById('gadget1').remove();
				}
				if (document.getElementById('gadget2')){
					document.getElementById('gadget2').remove();
				}
				if (document.getElementById('gadget3')){
					document.getElementById('gadget3').remove();
				}
				hasGadgets = false;

				showed = false;
			}

		});
	}
});