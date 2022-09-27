
import { RandomScansGenerator } from "./randomScansGenerator";


export class SceneData {

	constructor(scene3d) {
		this.scene3d = scene3d;
		this.scan = RandomScansGenerator.generate();
	}

}