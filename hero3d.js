
const canvas = document.getElementById("hero3d");
if (canvas && window.WebGLRenderingContext) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(0, 2.6, 8);
  camera.lookAt(0, 0.6, 0);

  scene.add(new THREE.AmbientLight(0xffffff, 0.7));
  const sun = new THREE.DirectionalLight(0xfff0d8, 1.4);
  sun.position.set(4, 7, 5); sun.castShadow = true;
  scene.add(sun);
  const gold = new THREE.PointLight(0xc8913b, 8, 12);
  gold.position.set(-3, 2, 3); scene.add(gold);

  const fabric = new THREE.MeshStandardMaterial({ color: 0x8a5a33, roughness: 0.85 });
  const cushion = new THREE.MeshStandardMaterial({ color: 0xa87444, roughness: 0.9 });
  const wood = new THREE.MeshStandardMaterial({ color: 0x2a1d12, roughness: 0.5 });
  const accent = new THREE.MeshStandardMaterial({ color: 0xc8913b, roughness: 0.4, metalness: 0.4 });

  const group = new THREE.Group();
  const box = (w, h, d, x, y, z, m) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
    mesh.position.set(x, y, z); mesh.castShadow = true; mesh.receiveShadow = true;
    group.add(mesh); return mesh;
  };
  // Sofa
  box(4.2, 0.7, 1.7, 0, 0.55, 0, fabric);          // base
  box(4.2, 1.3, 0.5, 0, 1.2, -0.6, fabric);        // back
  box(0.5, 1.0, 1.7, -2.1, 0.95, 0, fabric);       // arms
  box(0.5, 1.0, 1.7, 2.1, 0.95, 0, fabric);
  box(1.6, 0.35, 1.3, -1.0, 1.05, 0.12, cushion);  // seat cushions
  box(1.6, 0.35, 1.3, 1.0, 1.05, 0.12, cushion);
  box(1.5, 0.8, 0.3, -1.0, 1.5, -0.25, cushion);   // back cushions
  box(1.5, 0.8, 0.3, 1.0, 1.5, -0.25, cushion);
  [[-1.9, .65], [1.9, .65], [-1.9, -.65], [1.9, -.65]].forEach(([x, z]) =>
    box(0.15, 0.3, 0.15, x, 0.1, z, accent));
  // Coffee table
  box(1.8, 0.1, 1.0, 0, 0.5, 2.3, wood);
  [[-.75, 1.95], [.75, 1.95], [-.75, 2.65], [.75, 2.65]].forEach(([x, z]) =>
    box(0.1, 0.45, 0.1, x, 0.22, z, accent));
  // Floating spheres (decor)
  const orbs = [];
  for (let i = 0; i < 6; i++) {
    const o = new THREE.Mesh(new THREE.IcosahedronGeometry(0.12 + Math.random() * 0.12, 0), accent);
    o.position.set((Math.random() - .5) * 8, 1 + Math.random() * 3, (Math.random() - .5) * 4 - 1);
    o.userData.s = Math.random() * 2 + 1; scene.add(o); orbs.push(o);
  }
  group.position.y = -0.6;
  scene.add(group);

  let mx = 0, my = 0;
  addEventListener("pointermove", e => {
    mx = (e.clientX / innerWidth - .5); my = (e.clientY / innerHeight - .5);
  });
  function resize() {
    const r = canvas.parentElement.getBoundingClientRect();
    renderer.setSize(r.width, r.height, false);
    camera.aspect = r.width / r.height;
    camera.position.x = r.width < 800 ? 0 : 2.2;
    camera.lookAt(r.width < 800 ? 0 : 2.2, 0.6, 0);
    camera.updateProjectionMatrix();
  }
  addEventListener("resize", resize); resize();

  const clock = new THREE.Clock();
  (function loop() {
    const t = clock.getElapsedTime();
    group.rotation.y += ((t * 0.25 + mx * 1.2) - group.rotation.y) * 0.05;
    group.rotation.x += ((my * 0.2) - group.rotation.x) * 0.05;
    group.position.y = -0.6 + Math.sin(t) * 0.1;
    orbs.forEach(o => { o.rotation.x += 0.01; o.rotation.y += 0.015; o.position.y += Math.sin(t * o.userData.s) * 0.003; });
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
  })();
}
