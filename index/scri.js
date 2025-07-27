         // Generate random stars
function createStars() {
        const stars = document.getElementById('stars');
        const count = 200;            
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;           
        star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.opacity = Math.random();
        stars.appendChild(star);
    }
}

// Initialize stars
        createStars();

const container = document.getElementById("earth");

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(220, 220);
    container.appendChild(renderer.domElement);

    // Scene and Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 5;

    // Geometry, Material, Texture
    const geometry = new THREE.SphereGeometry(2, 64, 64);
    const texture = new THREE.TextureLoader().load("https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg");
    const material = new THREE.MeshStandardMaterial({ map: texture });
    const earthMesh = new THREE.Mesh(geometry, material);
    scene.add(earthMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    const pointLight = new THREE.PointLight(0xffffff, 1.2);
    pointLight.position.set(5, 5, 5);
    scene.add(ambientLight, pointLight);

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      earthMesh.rotation.y += 0.003;
      renderer.render(scene, camera);
    }
    animate();
  
    
  const moonContainer = document.getElementById("moon");

  // Moon Renderer
  const moonRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  moonRenderer.setSize(220, 220);
  moonContainer.appendChild(moonRenderer.domElement);

  // Moon Scene and Camera
  const moonScene = new THREE.Scene();
  const moonCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  moonCamera.position.z = 5;

  // Moon Geometry and Material
  const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
  const moonTexture = new THREE.TextureLoader().load("https://threejs.org/examples/textures/planets/moon_1024.jpg");
  const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
  const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
  moonScene.add(moonMesh);

  // Moon Lighting
  const moonAmbientLight = new THREE.AmbientLight(0xffffff, 0.6);
  const moonPointLight = new THREE.PointLight(0xffffff, 1.2);
  moonPointLight.position.set(5, 5, 5);
  moonScene.add(moonAmbientLight, moonPointLight);

  // Moon Animation loop
  function animateMoon() {
    requestAnimationFrame(animateMoon);
    moonMesh.rotation.y += 0.003;
    moonRenderer.render(moonScene, moonCamera);
  }
  animateMoon();


  
const mercuryContainer = document.getElementById("mercury");

// Mercury Renderer
const mercuryRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
mercuryRenderer.setSize(220, 220);
mercuryContainer.appendChild(mercuryRenderer.domElement);

// Mercury Scene and Camera
const mercuryScene = new THREE.Scene();
const mercuryCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
mercuryCamera.position.z = 5;

// Mercury Geometry and Material
const mercuryGeometry = new THREE.SphereGeometry(2, 64, 64);
const mercuryTexture = new THREE.TextureLoader().load("pic/2k_mercury.jpg"); // Make sure this file path is correct
const mercuryMaterial = new THREE.MeshStandardMaterial({ map: mercuryTexture });
const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercuryScene.add(mercuryMesh);

// Mercury Lighting
const mercuryAmbientLight = new THREE.AmbientLight(0xffffff, 0.6);
const mercuryPointLight = new THREE.PointLight(0xffffff, 1.2);
mercuryPointLight.position.set(5, 5, 5);
mercuryScene.add(mercuryAmbientLight, mercuryPointLight);

// Mercury Animation loop
function animateMercury() {
  requestAnimationFrame(animateMercury);
  mercuryMesh.rotation.y += 0.003;
  mercuryRenderer.render(mercuryScene, mercuryCamera);
}
animateMercury();

const venusContainer = document.getElementById("venus");

// Venus Renderer
const venusRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
venusRenderer.setSize(220, 220);
venusContainer.appendChild(venusRenderer.domElement);

// Venus Scene and Camera
const venusScene = new THREE.Scene();
const venusCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
venusCamera.position.z = 5;

// Venus Geometry and Material
const venusGeometry = new THREE.SphereGeometry(2, 64, 64);
const venusTexture = new THREE.TextureLoader().load("pic/2k_venus_surface.jpg"); // Update path if needed
const venusMaterial = new THREE.MeshStandardMaterial({ map: venusTexture });
const venusMesh = new THREE.Mesh(venusGeometry, venusMaterial);
venusScene.add(venusMesh);

// Venus Lighting
const venusAmbientLight = new THREE.AmbientLight(0xffffff, 0.6);
const venusPointLight = new THREE.PointLight(0xffffff, 1.2);
venusPointLight.position.set(5, 5, 5);
venusScene.add(venusAmbientLight, venusPointLight);

// Venus Animation loop
function animateVenus() {
  requestAnimationFrame(animateVenus);
  venusMesh.rotation.y += 0.003;
  venusRenderer.render(venusScene, venusCamera);
}
animateVenus();

const marsContainer = document.getElementById("mars");

// Mars Renderer
const marsRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
marsRenderer.setSize(220, 220);
marsContainer.appendChild(marsRenderer.domElement);

// Mars Scene and Camera
const marsScene = new THREE.Scene();
const marsCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
marsCamera.position.z = 5;

// Mars Geometry and Material
const marsGeometry = new THREE.SphereGeometry(2, 64, 64);
const marsTexture = new THREE.TextureLoader().load("pic/2k_mars.jpg"); // Adjust path if needed
const marsMaterial = new THREE.MeshStandardMaterial({ map: marsTexture });
const marsMesh = new THREE.Mesh(marsGeometry, marsMaterial);
marsScene.add(marsMesh);

// Mars Lighting
const marsAmbientLight = new THREE.AmbientLight(0xffffff, 0.6);
const marsPointLight = new THREE.PointLight(0xffffff, 1.2);
marsPointLight.position.set(5, 5, 5);
marsScene.add(marsAmbientLight, marsPointLight);

