import { Scan } from '../scans/scan'

export class RandomScansGenerator {

	static generate() {
		let totalScans = Math.floor(Math.random() * 22) + 1;
		const scans = [];
		for (let index = 0; index < totalScans; index++) {
			scans.push(this.createScan());
		}
		return scans;
	}

	static createScan() {
		let scan = new Scan();
		const createMech = Math.floor(Math.random() * 10) > 7;
		const createAllies = Math.floor(Math.random() * 10) > 5;

		if (createMech) {
			scan.enemies = { type: "mech", number: Math.floor(Math.random() * 30) };
		} else {
			scan.enemies = { type: "soldier", number: Math.floor(Math.random() * 30) };
		}
		if (createAllies) {
			scan.allies = Math.floor(Math.random() * 30);
		}
		return scan;
	}

}