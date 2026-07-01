import { Container, Graphics, Text, TextStyle } from 'pixi.js';

export class SpinButton extends Container {
	private background: Graphics;

	constructor(onClick: () => void) {
		super();

		this.background = new Graphics();

		this.background.roundRect(0, 0, 180, 60, 12).fill(0x2ecc71);

		this.background.eventMode = 'static';
		this.background.cursor = 'pointer';
		this.background.on('pointerdown', onClick);

		const text = new Text({
			text: 'SPIN',
			style: new TextStyle({
				fill: 0xffffff,
				fontSize: 28,
				fontWeight: 'bold',
			}),
		});

		text.anchor.set(0.5);
		text.x = 90;
		text.y = 30;

		this.addChild(this.background);
		this.addChild(text);
	}

	public setDisabled(disabled: boolean) {
		this.background.eventMode = disabled ? 'none' : 'static';
		this.background.alpha = disabled ? 0.5 : 1;
	}

	public setText(text: string) {
		const label = this.children[1] as Text;
		label.text = text;
	}
}
