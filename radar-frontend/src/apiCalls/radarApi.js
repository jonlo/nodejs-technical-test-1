import { BackendUrl } from "./backendUrl";

export class RadarApi {

	static async getCoordinates(scansData) {
		let rawResponse = await fetch(`${BackendUrl.getURL()}/radar `, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(scansData)
		});
		const coordinates = await rawResponse.json();
		return coordinates;
	}

}