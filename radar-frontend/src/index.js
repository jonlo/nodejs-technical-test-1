
import { Scene3d } from './scene/scene3d'
import {AsideMenu} from './UI/asideMenu'

main();

function main() {
	const scene3d = new Scene3d();
	const asideMenu = new AsideMenu(scene3d); 
};