// Mars Animation loop
function animateMars() {
  requestAnimationFrame(animateMars);
  marsMesh.rotation.y += 0.003;
  marsRenderer.render(marsScene, marsCamera);
}
animateMars();

const jupiterContainer = document.getElementById("jupiter");

// Jupiter Renderer
const jupiterRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
jupiterRenderer.setSize(220, 220);
jupiterContainer.appendChild(jupiterRenderer.domElement);

// Jupiter Scene and Camera
const jupiterScene = new THREE.Scene();
const jupiterCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
jupiterCamera.position.z = 5;

// Jupiter Geometry and Material
const jupiterGeometry = new THREE.SphereGeometry(2, 64, 64);
const jupiterTexture = new THREE.TextureLoader().load("pic/2k_jupiter.jpg"); // Adjust path if needed
const jupiterMaterial = new THREE.MeshStandardMaterial({ map: jupiterTexture });
const jupiterMesh = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiterScene.add(jupiterMesh);

// Jupiter Lighting
const jupiterAmbientLight = new THREE.AmbientLight(0xffffff, 0.6);
const jupiterPointLight = new THREE.PointLight(0xffffff, 1.2);
jupiterPointLight.position.set(5, 5, 5);
jupiterScene.add(jupiterAmbientLight, jupiterPointLight);

// Jupiter Animation loop
function animateJupiter() {
  requestAnimationFrame(animateJupiter);
  jupiterMesh.rotation.y += 0.003;
  jupiterRenderer.render(jupiterScene, jupiterCamera);
}
animateJupiter();

const uranusContainer = document.getElementById("uranus");

// Uranus Renderer
const uranusRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
uranusRenderer.setSize(220, 220);
uranusContainer.appendChild(uranusRenderer.domElement);

// Uranus Scene and Camera
const uranusScene = new THREE.Scene();
const uranusCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
uranusCamera.position.z = 5;

// Uranus Geometry and Material
const uranusGeometry = new THREE.SphereGeometry(2, 64, 64);
const uranusTexture = new THREE.TextureLoader().load("pic/2k_uranus.jpg"); // Adjust path if needed
const uranusMaterial = new THREE.MeshStandardMaterial({ map: uranusTexture });
const uranusMesh = new THREE.Mesh(uranusGeometry, uranusMaterial);
uranusScene.add(uranusMesh);

// Uranus Lighting
const uranusAmbientLight = new THREE.AmbientLight(0xffffff, 0.6);
const uranusPointLight = new THREE.PointLight(0xffffff, 1.2);
uranusPointLight.position.set(5, 5, 5);
uranusScene.add(uranusAmbientLight, uranusPointLight);

// Uranus Animation loop
function animateUranus() {
  requestAnimationFrame(animateUranus);
  uranusMesh.rotation.y += 0.003;
  uranusRenderer.render(uranusScene, uranusCamera);
}
animateUranus();
const neptuneContainer = document.getElementById("neptune");  
// Neptune Renderer
const neptuneRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
neptuneRenderer.setSize(220, 220);
neptuneContainer.appendChild(neptuneRenderer.domElement); 
// Neptune Scene and Camera
const neptuneScene = new THREE.Scene();
const neptuneCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
neptuneCamera.position.z = 5;

// Neptune Geometry and Material
const neptuneGeometry = new THREE.SphereGeometry(2, 64, 64);  
const neptuneTexture = new THREE.TextureLoader().load("pic/2k_neptune.jpg"); // Adjust path if needed
const neptuneMaterial = new THREE.MeshStandardMaterial({ map: neptuneTexture });
const neptuneMesh = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
neptuneScene.add(neptuneMesh);

// Neptune Lighting
const neptuneAmbientLight = new THREE.AmbientLight(0xffffff, 0.6);
const neptunePointLight = new THREE.PointLight(0xffffff, 1.2);
neptunePointLight.position.set(5, 5, 5);
neptuneScene.add(neptuneAmbientLight, neptunePointLight);
// Neptune Animation loop
function animateNeptune() {
  requestAnimationFrame(animateNeptune);
  neptuneMesh.rotation.y += 0.003;
  neptuneRenderer.render(neptuneScene, neptuneCamera);
}
animateNeptune();

// saturn
const saturnContainer = document.getElementById("saturn");
// Saturn Renderer
const saturnRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
saturnRenderer.setSize(220, 220);
saturnContainer.appendChild(saturnRenderer.domElement);
// Saturn Scene and Camera
const saturnScene = new THREE.Scene();
const saturnCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
saturnCamera.position.z = 5;
// Saturn Geometry and Material
const saturnGeometry = new THREE.SphereGeometry(2, 64, 64);
const saturnTexture = new THREE.TextureLoader().load("pic/2k_saturn.jpg"); // Adjust path if needed
const saturnMaterial = new THREE.MeshStandardMaterial({ map: saturnTexture });
const saturnMesh = new THREE.Mesh(saturnGeometry, saturnMaterial);
saturnScene.add(saturnMesh);
// Saturn Lighting
const saturnAmbientLight = new THREE.AmbientLight(0xffffff, 0.6);
const saturnPointLight = new THREE.PointLight(0xffffff, 1.2);
saturnPointLight.position.set(5, 5, 5);
saturnScene.add(saturnAmbientLight, saturnPointLight);
// Saturn Animation loop
function animateSaturn() {
  requestAnimationFrame(animateSaturn);
  saturnMesh.rotation.y += 0.003;
  saturnRenderer.render(saturnScene, saturnCamera);
}
animateSaturn();

