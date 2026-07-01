import { Application } from 'pixi.js';

import gameData from '../config/game.json';

import { SpinService } from '../services/SpinService';
import { SlotGrid } from '../views/SlotGrid';
import { UI } from '../views/UI';
import { SpinButton } from '../views/SpinButton';

export class GameController {
	private app: Application;

	private spinService = new SpinService();

	private balance = gameData.gameConfig.balance;
	private bet = gameData.gameConfig.bet;

	private grid!: SlotGrid;
	private ui!: UI;
	private button!: SpinButton;

	constructor(app: Application) {
		this.app = app;
	}

	init() {
		// Перший спін
		const spin = this.spinService.getCurrentSpin();

		// UI
		this.ui = new UI(this.balance, this.bet);

		// Сітка
		this.grid = new SlotGrid(spin.matrix);

		this.app.stage.addChild(this.ui);
		this.app.stage.addChild(this.grid);

		// Кнопка
		this.button = new SpinButton(() => {
			this.onSpin();
		});

		this.button.x = 360;
		this.button.y = 500;

		this.app.stage.addChild(this.button);
	}

	private onSpin() {
		if (this.balance < this.bet) {
			return;
		}

		this.button.setText('SPINNING...');
		this.button.setDisabled(true);

		const spin = this.spinService.nextSpin();

		this.balance -= this.bet;
		this.balance += spin.win.amount;

		this.grid.playSpin(spin.matrix, () => {
			this.ui.updateBalance(this.balance);
			this.ui.updateWin(spin.win.amount);

			if (spin.win.bonusTriggered) {
				this.ui.showBonus();

				const scatterPositions = this.grid.getScatterPositions(
					spin.matrix,
				);

				this.grid.highlight(scatterPositions);

				setTimeout(() => {
					this.ui.hideBonus();
				}, 2000);
			} else {
				this.ui.hideBonus();

				const positions = spin.win.lines?.[0]?.positions ?? [];

				this.grid.highlight(positions);
			}

			this.button.setDisabled(false);
			if (this.balance < this.bet) {
				this.button.setDisabled(true);
				this.button.setText('NO MONEY');
			}
			this.button.setText('SPIN');
		});
	}
}
