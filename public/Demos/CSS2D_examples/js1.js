//import * as THREE from 'three';
import * as THREE from '../three/build/three.module.js'; // make sure to use a directory express is allowed to serve from!

// CSS2D and CSS2Dobject must be imported separately
// Difference between the two? Idk
//import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { CSS2DRenderer, CSS2DObject } from '../three/examples/jsm/renderers/CSS2DRenderer.js';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer(); renderer.setSize( window.innerWidth, window.innerHeight );

let labelRenderer = new CSS2DRenderer();
				labelRenderer.setSize( window.innerWidth, window.innerHeight );
				labelRenderer.domElement.style.position = 'absolute';
				labelRenderer.domElement.style.top = '0px';
				document.body.appendChild( labelRenderer.domElement );

renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material ); scene.add( cube );
//new THREE.TextGeometry( "Serbia Strong!", parameters );

camera.position.z = 5;

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render( scene, camera );
  labelRenderer.render( scene, camera );
}


const cubeDiv = document.createElement( 'div' );
				cubeDiv.className = 'label';
				cubeDiv.textContent = 'Floating Label';
				cubeDiv.style.backgroundColor = 'transparent';

				const cubeLabel = new CSS2DObject( cubeDiv );
				cubeLabel.position.set( 1.5, 1, 1 );
				cubeLabel.center.set( 1, 1 );
				cube.add( cubeLabel );
				cubeLabel.layers.set( 0 );

        cube.layers.set( 0 );


// SOURCES
//https://stackoverflow.com/questions/60057183/importing-three-js-module-in-a-node-express-server
//https://www.honeybadger.io/blog/import-maps/