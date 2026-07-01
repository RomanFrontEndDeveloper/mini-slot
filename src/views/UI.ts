import { Container, Text, TextStyle } from 'pixi.js';

export class UI extends Container {
	private balanceText: Text;
	private betText: Text;
	private winText: Text;
	private bonusText: Text;

	constructor(balance: number, bet: number) {
		super();

		const style = new TextStyle({
			fill: 0xffffff,
			fontSize: 28,
			fontWeight: 'bold',
		});

		this.balanceText = new Text({
			text: `Balance: ${balance}`,
			style,
		});

		this.betText = new Text({
			text: `Bet: ${bet}`,
			style,
		});

		this.winText = new Text({
			text: 'Win: 0',
			style,
		});

		this.bonusText = new Text({
			text: '',
			style: new TextStyle({
				fill: 0xffd54f,
				fontSize: 34,
				fontWeight: 'bold',
			}),
		});

		this.bonusText.anchor.set(0.5);
		this.bonusText.x = 450;
		this.bonusText.y = 80;

		this.addChild(this.bonusText);

		this.balanceText.position.set(40, 30);
		this.betText.position.set(350, 30);
		this.winText.position.set(650, 30);

		this.addChild(this.balanceText);
		this.addChild(this.betText);
		this.addChild(this.winText);
	}

	public updateBalance(balance: number) {
		this.balanceText.text = `Balance: ${balance}`;
	}

	public updateWin(win: number) {
		this.winText.text = `Win: ${win}`;
	}

	public showBonus() {
		this.bonusText.text = 'BONUS!';
	}

	public hideBonus() {
		this.bonusText.text = '';
	}
}
