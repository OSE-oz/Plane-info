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
    renderer.setSize(200, 200);
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
  moonRenderer.setSize(200, 200);
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
