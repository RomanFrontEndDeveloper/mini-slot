import gameData from '../config/game.json';

export class SpinService {
	private currentSpin = 0;

	getCurrentSpin() {
		return gameData.spins[this.currentSpin];
	}

	nextSpin() {
		this.currentSpin++;

		if (this.currentSpin >= gameData.spins.length) {
			this.currentSpin = 0;
		}

		return gameData.spins[this.currentSpin];
	}
}
