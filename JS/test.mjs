import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";

// Créez une scène
const scene = new THREE.Scene();

let sceneContainer = document.getElementById("scene-container");
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
const light = new THREE.PointLight(0xffffff, 2);
light.position.set(-1200, 1700, 100);
scene.add(light);

const light2 = new THREE.PointLight(0xffffff, 2);
light2.position.set(1000, -1500, -100);
scene.add(light2);

// Chargez un modèle 3D glTF
const loader = new GLTFLoader();

let model1, model2, model3;

// Chargez le premier modèle 3D
loader.load('3D/CoupeGlace/scene.gltf', (gltf) => {
    model1 = gltf.scene;
    model1.position.set(-100, 0, 0); // Positionnez le premier modèle
    model1.scale.set(100, 100, 100);
    scene.add(model1);
}, undefined, (error) => {
    console.error('Erreur de chargement du modèle 3D', error);
});

// Chargez le deuxième modèle 3D
loader.load('3D/strawberry/scene.gltf', (gltf) => {
    model2 = gltf.scene;
    model2.position.set(300, 0, 0); // Positionnez le deuxième modèle
    model2.scale.set(100, 100, 100);
    scene.add(model2);
}, undefined, (error) => {
    console.error('Erreur de chargement du modèle 3D', error);
});


// loader.load('3D/FraiseV2/scene2.gltf', (gltf) => {
//     model3 = gltf.scene;
//     model3.position.set(-250, 100, 0); // Positionnez le deuxième modèle
//     model3.scale.set(200, 200, 200);
//      model3.rotation.x = Math.PI / 4.5; // Rotation de 45 degrés sur l'axe X
//     model3.rotation.z = Math.PI / 2; // Rotation de 45 degrés sur l'axe X


//     scene.add(model3);
// }, undefined, (error) => {
//     console.error('Erreur de chargement du modèle 3D', error);
// });
// Créez des contrôles de caméra OrbitControls
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


// Variables pour le slider automatique
let currentSlide = 0;
const slides = document.querySelectorAll('.Slider > main');
const interval = 5000; // Intervalle en millisecondes (par exemple, 5000ms pour 5 secondes)

// Fonction pour afficher la diapositive suivante
function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Activer le slider automatique
setInterval(nextSlide, interval);