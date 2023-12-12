import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
  import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
  import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";
  



const descriptions = [
	{
	  title: "<h2 class='xDeux'>Vanille X Noix de Macadamia & baies sauvage</h2>",
	  text: ' <p>Plongez dans un <span class="red">univers de douceur </span> et de <span class="red">croquant</span> avec notre <span class="red">irrésistible</span> glace saveur vanille aux noix de macadamia.</p> <p>Chaque cuillère est une <span class="red">symphonie de saveurs</span>, une danse délicate entre la vanille <span class="red">veloutée</span> et le <span class="red">croquant</span> des noix de macadamia.</p>'
	},
	{
	  title: "<h2 class='xDeux'>Chocolat X Oréo</h2>",
	  text: "<p>La douceur de l'oréo mélanger à la puissance du chocolat, <span class='red'> un caractère</span> intense et fondant en bouche.</p>"
	},
	{
		title: "<h2 class='xDeux'>Café X Spéculoss et vanille</h2>",
		text: "<p>Une bonne glace au <span class='red'>spéculoss<span> sur un nid de vanille acompagné de café.</p>"
	  }
  ];
  
  const slider = document.querySelector(".items");
  const slides = document.querySelectorAll(".item");
  const button = document.querySelectorAll(".button");
  let title = document.querySelector(".xDeux");
  let text = document.querySelector(".margin>.description");
  
  let current = 0;
  let prev = 4;
  let next = 1;
  
  for (let i = 0; i < button.length; i++) {
	button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
  }
  
  const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
  
  const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);
  
  const gotoNum = number => {
	current = number;
	prev = current - 1;
	next = current + 1;
  
	for (let i = 0; i < slides.length; i++) {
	  slides[i].classList.remove("active");
	  slides[i].classList.remove("prev");
	  slides[i].classList.remove("next");
	}
  
	if (next == 5) {
	  next = 0;
	}
  
	if (prev == -1) {
	  prev = 4;
	}
	
  
	slides[current].classList.add("active");
	slides[prev].classList.add("prev");
	slides[next].classList.add("next");
  
	// Mettre à jour la description
	
	title.innerHTML = descriptions[current].title;
	text.innerHTML = descriptions[current].text;
  };

	


  
  // Créez une scène
  const scene = new THREE.Scene();
  
  let sceneContainer = document.getElementById("scene-container-deux");
  // Créez un moteur de rendu
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(700, 400); // Définissez la taille du canvas à 700x400 pixels
  if (sceneContainer) {
      sceneContainer.appendChild(renderer.domElement);
  } else {
      console.error("Le conteneur de scène n'a pas été trouvé.");
  }
  
  // Créez une caméra
  const camera = new THREE.PerspectiveCamera(100, 4/3, 0.1, 1000); // Modifié le ratio à 4/3
  camera.position.z = 450;
  camera.position.y = 200;
  
  // Ajoutez une lumière à la scène (optionnel)
  const light = new THREE.PointLight(0xffffff, 5);
  light.position.set(-1200, 1700, 100);
  scene.add(light);
  
  const light2 = new THREE.PointLight(0xffffff, 4);
  light2.position.set(1000, -1500, -100);
  scene.add(light2);
  
  // Chargez un modèle 3D glTF
  const loader = new GLTFLoader();
  
  let model1, model2;
  
  // Chargez le premier modèle 3D
  loader.load('3D/Lime/scene.gltf', (gltf) => {
      model1 = gltf.scene;
      model1.position.set(-100, 0, 0); // Positionnez le premier modèle
      model1.scale.set(1000, 1000, 1000);
      scene.add(model1);
  }, undefined, (error) => {
      console.error('Erreur de chargement du modèle 3D', error);
  });
  

  
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  
  controls.dampingFactor = 0.05;
  
  // Fonction d'animation
  function animate() {
      requestAnimationFrame(animate);
  
      // Effectuez des mises à jour ou des animations ici
  
      // Faites tourner chaque modèle sur lui-même
      if (model1) {
          model1.rotation.y += 0.005;
      }
  
      renderer.render(scene, camera);
  }
  
  // Gestion du zoom
  let zoomSpeed = 0.1;
  let zoom = 80;
  
  window.addEventListener('wheel', (e) => {
      zoom += e.deltaY * zoomSpeed;
  
      if (zoom < 0.1) zoom = 0.1;
      if (zoom > 3.0) zoom = 200.0;
  
      camera.position.z = 5 * zoom;
  });
  
  // Appelez animate() pour démarrer la boucle de rendu
  animate();
  
  

  
// Créez une scène
const scene2 = new THREE.Scene();

