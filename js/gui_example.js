import * as THREE from 'three';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer(); renderer.setSize( window.innerWidth, window.innerHeight );

let gui;
initGui();

renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material ); scene.add( cube );
//new THREE.TextGeometry( "NIGGA!!!", parameters );

camera.position.z = 5; function animate() { cube.rotation.x += 0.01; cube.rotation.y += 0.01; renderer.render( scene, camera ); }

function initGui() {

				gui = new GUI();

				gui.title( 'Camera Layers' );

				gui.add( layers, 'Toggle Name' );
				gui.add( layers, 'Toggle Mass' );
				gui.add( layers, 'Enable All' );
				gui.add( layers, 'Disable All' );

				gui.open();

			}
