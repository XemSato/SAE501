import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";

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