let sceneContainer2 = document.getElementById("scene-container");
// Créez un moteur de rendu
const renderer2 = new THREE.WebGLRenderer({ alpha: true });
renderer2.setSize(700, 400); // Définissez la taille du canvas à 700x400 pixels
if (sceneContainer2) {
    sceneContainer2.appendChild(renderer2.domElement);
} else {
    console.error("Le conteneur de scène n'a pas été trouvé.");
}

// Créez une caméra
const camera3 = new THREE.PerspectiveCamera(100, 4/3, 0.1, 1000); // Modifié le ratio à 4/3
camera3.position.z = 450;
camera3.position.y = 200;

// Ajoutez une lumière à la scène (optionnel)
const light3 = new THREE.PointLight(0xffffff, 2);
light3.position.set(-1200, 1700, 100);
scene2.add(light3);

const light4 = new THREE.PointLight(0xffffff, 2);
light4.position.set(1000, -1500, -100);
scene2.add(light4);

// Chargez un modèle 3D glTF
const loader2 = new GLTFLoader();

let model3, model4, model5, model6, model7, model8, model9, model10;


loader2.load('Models 3D/ice_cream_-_3december2020_day9.glb', (gltf) => {
   model3 = gltf.scene;
  model3.position.set(0, 0, 0);
 model3.scale.set(10, 10, 10);

 
  scene2.add(model3);
}, undefined, (error) => {
  console.error('Erreur de chargement du modèle 3D', error);
});


loader2.load('Models 3D/worlds_last_choco_taco.glb', (gltf) => {
  model4 = gltf.scene;
  model4.position.set(150, 80, -200);
  model4.rotation.set(Math.PI / 2, Math.PI / 2, 0);
  
  model4.scale.set(0.3, 0.3, 0.3);
 scene2.add(model4);
}, undefined, (error) => {
 console.error('Erreur de chargement du modèle 3D', error);
});


loader2.load('Models 3D/worlds_last_choco_taco.glb', (gltf) => {
  model5 = gltf.scene;
  model5.position.set(-300, 150, -200);
  model5.rotation.set(Math.PI / 2, Math.PI / 1, 0);
  
  model5.scale.set(0.3, 0.3, 0.3);
 scene2.add(model5);
}, undefined, (error) => {
 console.error('Erreur de chargement du modèle 3D', error);
});

loader2.load('Models 3D/splash (2).glb', (gltf) => {
  model6 = gltf.scene;
  model6.position.set(0, 300, 0);
  model6.scale.set(50, 50, 50);
   model6.rotation.set(Math.PI / 1, Math.PI / 2, 0);
 scene2.add(model6);
}, undefined, (error) => {
 console.error('Erreur de chargement du modèle 3D', error);
});

loader2.load('Models 3D/splash.glb', (gltf) => {
  model7 = gltf.scene;
  model7.position.set(-50, 100, -100);
  model7.scale.set(30, 30, 30);
  // model7.rotation.set(Math.PI / 2, Math.PI / 2, 0);
 scene2.add(model7);
}, undefined, (error) => {
 console.error('Erreur de chargement du modèle 3D', error);
});

let light5 = new THREE.PointLight(0xFFFFFF);
light5.position.set(100, 200, 300);
scene2.add(light5);

loader2.load('Models 3D/ice_cube.glb', (gltf) => {
  model8 = gltf.scene;
  model8.position.set(100, 100, 200);
  model8.scale.set(0.4, 0.4, 0.4);
  model8.rotation.set(1,2, 0)

 scene2.add(model8);
}, undefined, (error) => {
 console.error('Erreur de chargement du modèle 3D', error);
});

loader2.load('Models 3D/ice_cube.glb', (gltf) => {
  model8 = gltf.scene;
  model8.position.set(-100, 100, -200);
  model8.scale.set(0.4, 0.4, 0.4);
  model8.rotation.set(2,1, 0)

 scene2.add(model8);
}, undefined, (error) => {
 console.error('Erreur de chargement du modèle 3D', error);
});



// Créez des contrôles de caméra OrbitControls
const controls2 = new OrbitControls(camera3, renderer2.domElement);
controls2.enableDamping = true;

controls2.dampingFactor = 0.05;

// Fonction d'animation
function animate2() {
    requestAnimationFrame(animate2);

    // Effectuez des mises à jour ou des animations ici

    // Faites tourner chaque modèle sur lui-même
    // if (model3) {
    //     model3.rotation.y += 0.005;
    // }

    renderer2.render(scene2, camera3);
}

// Gestion du zoom
let zoomSpeed2 = 0.1;
let zoom2 = 80;

window.addEventListener('wheel', (e) => {
    zoom2 += e.deltaY * zoomSpeed2;

    if (zoom2 < 0.1) zoom2 = 0.1;
    if (zoom2 > 3.0) zoom2 = 200.0;

    camera3.position.z = 5 * zoom2;
});

// Appelez animate() pour démarrer la boucle de rendu
animate2();
