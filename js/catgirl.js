//import {GLTFLoader} from "./GLTFLoader.js"
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


  // Create the scene to hold the 3D objects
  const scene = new THREE.Scene();

  // Create the camera to view the 3D objects
  const camera = new THREE.PerspectiveCamera(
      75,                                     // Frame of view
      window.innerWidth / window.innerHeight, // Aspect ratio
      0.1,                                    // Near clipping plane
      1000                                    // Far clipping plane
  );

  // Create the renderer to draw the 3D objects in the browser.
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Add the drawn scene to the browser window
  document.body.appendChild( renderer.domElement );


  const loader = new GLTFLoader(); loader.load( 'models/scene.gltf', function ( gltf ) { scene.add( gltf.scene ); }, undefined, function ( error ) { console.error( error ); } );

  // Adjust the model’s position
  gltf.scene.position.set(0, 0, 0);

  gltf.scene.scale.set(2,2,2);


  // Create the AmbientLight
  const ambientLight = new THREE.AmbientLight( 0xA11360, 1);
  scene.add( ambientLight );

  // Create the DirectionalLight
  const directionalLight = new THREE.DirectionalLight( 0xffffff, 1);
  // Adjust the position of directionalLight
  directionalLight.position.set( 0, 1, 3 );
  scene.add( directionalLight );



  // Back up the camera so the cube is within the camera's view
  camera.position.z = 10;
  // Change the background color of the scene
  scene.background = new THREE.Color( 0x000000 );
  // Redraw the scene on the browser window to see the 3D cube
  renderer.render( scene, camera );




  
  // Redraw the scene in the browser window
  renderer.render( scene, camera );


  //RESOURCES

  //Having trouble with the the MIME types
  //https://forum.freecodecamp.org/t/visual-studio-code-live-server-for-an-html-file-with-imported-modules/488387

  //Are js modules not allowed in vscode live server?  --> live server doesn't serve js modules correctly
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

  //https://stackoverflow.com/questions/73813721/syntaxerror-ambiguous-indirect-export-default-error-when-importing-my-own-clas
  //https://stackoverflow.com/questions/64409605/how-do-i-load-gltfloader-from-a-cdn-three-js
  

