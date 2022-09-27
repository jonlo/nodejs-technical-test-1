export class BackendUrl {
	
	static getURL() {
		return process.env.NODE_ENV === 'development' ? 'http://localhost:8888' : '/backend';
	}

}