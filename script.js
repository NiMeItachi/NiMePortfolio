// Основная настройка сцены
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('threeCanvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Создаем куб с большим количеством сегментов
const geometry = new THREE.BoxGeometry(1, 1, 1, 16, 16, 16); // Увеличиваем сегменты
const material = new THREE.MeshStandardMaterial({ color: 0xa75502, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Добавляем свет для большей глубины
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(5, 5, 5);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0x404040); // Мягкий свет
scene.add(ambientLight);

camera.position.z = 5;

// Анимация
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Адаптация к изменению размера окна
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
