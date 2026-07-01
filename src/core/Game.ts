import { Application } from 'pixi.js';
import { GameController } from '../controllers/GameController';

export class Game {
	public app = new Application();

	async init() {
		await this.app.init({
			width: 900,
			height: 600,
			background: '#1e1e2f',
		});

		document.body.appendChild(this.app.canvas);

		const controller = new GameController(this.app);

		controller.init();
	}
}
