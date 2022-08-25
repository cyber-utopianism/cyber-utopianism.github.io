/* eslint-disable unused-imports/no-unused-vars */
import React, { useEffect } from 'react';

import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { VOXLoader } from 'three/examples/jsm/loaders/VOXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import SceneInit from './lib/SceneInit';




function objectClickHandler() {
        window.open('http://www.pericror.com/', '_blank');
}

function Scene() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();
    const mycolor = 0xff0000;
    const video = document.getElementById('video');
    const spaceTexture = new THREE.VideoTexture(video);
    //const spaceTexture = new THREE.TextureLoader().load('./assets/Experiment-21.avi');
    // create the video element
    //assuming you have created a HTML video element with id="video"

    test.scene.background = spaceTexture;
    video.play();
    //const gridHelper = new THREE.GridHelper(200, 50);
    //test.scene.add(gridHelper);
    //test.scene.rotation.y = Math.PI / 8;

    // const boxGeometry = new THREE.BoxGeometry(8, 8, 8);
    // const boxMaterial = new THREE.MeshNormalMaterial();
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // test.scene.add(boxMesh);



    const geometry = new THREE.SphereGeometry( 10 , 10, 10 );
    const material = new THREE.MeshBasicMaterial( { color: 0xffff00, opacity: 0.0, transparent: true} );
    const sphere = new THREE.Mesh( geometry, material );
    sphere.position.set(3,3,-8.5);
    sphere.callback = objectClickHandler;
    sphere.name = 'sphere'
    test.scene.add(sphere);


    //const material1 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    //const sphere1 = new THREE.Mesh( geometry, material1 );
    //sphere1.position.set(4,1,-8.5);
    //test.scene.add(sphere1);
 
    //const material2 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    //const sphere2 = new THREE.Mesh( geometry, material2 );
    //sphere1.position.set(4,-3,-8.5);
    //test.scene.add(sphere1);



    let loadedModel;
    const glftLoader = new GLTFLoader();
    glftLoader.load('../assets/room/try.gltf', (gltfScene) => {
      loadedModel = gltfScene;
      // console.log(loadedModel);

      gltfScene.scene.position.y = 0;
      gltfScene.scene.position.x = 5;
      gltfScene.scene.scale.set(2.8, 2.8, 2.8);
      test.scene.add(gltfScene.scene);
      const pointLight = new THREE.AmbientLight(0xffffff, 0.5);
      pointLight.position.set(20, 20, 20);
      test.scene.add(pointLight);
      test.scene.rotation.y = Math.PI + 0.3;
      test.scene.rotation.z = -0.18;

    });

    const pointer = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();



    const onMouseMove = (event) => {
      // calculate pointer position in normalized device coordinates
      // (-1 to +1) for both components
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
      // var cameradirection = new THREE.Vector3();
      // test.camera.getWorldDirection(cameradirection);
      // cameradirection.normalize();
      // var cameraorigin = new THREE.Vector3();
      // test.camera.getWorldPosition(cameraorigin);
      raycaster.setFromCamera(pointer, test.camera)
      var intersects = raycaster.intersectObjects(test.scene.children);

      //[test.scene.sphere,test.scene.sphere1,test.scene.sphere2]
      // for (let i = 0; i < intersects.length; i++) {
      //   console.log(intersects);
      // }

      // change color of objects intersecting the raycaster
      // for (let i = 0; i < intersects.length; i++) {
      //   intersects[i].object.material.color.set(0xff0000);
      // }

      // change color of the closest object intersecting the raycaster
     if (intersects.length > 0) {
        // console.log(intersects);
        if(intersects[0].object.name == 'sphere'){window.open('gallery',"_self")}
        
       // window.open('gallery',"_self");

     } 
    };

   //  const myCursor = (event) => {
      // calculate pointer position in normalized device coordinates
      // (-1 to +1) for both components
    //  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    //  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

   //   raycaster.setFromCamera(pointer, test.camera);
   //   const intersects = raycaster.intersectObjects(test.scene.children[0]);

      //[test.scene.sphere,test.scene.sphere1,test.scene.sphere2]
      // for (let i = 0; i < intersects.length; i++) {
      //   console.log(intersects);
      // }

      // change color of objects intersecting the raycaster
      // for (let i = 0; i < intersects.length; i++) {
      //   intersects[i].object.material.color.set(0xff0000);
      // }

      // change color of the closest object intersecting the raycaster
    //  if (intersects.length == 0) {
     //   intersects[0].object.material.opacity.set(0.8);
        // $('html,body').css('cursor', 'pointer');
        

//      }
    //   else {
  //      // $('html,body').css('cursor', 'default');
        //intersects[0].object.material.opacity.set(0.1);

//      }
  //  };


    window.addEventListener('click', onMouseMove);
 //     window.addEventListener('mousemove', myCursor);



    const animate = () => {
      if (loadedModel) {
        loadedModel.scene.rotation.x += 0.01;
        loadedModel.scene.rotation.y += 0.01;
        loadedModel.scene.rotation.z += 0.01;

      }
      requestAnimationFrame(animate);
    };
    //animate();
  }, []);



  return (
    <div>
        <div id="info">Comme une vraie geek de textures, cyber utopianism expérimente à travers des pratiques hybrides ; installation, textile, poésie sonore. Tentée par ses fixettes d'oralité où langage(s) et corps se fragmentent pour se muter à l'infini, elle fantasme de machines à embosser. Faire du relief pour exorciser l'oubli, graver pour l'objectiver dans l'espace-temps.
Originaire d'Athènes, installée à Marseille depuis 2019, l'artiste résidente de l'atelier Vé et collaboratrice de Manifesto XXI arpente par les interstices des univers interopérables, d'autant numériques que charnels. Décortiquer les contradictions pour en faire mythologie. Secouer les ombres pour en faire présence. Cartographier les espaces morcelés par ses traumatismes urbains, dans une recherche plastique et théorique de ce qui fait érotisme du saccagement – quelles douilles et quels câbles nous devrons brancher pour ressouder les organes d'un appareil de bruit blanc ?
Pour déployer ses expressions elle oscille entre collaborations, contributions individuelles et sa participation à l'écosystème de l'atelier Vé. Festival no0s, festival Parallèle, Virée sèche - le court métrage de Théo Laglisse- et plusieurs immersions aux cosmos d'artistes de son comme TTristana, m3c et js d0nny sont quelques-uns de ses projets réalisés en 2021.</div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );

}


export default Scene;
