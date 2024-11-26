import * as THREE from 'three';



// Fontloader is required sadly...
import { TextGeometry } from '../../three/addons/geometries/TextGeometry.js';
import { FontLoader } from '../../three/addons/loaders/FontLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer(); renderer.setSize( window.innerWidth, window.innerHeight );


renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const materials = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//const cube = new THREE.Mesh( geometry, materials ); scene.add( cube );
let group = new THREE.Group();


//const text;
// Load the font asynchronously
const fontLoader = new FontLoader();
fontLoader.load('fonts/droid_sans_regular.typeface.json', (font) => {
  // Create TextGeometry with the loaded font
  const text = new TextGeometry( "NIGGA!!!", {
    font: font,
  	size: 5,
  	depth: 1,
  	curveSegments: 4,
    bevelThickness: 1,
  	bevelSize: 0,
  	bevelEnabled: true
  } );

  let textMesh1 = new THREE.Mesh( text, materials );
  textMesh1.position.set(-30, 0, 0);
  textMesh1.rotation.set(0, 0, 0);

  group.add( textMesh1 );
});

scene.add(group);

//text.computeBoundingBox();


camera.position.z = 30;

function animate() {
  //group.rotation.x += 0.01;
  group.rotation.y += 0.01;
  renderer.render( scene, camera );
}
