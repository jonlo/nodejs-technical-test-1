import { WebGLRenderer, Scene, PerspectiveCamera, BoxGeometry, MeshBasicMaterial, Mesh, SphereGeometry } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { SceneData } from './sceneData';

export class Scene3d {

	constructor() {
		this.container = document.getElementById('canvas3d');
		window.addEventListener('resize', () => {
			this.onWindowResize();
		});
		document.body.appendChild(this.container);

		this.renderer = new WebGLRenderer({ antialias: true });
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.container.appendChild(this.renderer.domElement);

		this.scene = new Scene();
		this.camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
		this.camera.position.set(0, 40, 200);

		this.controls = new OrbitControls(this.camera, this.renderer.domElement);
		this.controls.update();
		this.createCube();

		this.sceneData = new SceneData();
		const milliSeconds = (1 / 60) * 1000;
		setInterval(() => this.update(), milliSeconds);
		this.populateScene();
	}

	populateScene() {
		const me = this.createCube(1, 4, 1, 0x0000ff);
		me.position.set(0, 2, 0);
		this.scene.add(me);
		this.sceneData.scan.forEach(scan => {
			if (scan.enemies.type === 'soldier') {
				this.createSoldiers(scan.coordinates);
			} else if (scan.enemies.type === 'mech') {
				this.createMech(scan.coordinates);
			}
			if (scan.allies) {
				this.createAllies(scan.coordinates);
			}
		});
	}

	createSoldiers(coords) {
		const soldiers = this.createCube(0.5, 1, 0.5, 0xff0000);
		soldiers.position.set(coords.x - 1, 0.5, coords.y - 1);
		this.scene.add(soldiers);
	}

	createAllies(coords) {
		const allies = this.createCube(0.5, 1, 0.5, 0x00ff00);
		allies.position.set(coords.x + 1, 0.5, coords.y + 1);
		this.scene.add(allies);
	}

	createMech(coords) {
		const mech = this.createCube(1, 4, 1, 0xff0000);
		mech.position.set(coords.x, 2, coords.y);
		this.scene.add(mech);
	}

	createCube(width, height, depth, color) {
		let geometry = new BoxGeometry(width, height, depth);
		let material = new MeshBasicMaterial({ color: color });
		return new Mesh(geometry, material);
	}

	setTarget(coords) {
		if (this.target) {
			this.scene.remove(this.target);
		}
		const geometry = new SphereGeometry(3, 32, 16);
		const material = new MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0.25 });
		this.target = new Mesh(geometry, material);
		this.target.position.set(coords.x, 1.5, coords.y);
		this.scene.add(this.target);
	}

	render() {
		this.renderer.render(this.scene, this.camera);
	}

	// animate            
	update() {
		this.controls.update();
		this.render();
	}

	onWindowResize() {
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
	}

}