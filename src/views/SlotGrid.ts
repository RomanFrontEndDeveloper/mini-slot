import { Container } from 'pixi.js';
import { SymbolView } from './SymbolView';
import { Ticker } from 'pixi.js';

export class SlotGrid extends Container {
	private symbols: SymbolView[][] = [];

	private readonly cellSize = 100;
	private readonly gap = 6;

	constructor(matrix: string[][]) {
		super();

		this.x = 180;
		this.y = 120;

		for (let row = 0; row < matrix.length; row++) {
			this.symbols[row] = [];

			for (let col = 0; col < matrix[row].length; col++) {
				const symbol = new SymbolView(matrix[row][col]);

				symbol.x = col * (this.cellSize + this.gap);
				symbol.y = row * (this.cellSize + this.gap);

				this.symbols[row][col] = symbol;

				this.addChild(symbol);
			}
		}
	}

	public setMatrix(matrix: string[][]) {
		for (let row = 0; row < matrix.length; row++) {
			for (let col = 0; col < matrix[row].length; col++) {
				this.symbols[row][col].setSymbol(matrix[row][col]);
			}
		}
	}

	public highlight(positions: number[][]) {
		// Спочатку очищаємо всі
		for (const row of this.symbols) {
			for (const symbol of row) {
				symbol.clearHighlight();
			}
		}

		// Підсвічуємо лише виграшні
		for (const [col, row] of positions) {
			this.symbols[row][col].highlight();
		}
	}

	public playSpin(matrix: string[][], onComplete: () => void) {
		let frame = 0;

		const ticker = new Ticker();

		ticker.add(() => {
			frame++;

			// рухаємо всю сітку вниз
			this.y += 10;

			if (frame >= 15) {
				ticker.stop();

				// повертаємо назад
				this.y = 120;

				// міняємо символи
				this.setMatrix(matrix);

				onComplete();
			}
		});

		ticker.start();
	}

	public getScatterPositions(matrix: string[][]): number[][] {
		const positions: number[][] = [];

		for (let row = 0; row < matrix.length; row++) {
			for (let col = 0; col < matrix[row].length; col++) {
				if (matrix[row][col] === 'SCATTER') {
					positions.push([col, row]);
				}
			}
		}

		return positions;
	}
}
