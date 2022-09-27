import { RadarApi } from "../apiCalls/radarApi";

export class AsideMenu {

	constructor(scene3d) {
		this.scene3d = scene3d;
		this.setEventListeners();
	}

	setEventListeners() {
		document.getElementById("GetCoordsBtn").addEventListener("click", () => {
			this.getCoordinates();
		});

	}

	async getCoordinates() {
		const allChecked = document.querySelectorAll('input[name=protocols]:checked');
		const protocols = Array.from(allChecked).map(checkbox => checkbox.value);
		let scansData = {
			protocols: protocols,
			scan: this.scene3d.sceneData.scan
		};
		const coordinates = await RadarApi.getCoordinates(scansData);
		this.scene3d.setTarget(coordinates)
	}


}